/**
 * js/exercises/performance_studies.js
 * Esercizi di "Performance Studies" che integrano melodia, accompagnamento e improvvisazione.
 * Esercizio PERF-C-1: Slow Blues Study in C (24 Battute).
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Funzione helper per trasporre una singola chiave di nota (es. "c/2" -> "c/3")
function transposeBassKey(key) {
    if (key.startsWith("r/")) { // Non trasporre le pause
        return key;
    }
    const parts = key.split('/');
    if (parts.length === 2) {
        const note = parts[0];
        const octave = parseInt(parts[1], 10);
        if (!isNaN(octave)) {
            return `${note}/${octave + 1}`;
        }
    }
    return key; // Ritorna la chiave originale se non è nel formato atteso
}

// Funzione helper per trasporre un array di valori MIDI
function transposeMidiValues(midiValues) {
    if (!midiValues || midiValues.length === 0) return []; // Gestisce array vuoti o non definiti
    return midiValues.map(value => value + 12);
}

// Array che conterrà tutti gli esercizi di questa categoria (originale)
const performanceStudiesExercisesOriginal = [
    // =====================================================================================
    // === Esercizio PERF-C-1 - Slow Blues Study in C (24 Battute) ===
    // =====================================================================================
    // Tonalità: Do. Studio di esecuzione slow blues con melodia ("testa") e assolo scritto.
    // Mano destra: Melodia espressiva e assolo.
    // Mano sinistra: Accompagnamento con accordi tenuti/arpeggiati.
    {
        id: "perfStudy-C-SlowBlues24Bar", // ID aggiornato per riflettere le 24 battute
        name: "Slow Blues Study in C (24 Bar)",
        category: "performance_studies", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Implicito feel terzinato lento
        repetitions: 1, // Per un pezzo lungo, 1 ripetizione è solitamente sufficiente per iniziare

        notesTreble: [ // Mano Destra: Melodia e Assolo
            // === CHORUS 1: MELODIA "TESTA" ===
            // Bar 1 (C7) - Inizio espressivo
            { keys: ["g/4"], duration: "h.", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 2 (F7) - Risposta sulla sottodominante
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 3 (C7) - Ritorno alla tonica
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 4 (C7) - Frase con blue note
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 5 (F7) - Melodia su F7
            { keys: ["c/5"], duration: "h.", midiValue: 72 }, { keys: ["ab/4"], duration: "q", midiValue: 68 },
            // Bar 6 (F7) - Continuazione
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 7 (C7) - Frase discendente
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 8 (A7alt o A7) - Tensione su A7
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 9 (Dm7) - Melodia su Dm7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 10 (G7) - Melodia su G7
            { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 11 (C7) - Preparazione turnaround
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            // Bar 12 (G7) - Turnaround melodico
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },

            // === CHORUS 2: ASSOLO SCRITTO ===
            // Bar 13 (C7) - Inizio assolo con frase bluesy
            { keys: ["eb/5"], duration: "q", midiValue: 75 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            // Bar 14 (F7) - Lick su F7 con bend simulato Ab->A
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 15 (C7) - Frase con targeting di E e Bb
            { keys: ["e/4"], duration: "q.", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "h", midiValue: 70 },
            // Bar 16 (C7) - Sviluppo con pentatonica maggiore
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 17 (F7) - Lick con blue note di F (B naturale)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 18 (F7) - Continuazione
            { keys: ["ab/4"], duration: "h", midiValue: 68 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 19 (C7) - Frase misolidia su C7
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 20 (A7alt o A7) - Frase che usa note alterate di A7 (es. G, Eb)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 21 (Dm7) - Lick su Dm7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["f/5"], duration: "q", midiValue: 77 },
            // Bar 22 (G7) - Lick su G7
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 23 (C7) - Frase conclusiva
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 24 (G7) - Ultimo turnaround, risolve a C implicito all'inizio della ripetizione
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi (semibrevi o pattern lenti)
            // Chorus 1
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 1 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // 2 F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 3 C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 4 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // 5 F7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // 6 F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 7 C7
            { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33,37,40,43] }, // 8 A7alt (A C# E G)
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "w", midiValues: [38,41,45,48] }, // 9 Dm7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // 10 G7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 11 C7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // 12 G7

            // Chorus 2 (stessa progressione armonica per la mano sinistra in questo studio)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 13 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // 14 F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 15 C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 16 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // 17 F7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // 18 F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 19 C7
            { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33,37,40,43] }, // 20 A7alt
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "w", midiValues: [38,41,45,48] }, // 21 Dm7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // 22 G7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // 23 C7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }  // 24 G7
        ] // end notesBass
    },
     // =====================================================================================
    // === Esercizio PERF-F-2 - Up-Tempo Shuffle Study in F (24 Battute) ===
    // =====================================================================================
    // Tonalità: Fa. Studio di esecuzione Up-Tempo Shuffle con melodia e assolo scritto.
    // Mano destra: Melodia ritmica e assolo energico.
    // Mano sinistra: Pattern Shuffle di base.
    {
        id: "perfStudy-F-Shuffle24Bar",
        name: "Up-Tempo Shuffle Study in F (24 Bar)",
        category: "performance_studies",
        staveLayout: "grand",
        keySignature: "F", // Un bemolle (Bb)
        timeSignature: "4/4", // Implicito feel shuffle (terzine di crome)
        repetitions: 1,

        notesTreble: [ // Mano Destra: Melodia e Assolo
            // === CHORUS 1: MELODIA "TESTA" SHUFFLE ===
            // Bar 1 (F7) - Frase ritmica incisiva
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Bend Ab->A
            // Bar 2 (Bb7) - Risposta su Bb7
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 3 (F7) - Ritorno
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 4 (F7) - Variazione ritmica
            { keys: ["f/4"], duration: "q.", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 5 (Bb7) - Frase su Bb7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // G e Eb su Bb7
            // Bar 6 (Bb7 o Bdim7) - Se Bdim7 (B D F Ab)
            { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 7 (F7) - Ritorno a F
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 8 (C7) - Frase su C7
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // E è 3a di C
            { keys: ["bb/3"], duration: "h", midiValue: 58 }, // Bb è b7 di C
            // Bar 9 (Gm7) - Frase su Gm7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["bb/3"], duration: "h", midiValue: 58 },
            // Bar 10 (C7) - Continuazione
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 11 (F7) - Preparazione turnaround
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 12 (C7) - Turnaround melodico
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["bb/3"], duration: "8", midiValue: 58 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },

            // === CHORUS 2: ASSOLO SCRITTO SHUFFLE ===
            // Bar 13 (F7) - Inizio assolo con riff pentatonico
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 14 (Bb7) - Lick veloce su Bb7
            { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["ab/3"], duration: "8", midiValue: 56 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 15 (F7) - Frase con blue note B
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // B naturale
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 16 (F7) - Ripetizione ritmica
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["r/4"], duration: "8" }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["r/4"], duration: "8" },
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 17 (Bb7) - Sequenza discendente
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["bb/3"], duration: "h", midiValue: 58 },
            // Bar 18 (Bb7 o Bdim7) - Se Bdim7, frase su Bdim7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, // B naturale
            // Bar 19 (F7) - Ritorno a F con enfasi sulla 3a maggiore
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q.", midiValue: 57 },
            { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 20 (C7) - Lick misolidio su C7
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["bb/3"], duration: "8", midiValue: 58 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Bar 21 (Gm7) - Frase su Gm7
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 22 (C7) - Continuazione
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            // Bar 23 (F7) - Frase conclusiva energica
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 24 (C7) - Turnaround finale potente
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["g/5"], duration: "h", midiValue: 79 },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Pattern Shuffle Semplice (Fondamentale-Quinta / Fondamentale-Sesta)
            // Bar 1 (F7) - F C F C
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 2 (Bb7) - Bb F Bb F
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 3 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 4 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 5 (Bb7)
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 6 (Bb7 o Bdim7) - Per Bb7: Bb F Bb F
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 7 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 8 (C7) - C G C G
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 9 (Gm7) - G D G D
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Bar 10 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 11 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 12 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },

            // Chorus 2 (stesso pattern shuffle per la mano sinistra)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, // 13 F7
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // 14 Bb7
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, // 15 F7
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, // 16 F7
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // 17 Bb7
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // 18 Bb7
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, // 19 F7
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // 20 C7
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, // 21 Gm7
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // 22 C7
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, // 23 F7
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }  // 24 C7
        ] // end notesBass
    },  
    // =====================================================================================
    // === Esercizio PERF-Gm-3 - Minor Blues Study in Gm (24 Battute) ===
    // =====================================================================================
    // Tonalità: Sol Minore. Studio di esecuzione Minor Blues con melodia e assolo scritto.
    // Mano destra: Melodia espressiva e assolo.
    // Mano sinistra: Walking Bass semplice e melodico.
    {
        id: "perfStudy-Gm-MinorBlues24Bar",
        name: "Minor Blues Study in Gm (24 Bar)",
        category: "performance_studies",
        staveLayout: "grand",
        keySignature: "Bb", // Chiave di Sol Minore (2 bemolli: Bb, Eb)
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Melodia e Assolo
            // === CHORUS 1: MELODIA "TESTA" MINOR BLUES ===
            // Scala Pentatonica Minore di Gm: G Bb C D F
            // Scala Blues di Gm: G Bb C C# D F
            // Scala Gm Armonica (per D7): G A Bb C D Eb F#
            // Bar 1 (Gm7) - Inizio malinconico
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 2 (Gm7) - Continuazione
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "h.", midiValue: 58 },
            // Bar 3 (Cm7) - Frase su Cm7 (iv)
            { keys: ["eb/4"], duration: "h", midiValue: 63 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 4 (Cm7) - Sviluppo
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 5 (Gm7) - Ritorno a Gm7
            { keys: ["g/3"], duration: "h.", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 6 (Gm7) - Frase con blue note C#
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 7 (Eb7) - Frase su Eb7 (bVI7)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, // G (3a di Eb)
            { keys: ["bb/3"], duration: "h", midiValue: 58 }, // Bb (5a di Eb)
            // Bar 8 (D7alt) - Tensione su D7alt (F# è 3a)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // A e C (b5 e b7 di D7)
            { keys: ["gb/3"], duration: "h", midiValue: 54 }, // F# (3a di D7)
            // Bar 9 (Gm7) - Risoluzione
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 10 (D7alt) - Altra frase su D7alt
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, // Ab (b5 di D7)
            { keys: ["gb/3"], duration: "h", midiValue: 54 }, // F#
            // Bar 11 (Gm7) - Preparazione turnaround
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 12 (D7alt) - Turnaround melodico
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, // F#
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },

            // === CHORUS 2: ASSOLO SCRITTO MINOR BLUES ===
            // Bar 13 (Gm7) - Inizio assolo con pentatonica di Gm
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 14 (Gm7) - Frase con blue note C#
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["db/5"], duration: "q", midiValue: 73 }, // C#
            { keys: ["bb/4"], duration: "h", midiValue: 70 },
            // Bar 15 (Cm7) - Lick su Cm7
            { keys: ["eb/4"], duration: "q.", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            // Bar 16 (Cm7) - Sviluppo
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 17 (Gm7) - Ritorno a Gm7 con frase discendente
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 18 (Gm7) - Pattern ritmico
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 19 (Eb7) - Frase su Eb7 (Eb G Bb Db)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["db/5"], duration: "h", midiValue: 73 },
            // Bar 20 (D7alt) - Lick su D7alt usando F# e note alterate
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, // F#
            { keys: ["a/4"], duration: "q", midiValue: 69 },   // A (b13 o #11)
            { keys: ["c/5"], duration: "q", midiValue: 72 },   // C (b7)
            { keys: ["eb/5"], duration: "q", midiValue: 75 },  // Eb (b9)
            // Bar 21 (Gm7) - Ritorno a Gm7
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 22 (D7alt) - Altro lick su D7alt
            { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["eb/5"], duration: "8", midiValue: 75 },
            { keys: ["d/5"], duration: "h", midiValue: 74 },
            // Bar 23 (Gm7) - Frase conclusiva
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 24 (D7alt) - Ultimo turnaround
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass semplice per Minor Blues
            // Chorus 1
            // Bar 1 (Gm7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 2 (Gm7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, // Passaggio
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 3 (Cm7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            // Bar 4 (Cm7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 5 (Gm7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            // Bar 6 (Gm7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Bar 7 (Eb7)
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["db/3"], duration: "q", midiValue: 49 },
            // Bar 8 (D7alt)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["gb/2"], duration: "q", midiValue: 42 }, // F#
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Bar 9 (Gm7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["bb/1"], duration: "q", midiValue: 34 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 10 (D7alt)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["ab/2"], duration: "q", midiValue: 44 }, // G# (b5)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["gb/2"], duration: "q", midiValue: 42 }, // F#
            // Bar 11 (Gm7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 12 (D7alt)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["gb/2"], duration: "q", midiValue: 42 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, // A (b13)

            // Chorus 2 (stesso walking bass per semplicità in questo studio, o variazioni)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, // 13 Gm7
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, // 14 Gm7
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["eb/2"], duration: "q", midiValue: 39 }, // 15 Cm7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // 16 Cm7
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, // 17 Gm7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, // 18 Gm7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // 19 Eb7
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["db/3"], duration: "q", midiValue: 49 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["gb/2"], duration: "q", midiValue: 42 }, // 20 D7alt
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["bb/1"], duration: "q", midiValue: 34 }, // 21 Gm7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["ab/2"], duration: "q", midiValue: 44 }, // 22 D7alt
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["gb/2"], duration: "q", midiValue: 42 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // 23 Gm7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["gb/2"], duration: "q", midiValue: 42 }, // 24 D7alt
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["a/2"], duration: "q", midiValue: 45 }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio PERF-Bb-4 - Funky Blues Study in Bb (24 Battute) ===
    // =====================================================================================
    // Tonalità: Si Bemolle. Studio di esecuzione Funky Blues con melodia e assolo scritto.
    // Mano destra: Melodia ritmica/sincopata e assolo funky.
    // Mano sinistra: Linea di basso funky/percussiva.
    {
        id: "perfStudy-Bb-FunkyBlues24Bar",
        name: "Funky Blues Study in Bb (24 Bar)",
        category: "performance_studies",
        staveLayout: "grand",
        keySignature: "Bb", // Due bemolli (Bb, Eb)
        timeSignature: "4/4", // Implicito feel funky con sedicesimi
        repetitions: 1,

        notesTreble: [ // Mano Destra: Melodia e Assolo Funky
            // === CHORUS 1: MELODIA "TESTA" FUNKY ===
            // Bar 1 (Bb7) - Riff sincopato
            { keys: ["r/4"], duration: "8" }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (Bb7) - Continuazione
            { keys: ["r/4"], duration: "8" }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            // Bar 3 (Eb7) - Riff su Eb7
            { keys: ["r/4"], duration: "8" }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["db/5"], duration: "8", midiValue: 73 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (Eb7) - Variazione
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["db/5"], duration: "q", midiValue: 73 },
            // Bar 5 (Bb7) - Ritorno al tema principale
            { keys: ["r/4"], duration: "8" }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 6 (Fm7 | Bb7) - ii-V verso Eb (ma qui Bb7 è I)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, // Su Fm7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su Bb7
            // Bar 7 (Eb7 o Edim7) - Frase su Eb7
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["db/5"], duration: "h", midiValue: 73 },
            // Bar 8 (Dm7 | G7alt) - Colore
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Su Dm7
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su G7alt (B è 3a, F è b7)
            // Bar 9 (Cm7) - Frase su Cm7
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["bb/4"], duration: "h", midiValue: 70 },
            // Bar 10 (F7) - Frase su F7
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 11 (Bb7 | Gm7) - Turnaround
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, // Su Bb7
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // Su Gm7
            // Bar 12 (Cm7 | F7) - Turnaround
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Su Cm7
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su F7

            // === CHORUS 2: ASSOLO SCRITTO FUNKY ===
            // Bar 13 (Bb7) - Riff di apertura assolo
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["r/4"], duration: "8" }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 14 (Bb7) - Sviluppo con sedicesimi (impliciti o scritti)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["r/4"], duration: "q" },
            // Bar 15 (Eb7) - Lick funky su Eb7
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 16 (Eb7) - Ghost notes e staccato (implicito)
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["r/4"], duration: "8" }, { keys: ["db/5"], duration: "8", midiValue: 73 }, { keys: ["r/4"], duration: "8" },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 17 (Bb7) - Ritorno al tema con variazione
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 18 (Fm7 | Bb7) - Frase che attraversa il ii-V
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, // Fm7
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // Bb7
            // Bar 19 (Eb7 o Edim7) - Lick con blue note di Bb (E naturale) su Eb7
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // E nat
            { keys: ["db/4"], duration: "h", midiValue: 61 },
            // Bar 20 (Dm7 | G7alt) - Frase più cromatica
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, // F#
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 21 (Cm7) - Lick su Cm7
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 22 (F7) - Lick energico su F7
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["eb/5"], duration: "8", midiValue: 75 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 23 (Bb7 | Gm7) - Turnaround funky
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su Gm7
            // Bar 24 (Cm7 | F7) - Finale con stinger
            { keys: ["eb/5"], duration: "q", midiValue: 75 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Su Cm7
            { keys: ["a/4"], duration: "q.", midiValue: 69 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, // Su F7, F alta come stinger
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Linea di Basso Funky (Pattern Ostinato Semplificato)
            // Bar 1 (Bb7) - Bb Bb(oct) Bb Ab
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["r/4"], duration: "q"},
            // Bar 2 (Bb7)
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["r/4"], duration: "q"},
            // Bar 3 (Eb7) - Eb Eb(oct) Eb Db
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["r/4"], duration: "q"},
            // Bar 4 (Eb7)
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["r/4"], duration: "q"},
            // Bar 5 (Bb7)
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["r/4"], duration: "q"},
            // Bar 6 (Fm7 | Bb7) - Semplificato: F F Bb Bb
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            // Bar 7 (Eb7)
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["r/4"], duration: "q"},
            // Bar 8 (Dm7 | G7alt) - Semplificato: D D G G
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 9 (Cm7) - C C C Bb
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["r/4"], duration: "q"},
            // Bar 10 (F7) - F F F Eb
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["f/1"], duration: "8", midiValue: 29 }, { keys: ["eb/1"], duration: "8", midiValue: 27 }, { keys: ["r/4"], duration: "q"},
            // Bar 11 (Bb7 | Gm7) - Semplificato: Bb Bb G G
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 12 (Cm7 | F7) - Semplificato: C C F F
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["f/2"], duration: "q", midiValue: 41 },

            // Chorus 2 (stesso pattern di basso funky)
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, //13
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["r/4"], duration: "q"},
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, //14
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["r/4"], duration: "q"},
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, //15
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["r/4"], duration: "q"},
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, //16
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["r/4"], duration: "q"},
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, //17
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["r/4"], duration: "q"},
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, //18
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, //19
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["r/4"], duration: "q"},
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, //20
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, //21
            { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["r/4"], duration: "q"},
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, //22
            { keys: ["f/1"], duration: "8", midiValue: 29 }, { keys: ["eb/1"], duration: "8", midiValue: 27 }, { keys: ["r/4"], duration: "q"},
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, //23
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, //24
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["f/2"], duration: "q", midiValue: 41 }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio PERF-G-5 - Jazz Blues Study in G (24 Battute) ===
    // =====================================================================================
    // Tonalità: Sol. Studio di esecuzione Jazz Blues con melodia sofisticata e assolo.
    // Mano destra: Melodia e assolo con linguaggio bebop/jazz.
    // Mano sinistra: Walking Bass avanzato.
    {
        id: "perfStudy-G-JazzBlues24Bar",
        name: "Jazz Blues Study in G (24 Bar)",
        category: "performance_studies",
        staveLayout: "grand",
        keySignature: "G", // Un diesis (F#)
        timeSignature: "4/4", // Implicito feel swing
        repetitions: 1,

        notesTreble: [ // Mano Destra: Melodia e Assolo Jazz Blues
            // === CHORUS 1: MELODIA "TESTA" JAZZ BLUES ===
            // Bar 1 (Gmaj7) - Frase elegante
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["gb/4"], duration: "q", midiValue: 66 }, // F#
            // Bar 2 (Bm7b5 | E7alt) - Navigare il ii-V
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // Su Bm7b5 (F è b5, D è b3)
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // Su E7alt (G# è 3, D è b7)
            // Bar 3 (Am7 | D7alt) - Altro ii-V
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su Am7
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Su D7alt (F# è 3, C è b7)
            // Bar 4 (G7 o Gmaj7) - Risoluzione con estensione
            { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["e/5"], duration: "h", midiValue: 76 }, // E (13a di G7)
            // Bar 5 (Cmaj7 o C7) - Frase su C
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 6 (Cm7 | F7) - ii-V verso Bb
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, // Su Cm7
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Su F7
            // Bar 7 (Gmaj7/B | Bbdim7) - Passaggio
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su Gmaj7/B
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["db/5"], duration: "q", midiValue: 73 }, // Su Bbdim7 (A e C#)
            // Bar 8 (Am7 | D7alt) - Ritorno al ii-V di G
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["gb/4"], duration: "h", midiValue: 66 },
            // Bar 9 (G6 | Eb7alt)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Su G6
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, // Su Eb7alt (G è 3, Db è b7)
            // Bar 10 (Am7 | D7alt)
            { keys: ["a/4"], duration: "q.", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 11 (Gmaj7 | Ebm7 - Ab7)
            { keys: ["d/5"], duration: "h", midiValue: 74 }, // Su Gmaj7
            { keys: ["db/5"], duration: "q", midiValue: 73 }, { keys: ["gb/4"], duration: "q", midiValue: 66 }, // Su Ebm7-Ab7
            // Bar 12 (Am7 | D7alt) - Turnaround
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["d/4"], duration: "h", midiValue: 62 },

            // === CHORUS 2: ASSOLO SCRITTO JAZZ BLUES ===
            // Bar 13 (G7) - Inizio assolo con arpeggio esteso
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, // G9(13)
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            // Bar 14 (C7 | F7) - Lick sul ciclo di quarte
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su C7
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Su F7
            // Bar 15 (Bbmaj7 | Eb7alt)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, // D (3a di Bbmaj7)
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su Eb7alt (G# è 3, F è 9)
            // Bar 16 (Am7 | D7alt) - Frase bebop
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 17 (Gmaj7 | C#m7b5 - F#7alt)
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, // Su Gmaj7
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // Su C#m7b5-F#7alt
            // Bar 18 (Bm7 | E7alt)
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, // Su Bm7
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, // Su E7alt (C è b13, G# è 3)
            // Bar 19 (Am7 | Ab7alt) - Uso di tritono sub
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // Su Am7
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // Su Ab7alt (Db è 3, F# è b7)
            // Bar 20 (Gmaj7/D | Db7alt)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Su Gmaj7/D
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Su Db7alt (F è 3, Cb(B) è b7)
            // Bar 21 (Cmaj7 | Cm6) - Contrasto modale
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Su Cmaj7
            // Bar 22 (G7/B | E7/G#)
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su G7/B
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Su E7/G#
            // Bar 23 (Am7 | D7alt) - Lick II-V finale
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 24 (G6/9) - Risoluzione finale ricca
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["a/5"], duration: "8", midiValue: 81 },
            { keys: ["g/5"], duration: "h", midiValue: 79 }, // G6/9 (G B D E A)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass Avanzato per Jazz Blues in G - SINTASSI CORRETTA
            // Chorus 1
            { keys: ["g/2", "b/2", "d/3", "gb/3"], duration: "w", midiValues: [43,47,50,54] }, // 1 Gmaj7
            { keys: ["b/2", "a/2", "ab/2", "d/2"], duration: "w", midiValues: [47,45,44,38] }, // 2 Bm7b5-E7alt
            { keys: ["a/2", "g/2", "gb/2", "c/2"], duration: "w", midiValues: [45,43,42,36] }, // 3 Am7-D7alt
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // 4 G7
            { keys: ["c/2", "e/2", "g/2", "b/2"], duration: "w", midiValues: [36,40,43,47] }, // 5 Cmaj7
            { keys: ["c/2", "bb/2", "a/2", "eb/2"], duration: "w", midiValues: [36,46,45,39] }, // 6 Cm7-F7
            { keys: ["b/1", "d/2", "a/2", "db/3"], duration: "w", midiValues: [35,38,45,49] }, // 7 Gmaj7/B-Bbdim7
            { keys: ["a/1", "g/1", "d/2", "gb/2"], duration: "w", midiValues: [33,31,38,42] }, // 8 Am7-D7alt
            { keys: ["g/1", "e/2", "db/2", "g/1"], duration: "w", midiValues: [31,40,37,31] }, // 9 G6-Eb7alt
            { keys: ["a/1", "c/2", "d/2", "gb/2"], duration: "w", midiValues: [33,36,38,42] }, // 10 Am7-D7alt
            { keys: ["g/2", "b/2", "eb/2", "ab/1"], duration: "w", midiValues: [43,47,39,32] }, // 11 Gmaj7 | Ebm7-Ab7
            { keys: ["d/2", "g/2", "c/2", "f/2"], duration: "w", midiValues: [38,43,36,41] }, // 12 Dm7-G7alt (o Am7-D7alt)

            // Chorus 2
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // 13 G7
            { keys: ["c/2", "e/2", "f/2", "bb/1"], duration: "w", midiValues: [36,40,41,34] }, // 14 C7-F7
            { keys: ["bb/1", "d/2", "g/2", "db/2"], duration: "w", midiValues: [34,38,43,37] }, // 15 Bbmaj7-Eb7alt
            { keys: ["a/1", "g/1", "d/2", "gb/2"], duration: "w", midiValues: [33,31,38,42] }, // 16 Am7-D7alt
            { keys: ["g/1", "b/1", "db/2", "gb/2"], duration: "w", midiValues: [31,35,37,42] }, // 17 Gmaj7 | C#m7b5-F#7alt
            { keys: ["b/1", "a/1", "ab/1", "d/1"], duration: "w", midiValues: [35,33,32,26] }, // 18 Bm7-E7alt
            { keys: ["a/1", "e/2", "ab/1", "db/2"], duration: "w", midiValues: [33,40,32,37] }, // 19 Am7-Ab7alt
            { keys: ["d/2", "g/1", "db/2", "f/1"], duration: "w", midiValues: [38,31,37,29] }, // 20 Gmaj7/D-Db7alt
            { keys: ["c/2", "g/2", "eb/2", "a/2"], duration: "w", midiValues: [36,43,39,45] }, // 21 Cmaj7-Cm6
            { keys: ["b/1", "f/2", "ab/1", "d/2"], duration: "w", midiValues: [35,41,32,38] }, // 22 G7/B-E7/G#
            { keys: ["a/1", "c/2", "d/2", "gb/2"], duration: "w", midiValues: [33,36,38,42] }, // 23 Am7-D7alt
            { keys: ["g/1", "b/1", "e/2", "a/2"], duration: "w", midiValues: [31,35,40,45] }  // 24 G6/9
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio WB-C-5 - Walking Bass Centrale (4 Ottave) in DO - 24 Battute ===
    // =====================================================================================
    // Tonalità: Do. Walking bass e accordi pensati per tastiere a 4 ottave (range C2-C6).
    // Mano sinistra principalmente C2-C4. Mano destra principalmente C3-C5.
    // Progressione blues estesa a 24 battute.
    {
        id: "walkingBass-C-4Octave24Bar",
        name: "Walking Bass DO (4 Ottave, 24 Bar)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Accordi (Range C3-C5 circa)
            // Chorus 1
            // Bar 1 (C7: C3-E3-G3-Bb3)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48,52,55,58] },
            // Bar 2 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48,52,55,58] },
            // Bar 3 (F7: F3-A3-C4-Eb4)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53,57,60,63] },
            // Bar 4 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53,57,60,63] },
            // Bar 5 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48,52,55,58] },
            // Bar 6 (A7: A2-C#3-E3-G3) -> C#3 è Db3
            { keys: ["a/2", "db/3", "e/3", "g/3"], duration: "w", midiValues: [45,49,52,55] },
            // Bar 7 (Dm7: D3-F3-A3-C4)
            { keys: ["d/3", "f/3", "a/3", "c/4"], duration: "w", midiValues: [50,53,57,60] },
            // Bar 8 (G7: G2-B2-D3-F3)
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "w", midiValues: [43,47,50,53] },
            // Bar 9 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48,52,55,58] },
            // Bar 10 (G7)
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "w", midiValues: [43,47,50,53] },
            // Bar 11 (Dm7)
            { keys: ["d/3", "f/3", "a/3", "c/4"], duration: "w", midiValues: [50,53,57,60] },
            // Bar 12 (G7)
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "w", midiValues: [43,47,50,53] },

            // Chorus 2
            // Bar 13 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48,52,55,58] },
            // Bar 14 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53,57,60,63] },
            // Bar 15 (C7/E: E3-G3-Bb3-C4 | Ebdim7: Eb3-Gb3-A3-C4)
            { keys: ["e/3", "g/3", "bb/3", "c/4"], duration: "h", midiValues: [52,55,58,60] },
            { keys: ["eb/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [51,54,57,60] },
            // Bar 16 (Dm7 | G7)
            { keys: ["d/3", "f/3", "a/3", "c/4"], duration: "h", midiValues: [50,53,57,60] },
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "h", midiValues: [43,47,50,53] },
            // Bar 17 (Cmaj7: C3-E3-G3-B3)
            { keys: ["c/3", "e/3", "g/3", "b/3"], duration: "w", midiValues: [48,52,55,59] },
            // Bar 18 (F#m7b5: F#2-A2-C3-E3 | B7alt: B2-D#3-F#3-A3) -> D#3 è Eb3
            { keys: ["gb/2", "a/2", "c/3", "e/3"], duration: "h", midiValues: [42,45,48,52] },
            { keys: ["b/2", "eb/3", "gb/3", "a/3"], duration: "h", midiValues: [47,51,54,57] },
            // Bar 19 (Em7: E3-G3-B3-D4 | A7alt: A2-C#3-Eb3-G3)
            { keys: ["e/3", "g/3", "b/3", "d/4"], duration: "h", midiValues: [52,55,59,62] },
            { keys: ["a/2", "db/3", "eb/3", "g/3"], duration: "h", midiValues: [45,49,51,55] },
            // Bar 20 (Dm7 | G7)
            { keys: ["d/3", "f/3", "a/3", "c/4"], duration: "h", midiValues: [50,53,57,60] },
            { keys: ["g/2", "b/2", "d/3", "f/3"], duration: "h", midiValues: [43,47,50,53] },
            // Bar 21 (C7 | Ab7: Ab2-C3-Eb3-Gb3)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48,52,55,58] },
            { keys: ["ab/2", "c/3", "eb/3", "gb/3"], duration: "h", midiValues: [44,48,51,54] },
            // Bar 22 (Dm7 | Db7: Db3-F3-Ab3-Cb4(B3))
            { keys: ["d/3", "f/3", "a/3", "c/4"], duration: "h", midiValues: [50,53,57,60] },
            { keys: ["db/3", "f/3", "ab/3", "b/3"], duration: "h", midiValues: [49,53,56,59] },
            // Bar 23 (C7/G: G2-C3-E3-Bb3 | G7alt)
            { keys: ["g/2", "c/3", "e/3", "bb/3"], duration: "h", midiValues: [43,48,52,58] },
            { keys: ["g/2", "b/2", "db/3", "f/3"], duration: "h", midiValues: [43,47,49,53] }, // G7(b5b9)
            // Bar 24 (C6/9: C3-E3-G3-A3-D4)
            { keys: ["c/3", "e/3", "g/3", "a/3", "d/4"], duration: "w", midiValues: [48,52,55,57,62] }
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass (Range C2-C4 circa)
            // Chorus 1
            // Bar 1 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            // Bar 2 (C7)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Salto
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 3 (F7)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            // Bar 4 (F7)
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 5 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // C/G implicito
            // Bar 6 (A7)
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, // C#
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 7 (Dm7)
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, // b7
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 8 (G7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // b7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 }, // B1 è MIDI 35, ok
            // Bar 9 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, // 6a
            // Bar 10 (G7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, // B2 è MIDI 47
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 11 (Dm7)
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Bar 12 (G7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["b/2"], duration: "q", midiValue: 47 },

            // Chorus 2
            // Bar 13 (C7)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Bar 14 (F7)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Bar 15 (C7/E | Ebdim7)
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // C7/E
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["gb/2"], duration: "q", midiValue: 42 },// Ebdim7
            // Bar 16 (Dm7 | G7)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, // C (4a di G)
            // Bar 17 (Cmaj7)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // B3 è MIDI 59, ok
            // Bar 18 (F#m7b5 | B7alt)
            { keys: ["gb/2"], duration: "q", midiValue: 42 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, // F#m7b5
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, // B7alt
            // Bar 19 (Em7 | A7alt)
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, // Eb (b5 di A7alt)
            // Bar 20 (Dm7 | G7)
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Bar 21 (C7 | Ab7)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            // Bar 22 (Dm7 | Db7)
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["gb/2"], duration: "q", midiValue: 42 }, // F#
            // Bar 23 (C7/G | G7alt)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // C7/G
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, // G7alt
            // Bar 24 (C6/9)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["d/3"], duration: "q", midiValue: 50 }
        ] // end notesBass
    },


];


// Applica la trasformazione a tutti gli esercizi
const performanceStudiesExercises = performanceStudiesExercisesOriginal.map(exercise => {
    // Clona l'esercizio per non modificare l'originale direttamente
    const newExercise = JSON.parse(JSON.stringify(exercise));

    if (newExercise.notesBass) {
        newExercise.notesBass = newExercise.notesBass.map(noteObj => {
            const newNoteObj = { ...noteObj }; // Clona l'oggetto nota
            if (newNoteObj.keys) {
                newNoteObj.keys = newNoteObj.keys.map(key => transposeBassKey(key));
            }
            if (newNoteObj.midiValues && newNoteObj.midiValues.length > 0) {
                newNoteObj.midiValues = transposeMidiValues(newNoteObj.midiValues);
            }
            // Gestione per midiValue singolo se presente
            else if (typeof newNoteObj.midiValue === 'number' && newNoteObj.keys && !newNoteObj.keys[0].startsWith("r/")) {
               newNoteObj.midiValue += 12;
            }
            return newNoteObj;
        });
    }
    return newExercise;
});


// Esporta l'array degli esercizi MODIFICATO
if (window.exerciseData) {
    window.exerciseData.performance_studies = performanceStudiesExercises;
} else {
    window.exerciseData = {
        performance_studies: performanceStudiesExercises
    };
}