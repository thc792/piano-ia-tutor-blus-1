import os
import json
from flask import Flask, request, jsonify
# from dotenv import load_dotenv # Puoi commentare o rimuovere questa se non testi localmente con .env
import google.generativeai as genai

# load_dotenv() # Puoi commentare o rimuovere questa

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    print("ATTENZIONE CRITICA: La variabile d'ambiente GEMINI_API_KEY non è impostata!")
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        print("Chiave API Gemini configurata con successo.")
    except Exception as e:
        print(f"Errore durante la configurazione della chiave API Gemini: {e}")
        GEMINI_API_KEY = None # Invalida la chiave se la configurazione fallisce

# MODIFICA IMPORTANTE: Cambiata la route per la convenzione di Vercel
@app.route('/', methods=['POST'])
def get_ai_feedback_route(): # Nome funzione lasciato invariato
    if not GEMINI_API_KEY:
        print("Tentativo di usare l'API AI ma la chiave non è configurata correttamente.")
        return jsonify({"error": "Errore di configurazione del server AI. Contattare l'amministratore."}), 500

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Nessun dato JSON ricevuto"}), 400

        exercise_definition = data.get('exerciseDefinition')
        exercise_stats = data.get('exerciseStats')

        if not exercise_definition or not exercise_stats:
            return jsonify({"error": "Dati mancanti: 'exerciseDefinition' o 'exerciseStats' non forniti"}), 400

        # --- INIZIO PROMPT SINTETICO (MODIFICATO) ---
        prompt_parts = [
            "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Il tuo feedback deve essere CONCISO e strutturato in TRE PARTI OBBLIGATORIE come descritto alla fine di questo prompt.",
            f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
            f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
        ]
        
        exercise_bpm_str = str(exercise_definition.get('bpm', "N/A"))
        if exercise_bpm_str != "N/A": # Semplificato il controllo BPM
             prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")
        else:
            prompt_parts.append("I BPM specifici dell'esercizio non sono stati forniti; analizza il timing basandoti sulla coerenza relativa degli eventi e 'bpmAtEvent' se disponibile.")

        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data:
            prompt_parts.append("\n--- Dati Essenziali dalla Performance Corrente (Usa per il tuo giudizio) ---")
            prompt_parts.append("Analizza i 'playedNoteEvents' (timestamp, tipo, corrispondenza con note attese) per giudicare il timing, le note saltate e l'accuratezza delle altezze.")
            for rep_idx, rep_data in enumerate(all_repetitions_data):
                repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                prompt_parts.append(f"  Ripetizione {repetition_number}:")
                played_events = rep_data.get('playedNoteEvents', [])
                if played_events:
                    correct_matches = sum(1 for e in played_events if e.get('type') == 'correct_match')
                    incorrect_matches = sum(1 for e in played_events if e.get('type') == 'incorrect_match')
                    extra_notes = sum(1 for e in played_events if e.get('type') == 'extra_note')
                    
                    prompt_parts.append(f"    Eventi suonati totali: {len(played_events)}")
                    prompt_parts.append(f"    Note corrette in altezza: {correct_matches}")
                    prompt_parts.append(f"    Errori di altezza (nota diversa dall'attesa): {incorrect_matches}")
                    prompt_parts.append(f"    Note extra (non attese): {extra_notes}")
                    prompt_parts.append(f"    (Dovrai dedurre le note saltate confrontando gli eventi suonati con la struttura teorica dell'esercizio dai dati JSON completi che hai ricevuto, non solo da questo riassunto).")
                    
                    if len(played_events) > 6: 
                        prompt_parts.append("    Primi eventi (timestamp in ms, MIDI, tipo):")
                        for event in played_events[:3]:
                            ts_rel_to_rep_start = round(event.get('timestamp', 0) - rep_data.get('startTime', 0)) if rep_data.get('startTime') else "N/A"
                            prompt_parts.append(f"      - {ts_rel_to_rep_start}ms, MIDI {event['midiValuePlayed']}, {event['type']}")
                        prompt_parts.append("    Ultimi eventi (timestamp in ms, MIDI, tipo):")
                        for event in played_events[-3:]:
                            ts_rel_to_rep_start = round(event.get('timestamp', 0) - rep_data.get('startTime', 0)) if rep_data.get('startTime') else "N/A"
                            prompt_parts.append(f"      - {ts_rel_to_rep_start}ms, MIDI {event['midiValuePlayed']}, {event['type']}")
                    elif played_events:
                        prompt_parts.append("    Eventi (timestamp in ms, MIDI, tipo):")
                        for event in played_events:
                            ts_rel_to_rep_start = round(event.get('timestamp', 0) - rep_data.get('startTime', 0)) if rep_data.get('startTime') else "N/A"
                            prompt_parts.append(f"      - {ts_rel_to_rep_start}ms, MIDI {event['midiValuePlayed']}, {event['type']}")
                else:
                    prompt_parts.append("    Nessun evento nota registrato per questa ripetizione (indica che tutte le note sono state saltate).")
        else:
            prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi.")

        prompt_parts.append("\n\n--- IL TUO FEEDBACK (DEVE ESSERE MOLTO CONCISO, MASSIMO 5-6 FRASI TOTALI) ---")
        prompt_parts.append("DEVI FORNIRE IL FEEDBACK ESATTAMENTE NELLA SEGUENTE STRUTTURA A 3 PARTI:")
        prompt_parts.append("1.  **VERDETTO SINTETICO (1-2 frasi):** Basandoti sull'analisi dei 'playedNoteEvents' (accuratezza altezza, timing, note saltate), inizia con UNA delle seguenti frasi:")
        prompt_parts.append("    - Se la performance è prevalentemente corretta (poche o nessuna nota errata/saltata, timing generalmente buono): 'Bravissimo! L'esercizio risulta complessivamente positivo.'")
        prompt_parts.append("    - Se la performance necessita di miglioramenti significativi: 'Il mio giudizio è che l'esercizio necessita ancora di lavoro. Principalmente perché:' e poi elenca MOLTO BREVEMENTE (max 1-2 motivi chiave) tra: 'non hai rispettato i tempi delle note (anticipi/ritardi/durate errate)', 'hai saltato diverse note', 'hai suonato note errate in altezza'.")
        prompt_parts.append("2.  **UN CONSIGLIO PRATICO (1-2 frasi):** Fornisci UN solo suggerimento breve e specifico per aiutare l'utente a migliorare l'aspetto più critico che hai identificato nei 'playedNoteEvents'. Sii specifico sulla causa del problema (es. 'Rallenta e concentrati sul contare ad alta voce le suddivisioni per le crome nella battuta X.' o 'Presta attenzione all'alterazione (diesis/bemolle) sulla nota Y per correggere l'altezza.').")
        prompt_parts.append("3.  **INCORAGGIAMENTO FINALE (1 frase):** Concludi con una frase positiva e incoraggiante. Esempi: 'Continua così, vedo dei miglioramenti!' o 'Non mollare, con un po' di pratica mirata ci arriverai!' o 'Stai facendo progressi, l'impegno paga!'")
        # --- FINE PROMPT SINTETICO ---
        
        final_prompt = "\n".join(prompt_parts)
        
        model = genai.GenerativeModel('gemini-1.5-flash-latest') # o il modello che preferisci
        
        # generation_config come nel tuo file originale (commentata = default)
        generation_config = genai.types.GenerationConfig(
            # temperature=0.7, # Esempio, puoi aggiustare
            # max_output_tokens=1500 # Esempio, adatta ai tuoi bisogni e limiti del modello
        )
        # Se vuoi provare a forzare la sintesi, potresti decommentare e usare:
        # generation_config = genai.types.GenerationConfig(
        #     temperature=0.4, 
        #     max_output_tokens=300 
        # )

        # safety_settings come nel tuo file originale
        safety_settings=[
            {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        ]

        response = model.generate_content(
            final_prompt,
            generation_config=generation_config,
            safety_settings=safety_settings
        )
        
        ai_text_response = "" # Logica di estrazione risposta identica al tuo file
        if response.candidates:
            if response.prompt_feedback and response.prompt_feedback.block_reason:
                return jsonify({"error": f"Richiesta bloccata per motivi di sicurezza del prompt: {response.prompt_feedback.block_reason_message}"}), 400

            first_candidate = response.candidates[0]
            if first_candidate.finish_reason.name == "SAFETY":
                 safety_ratings_info = ", ".join([f"{sr.category.name}: {sr.probability.name}" for sr in first_candidate.safety_ratings])
                 return jsonify({"error": "La risposta dell'AI è stata bloccata per motivi di sicurezza."}), 500
            
            if first_candidate.content and first_candidate.content.parts:
                ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
            else:
                ai_text_response = "L'AI non ha fornito una risposta testuale utilizzabile (parti mancanti o contenuto non valido)."
        else:
             ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
             if response.prompt_feedback and response.prompt_feedback.block_reason:
                ai_text_response = f"Richiesta bloccata (nessun candidato): {response.prompt_feedback.block_reason_message}"
                return jsonify({"aiFeedbackText": ai_text_response}), 400 
        
        return jsonify({"aiFeedbackText": ai_text_response.strip()})

    except Exception as e:
        import traceback 
        # Modificato leggermente il messaggio di errore per essere più generico se la route cambia
        print(f"ERRORE CRITICO VERCEL nell'endpoint: {e}") 
        print(traceback.format_exc()) 
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500

# Non serve if __name__ == '__main__': per Vercel