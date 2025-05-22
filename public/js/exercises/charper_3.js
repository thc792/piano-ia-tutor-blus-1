/**
 * js/exercises/chapter_3.js
 * Capitolo 3: Ritmi Blues Fondamentali - Groove per Due Mani.
 * Esercizi per sviluppare il senso ritmico, il feel blues (shuffle),
 * la precisione e la coordinazione ritmica tra le mani.
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


// Array che conterrà tutti gli esercizi del Capitolo 3 (originale)
const chapter3ExercisesOriginal = [
    // =======================================================================================
    // === Esercizio CH3-EX_F_CHARLESTON_NO_PAUSE: Ritmo Charleston Continuo in FA ===
    // =======================================================================================
    {
        id: "ch3-ex-F-CharlestonRhythm-NoPause",
        name: "Cap.3: Ritmo Charleston Continuo FA",
        category: "chapter_3", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "F", // Tonalità di FA (un bemolle: Bb)
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Singola nota (F4) con variazioni ritmiche Charleston continue
            // Pattern base Charleston: semiminima sul 2, croma puntata sull' 'e' del 3 o anticipazione sul 4
            // Qui lo adattiamo per essere continuo
            // Bar 1 (F7) - Ritmo: q q 8 8 q (leggermente variato per continuità)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Beat 1 e 2 (F e C su F7)
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Beat 3 (A e C)
            { keys: ["f/4"], duration: "q", midiValue: 65 },                                          // Beat 4 (F)
            // Bar 2 (F7) - Ritmo: 8 8 q 8 8 q
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Eb (b7 di F7)
            // Bar 3 (F7) - Pattern simile al Bar 1
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 4 (F7) - Pattern simile al Bar 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },

            // Bar 5 (Bb7) - IV grado. Note: Bb, D, F, Ab. Melodia su Bb, D, F
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 6 (Bb7)
            { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["bb/3"], duration: "8", midiValue: 58 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, // Ab (b7 di Bb7)
            // Bar 7 (F7) - Ritorno a I
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 8 (F7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },

            // Bar 9 (C7) - V grado. Note: C, E, G, Bb. Melodia su C, E, G
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 10 (Bb7) - IV grado
            { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["bb/3"], duration: "8", midiValue: 58 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },
            // Bar 11 (F7) - I grado
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 12 (C7) - V grado (turnaround)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, // Bb (b7 di C7)
        ],
        notesBass: [ // Mano Sinistra: Accordi con ritmo Charleston continuo (es. colpo su 1 e 'e' del 2)
                     // Per semplicità e continuità, qui suoniamo l'accordo su ogni semiminima.
                     // Un vero Charleston MS avrebbe figure più sincopate, ma questo garantisce assenza di pause.
            // F7: [29,33,36,39], Bb7: [34,38,41,44], C7: [36,40,43,46]
            // Bar 1 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 2 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 3 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 4 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 5 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 6 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 7 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 8 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 9 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 10 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 11 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 12 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
        ]
    },
        // =======================================================================================
    // === Esercizio CH3-EX2 (Corretto senza pause): Pattern Ritmico Sincopato Continuo ===
    // =======================================================================================
    {
        id: "ch3-ex2-SyncopatedRhythm-BothHands-NoPause", // ID aggiornato
        name: "Cap.3: Ritmo Sincopato Continuo",
        category: "chapter_3", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        // Pattern originale: croma - semiminima - croma (pausa di semiminima) | Ripetuto
        // Nuovo Pattern: croma - semiminima - croma - semiminima (per riempire la pausa)
        notesTreble: [ // Mano Destra: Singola nota con il pattern continuo
            // Bar 1 (C7) - Pattern: G(8) G(q) G(8) G(q) | G(8) G(q) G(8) G(q)
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 2 (C7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 3 (C7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 4 (C7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 5 (F7) - Nota C/5
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 6 (F7)
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 7 (C7) - Nota G/4
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 8 (C7)
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 9 (G7) - Nota D/4
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (F7) - Nota C/5
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "8", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 11 (C7) - Nota G/4
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 12 (G7) - Nota D/4
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
        ],
        notesBass: [ // Mano Sinistra: Accordi con il pattern ritmico continuo
            // Pattern: Accordo(8) Accordo(q) Accordo(8) Accordo(q) | Ripetuto
            // Bar 1 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 2 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 3 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 4 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 5 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 6 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 7 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 8 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 9 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 10 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "8", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 11 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "8", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 12 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "8", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
        ]
    },
    // =======================================================================================
    // === Esercizio CH3-EX3: Introduzione al Ritmo Shuffle Leggero (MS Fondamentale-Quinta) ===
    // =======================================================================================
    {
        id: "ch3-ex3-LightShuffle-LH-RootFifth",
        name: "Cap.3: Shuffle Leggero (MS Fond-5a)",
        category: "chapter_3",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4", // Il feel shuffle è interpretativo
        repetitions: 2,
        notesTreble: [ // Mano Destra: Singola nota (G4) su ogni beat per riferimento
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 1
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 2
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 3
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 4
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 5 (F7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 6 (F7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 7 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 8 (C7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 9 (G7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 },{ keys: ["c/5"], duration: "q", midiValue: 72 }, // Bar 10 (F7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 11 (C7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Pattern Shuffle (Fondamentale-Quinta alternate, crome)
                     // C7: C G C G | F7: F C F C | G7: G D G D
            // Bar 1 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 2 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // ... e così via per tutta la progressione, adattando Fondamentale e Quinta per F7 e G7
            // Bar 3 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 4 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 5 (F7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            // Bar 6 (F7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            // Bar 7 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 8 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 9 (G7)
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
            // Bar 10 (F7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            { keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["f/1"], duration: "8", midiValue: 29 },{ keys: ["c/2"], duration: "8", midiValue: 36 },
            // Bar 11 (C7)
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },{ keys: ["c/2"], duration: "8", midiValue: 36 },{ keys: ["g/2"], duration: "8", midiValue: 43 },
            // Bar 12 (G7)
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
            { keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },{ keys: ["g/1"], duration: "8", midiValue: 31 },{ keys: ["d/2"], duration: "8", midiValue: 38 },
        ]
    },
       // =======================================================================================
    // === Esercizio CH3-EX_Bb_CHARLESTON_NO_PAUSE: Ritmo Charleston Continuo in SIb ===
    // =======================================================================================
    {
        id: "ch3-ex-Bb-CharlestonRhythm-NoPause",
        name: "Cap.3: Ritmo Charleston Continuo SIb",
        category: "chapter_3", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "Bb", // Tonalità di SIb (due bemolli: Bb, Eb)
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia con feeling Charleston in SIb
            // Accordi della progressione: Bb7, Eb7, F7
            // Note caratteristiche per Bb7: Bb, D, F, Ab
            // Note caratteristiche per Eb7: Eb, G, Bb, Db
            // Note caratteristiche per F7: F, A, C, Eb

            // Bar 1 (Bb7) - Melodia su Bb, D, F
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 2 (Bb7) - Melodia con Ab (b7)
            { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, // Ab è la b7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, // G è la 6a
            // Bar 3 (Bb7)
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 4 (Bb7)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Eb è la 4a (o 11a)
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, // C è la 9a
            { keys: ["bb/3"], duration: "q", midiValue: 58 },

            // Bar 5 (Eb7) - IV grado. Melodia su Eb, G, Bb
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 6 (Eb7) - Melodia con Db (b7)
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["db/5"], duration: "q", midiValue: 73 }, // Db è la b7
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, // C è la 6a/13a
            // Bar 7 (Bb7) - Ritorno a I
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, // b7
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 8 (Bb7)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },

            // Bar 9 (F7) - V grado. Melodia su F, A, C
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Bar 10 (Eb7) - IV grado
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["db/4"], duration: "q", midiValue: 61 }, // Db (b7 di Eb7)
            // Bar 11 (Bb7) - I grado
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 12 (F7) - V grado (turnaround)
            { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, // Eb (b7 di F7)
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima - Progressione Blues in SIb
            // Bb7: [34,38,41,44], Eb7: [39,43,46,49], F7: [41,45,48,51]
            // Bar 1 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 2 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 3 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 4 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 5 (Eb7)
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            // Bar 6 (Eb7)
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            // Bar 7 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 8 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 9 (F7)
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            // Bar 10 (Eb7)
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            { keys: ["eb/2","g/2","bb/2","db/3"], duration: "q", midiValues: [39,43,46,49] },
            // Bar 11 (Bb7)
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            { keys: ["bb/1","d/2","f/2","ab/2"], duration: "q", midiValues: [34,38,41,44] },
            // Bar 12 (F7)
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
            { keys: ["f/2","a/2","c/3","eb/3"], duration: "q", midiValues: [41,45,48,51] },
        ]
    },
       // =======================================================================================
    // === Esercizio CH3-EX5 (Corretto senza pause): Pattern Ritmico "Domanda e Risposta" Continuo ===
    // =======================================================================================
    {
        id: "ch3-ex5-RhythmicCallResponse-Hands-NoPause", // ID aggiornato
        name: "Cap.3: Ritmo Domanda & Risposta Continuo",
        category: "chapter_3", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        // Mano Sinistra e Mano Destra suonano in modo continuo,
        // mantenendo l'idea di note/accordi principali sui tempi del "call and response" originale.
        notesTreble: [ // Mano Destra: Nota principale della "risposta" sui tempi 2 & 4, riempimenti sui tempi 1 & 3
            // Bar 1 (C7) - Originale: R G R G. Nuovo: C G E G
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 2 (C7) - Originale: R G R G. Nuovo: C G E G
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 3 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 5 (F7) - Originale: R C R C. Nuovo: F C A C
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 6 (F7)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 7 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 8 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 9 (G7) - Originale: R D R D. Nuovo: G D B D
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (F7)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 11 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 12 (G7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima
            // Bar 1 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 2 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 3 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 4 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 5 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 6 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 7 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 8 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 9 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 10 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 11 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 12 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
        ]
    }
];


// Applica la trasformazione a tutti gli esercizi
const chapter3Exercises = chapter3ExercisesOriginal.map(exercise => {
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
            // Gestione per midiValue singolo se presente (anche se meno comune per il basso qui)
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
    window.exerciseData.chapter_3 = chapter3Exercises;
} else {
    window.exerciseData = {
        chapter_3: chapter3Exercises
    };
}