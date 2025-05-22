/**
 * js/exercises/chapter_2.js
 * Capitolo 2: Prime Melodie Blues Intuitive - Introduzione Mano Destra.
 * Esercizi per iniziare a usare la mano destra con melodie semplici e intuitive
 * nel contesto blues, sviluppando la coordinazione base con la sinistra.
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

// Array che conterrà tutti gli esercizi del Capitolo 2 (originale)
const chapter2ExercisesOriginal = [
    // =======================================================================================
    // === Esercizio CH2-EX1: Note Fondamentali e Terze (MD) su Progressione Base (MS) ===
    // =======================================================================================
    {
        id: "ch2-ex1-RH-RootsThirds-LH-Chords",
        name: "Cap.2: Melodia Fondamentali e Terze (MD)",
        category: "chapter_2",
        staveLayout: "grand", // Ora usiamo entrambi i pentagrammi
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Suona la Fondamentale o la Terza dell'accordo corrente
            // Su C7 (C, E), F7 (F, A), G7 (G, B)
            // Bar 1 (C7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 2 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 3 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 4 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 5 (F7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 6 (F7)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 8 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 9 (G7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 10 (F7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 11 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 12 (G7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi tenuti
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 4 (C7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 6 (F7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 8 (C7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 9 (G7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 10 (F7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 11 (C7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7)
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX2 (Corretto senza pause MS): Brevi Motivi di 3 Note (MD) su Progressione (MS continua) ===
    // =======================================================================================
    {
        id: "ch2-ex2-RH-3NoteMotifs-LH-Chords-NoPauseMS", // ID leggermente modificato per chiarezza
        name: "Cap.2: Motivi di 3 Note (MD) - MS Continua",
        category: "chapter_2", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Motivi di 3 note (come nell'originale fornito)
            // Su C7: C-Eb-C o C-E-C. Su F7: F-Ab-F o F-A-F. Su G7: G-Bb-G o G-B-G
            // Bar 1 (C7) - C Eb C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 2 (C7) - C E C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 3 (C7) - G Eb C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 4 (C7) - E G E (tenuto)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 5 (F7) - F Ab F (tenuto)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 6 (F7) - F A F (tenuto)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7) - C Eb C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7) - G E C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 9 (G7) - G Bb G (tenuto)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 10 (F7) - C Ab F (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            // Bar 11 (C7) - Eb C G (tenuto)
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 12 (G7) - D Bb G (tenuto)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima per riempire i 4 tempi
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX3: Melodia "Call" (MS) e "Response" (MD) Semplice ===
    // =======================================================================================
    {
        id: "ch2-ex3-CallResponse-Simple",
        name: "Cap.2: Call & Response Semplice",
        category: "chapter_2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: "Response"
            { keys: ["r/4"], duration: "w" }, // Bar 1 (Pausa durante il "Call" della MS)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["eb/4"], duration: "h", midiValue: 63 }, // Bar 2 (Response su C7)
            { keys: ["r/4"], duration: "w" }, // Bar 3
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 4 (Response su C7)
            { keys: ["r/4"], duration: "w" }, // Bar 5
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["ab/4"], duration: "h", midiValue: 68 }, // Bar 6 (Response su F7)
            { keys: ["r/4"], duration: "w" }, // Bar 7
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, // Bar 8 (Response su C7)
            { keys: ["r/4"], duration: "w" }, // Bar 9
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 }, // Bar 10 (Response su G7)
            { keys: ["r/4"], duration: "w" }, // Bar 11
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // Bar 12 (Response finale su C7 o G7)
        ],
        notesBass: [ // Mano Sinistra: "Call" (Accordo) e Pausa
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 1 (Call C7)
            { keys: ["r/4"], duration: "w" }, // Bar 2 (Pausa durante il "Response" della MD)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 3 (Call C7)
            { keys: ["r/4"], duration: "w" }, // Bar 4
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 5 (Call F7)
            { keys: ["r/4"], duration: "w" }, // Bar 6
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "h" }, // Bar 7 (Call C7)
            { keys: ["r/4"], duration: "w" }, // Bar 8
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "h", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "h" }, // Bar 9 (Call G7)
            { keys: ["r/4"], duration: "w" }, // Bar 10
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "h" }, // Bar 11 (Call F7, o C7)
            { keys: ["r/4"], duration: "w" }, // Bar 12
        ]
    },
    // =======================================================================================
    // === Esercizio CH2-EX4 (Corretto senza pause MS): Melodia Semplice Scritta (MD) su Progressione (MS continua) ===
    // =======================================================================================
    {
        id: "ch2-ex4-RH-WrittenMelody-LH-Rhythm-NoPauseMS", // ID aggiornato
        name: "Cap.2: Melodia Scritta Semplice (MD) - MS Continua",
        category: "chapter_2", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice (come da originale)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Bar 1 C7
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "h", midiValue: 63 }, // Bar 2 C7
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 },                            // Bar 3 C7
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // Bar 4 C7
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["ab/3"], duration: "h", midiValue: 56 },                           // Bar 5 F7 (Ab è b3)
            { keys: ["f/3"], duration: "w", midiValue: 53 },                                                              // Bar 6 F7
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 7 C7
            { keys: ["c/4"], duration: "w", midiValue: 60 },                                                              // Bar 8 C7
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },                            // Bar 9 G7
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },                            // Bar 10 F7
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, // Bar 11 C7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // Bar 12 G7
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima per riempire i 4 tempi
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
        ]
    },
       // =======================================================================================
    // === Esercizio CH2-EX_SIMILE_G: Melodia Semplice Scritta (MD) in SOL (MS continua) ===
    // =======================================================================================
    {
        id: "ch2-ex_similar-G-RH-WrittenMelody-LH-Continuous", // ID per nuovo esercizio in G
        name: "Cap.2: Melodia Scritta Semplice (MD) in SOL",
        category: "chapter_2", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "G", // Tonalità di SOL (un diesis: F#)
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice in SOL
            // Bar 1 (G7: G B D F) - Melodia: D B G D
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 2 (G7) - Melodia: G A B (tenuto)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 3 (G7) - Melodia: F D B G (Arpeggio G7 discendente)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 4 (G7) - Melodia: B D F (tenuto)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 5 (C7: C E G Bb) - Melodia: G E C G (note di C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 6 (C7) - Melodia: C E G (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 7 (G7) - Melodia: D B G (tenuto)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 8 (G7) - Melodia: G F D B (Scala Blues G discendente senza C#)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 9 (D7: D F# A C) - Melodia: A Gb D A (note di D7) - F# è Gb
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 10 (C7) - Melodia: G E C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 11 (G7) - Melodia: D B G (tenuto)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 12 (D7) - Melodia: A C Gb D (Arpeggio D7 con C naturale)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // C naturale (b7 di D7)
            { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        ],
        notesBass: [ // Mano Sinistra: Accordi su ogni semiminima - Progressione Blues in SOL
            // G7: [31,35,38,41], C7: [36,40,43,46], D7: [38,42,45,48]
            // Bar 1 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 2 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 3 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 4 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 5 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 6 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 7 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 8 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 9 (D7)
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] }, // F# è Gb
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            // Bar 10 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] },
            // Bar 11 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Bar 12 (D7)
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "q", midiValues: [38,42,45,48] },
        ]
    },
    {
        id: "blues-custom-scale-triads-ex1",
        name: "Blues Custom: Scala Alternata e Triadi (C)",
        category: "blues_custom_exercises", // Puoi cambiare la categoria se necessario
        staveLayout: "grand",
        keySignature: "C", // D# sarà scritto come d#, non eb
        timeSignature: "4/4",
        repetitions: 1, // L'esercizio è già lungo 24 battute

        // Scala di riferimento MIDI e VexFlow (ottava 4)
        // C4:60, D4:62, Ds4:63, E4:64, G4:67, A4:69, B4:71, C5:72
        // Vex: "c/4", "d/4", "d#/4", "e/4", "g/4", "a/4", "b/4", "c/5"

        notesTreble: [
            // === GIRO BLUES 1 ===
            // --- Bar 1 (C7) - Scala Ascendente ---
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            // --- Bar 2 (C7) - Scala Discendente ---
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            // --- Bar 3 (C7) - Triadi/Arp C (C-E-G-B) ---
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            // --- Bar 4 (C7) - Triadi/Arp C (C-E-G-B) ---
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            // --- Bar 5 (F7) - Scala Ascendente ---
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            // --- Bar 6 (F7) - Scala Discendente ---
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            // --- Bar 7 (C7) - Triadi/Arp F (A-C-D#-E, note scala su F7) ---
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 }, // d#5=75, e5=76
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            // --- Bar 8 (C7) - Triadi/Arp F (A-C-D#-E) ---
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            // --- Bar 9 (G7) - Scala Ascendente ---
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            // --- Bar 10 (F7) - Scala Discendente ---
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            // --- Bar 11 (C7) - Triadi/Arp G (G-B-D-E su G7) ---
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["e/5"], duration: "16", midiValue: 76 }, // d5=74
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            // --- Bar 12 (G7) - Triadi/Arp C (C-E-G-B, come turnaround su G7 per risolvere a C) ---
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },

            // === GIRO BLUES 2 (Ripetizione del pattern melodico sul secondo giro di blues) ===
            // --- Bar 13 (C7) - Scala Ascendente --- (copia Bar 1)
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            // --- Bar 14 (C7) - Scala Discendente --- (copia Bar 2)
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            // --- Bar 15 (C7) - Triadi/Arp C --- (copia Bar 3)
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            // --- Bar 16 (C7) - Triadi/Arp C --- (copia Bar 4)
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            // --- Bar 17 (F7) - Scala Ascendente --- (copia Bar 5)
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            // --- Bar 18 (F7) - Scala Discendente --- (copia Bar 6)
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            // --- Bar 19 (C7) - Triadi/Arp F --- (copia Bar 7)
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            // --- Bar 20 (C7) - Triadi/Arp F --- (copia Bar 8)
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            { keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d#/5"], duration: "16", midiValue: 75 },{ keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["a/4"], duration: "16", midiValue: 69 },
            // --- Bar 21 (G7) - Scala Ascendente --- (copia Bar 9)
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["c/5"], duration: "16", midiValue: 72 },
            // --- Bar 22 (F7) - Scala Discendente --- (copia Bar 10)
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["a/4"], duration: "16", midiValue: 69 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["d#/4"], duration: "16", midiValue: 63 },{ keys: ["d/4"], duration: "16", midiValue: 62 },{ keys: ["c/4"], duration: "16", midiValue: 60 },
            // --- Bar 23 (C7) - Triadi/Arp G --- (copia Bar 11)
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 },{ keys: ["d/5"], duration: "16", midiValue: 74 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },
            // --- Bar 24 (G7) - Triadi/Arp C (finale, risolve a C) --- (copia Bar 12)
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
            { keys: ["c/4"], duration: "16", midiValue: 60 },{ keys: ["e/4"], duration: "16", midiValue: 64 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["b/4"], duration: "16", midiValue: 71 },
            { keys: ["c/5"], duration: "16", midiValue: 72 },{ keys: ["b/4"], duration: "16", midiValue: 71 },{ keys: ["g/4"], duration: "16", midiValue: 67 },{ keys: ["e/4"], duration: "16", midiValue: 64 },
        ],
        notesBass: [
            // Giro Blues 1 (12 battute) - Accordi ribattuti come semiminime
            // Bar 1-4 (C7: C3-E3-G3-Bb3)
            ...Array(4).fill(null).flatMap(() => [
                { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }
            ]),
            // Bar 5-6 (F7: C3-Eb3-F3-A3)
            ...Array(2).fill(null).flatMap(() => [
                { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }
            ]),
            // Bar 7-8 (C7: C3-E3-G3-Bb3)
            ...Array(2).fill(null).flatMap(() => [
                { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }
            ]),
            // Bar 9 (G7: D3-F3-G3-B3)
            { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] },
            // Bar 10 (F7: C3-Eb3-F3-A3)
            { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] },
            // Bar 11 (C7: C3-E3-G3-Bb3)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] },
            // Bar 12 (G7: D3-F3-G3-B3)
            { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] },

            // Giro Blues 2 (12 battute) - Copia del Giro 1
            ...Array(4).fill(null).flatMap(() => [ // Bar 13-16 (C7)
                { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }
            ]),
            ...Array(2).fill(null).flatMap(() => [ // Bar 17-18 (F7)
                { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }
            ]),
            ...Array(2).fill(null).flatMap(() => [ // Bar 19-20 (C7)
                { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }
            ]),
            // Bar 21 (G7)
            { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] },
            // Bar 22 (F7)
            { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] }, { keys: ["c/3", "eb/3", "f/3", "a/3"], duration: "q", midiValues: [48, 51, 53, 57] },
            // Bar 23 (C7)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 52, 55, 58] },
            // Bar 24 (G7, per turnaround finale al C7 del possibile inizio successivo)
            { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] }, { keys: ["d/3", "f/3", "g/3", "b/3"], duration: "q", midiValues: [50, 53, 55, 59] },
        ]
    },
];


// Applica la trasformazione a tutti gli esercizi
const chapter2Exercises = chapter2ExercisesOriginal.map(exercise => {
    // Clona l'esercizio per non modificare l'originale direttamente
    const newExercise = JSON.parse(JSON.stringify(exercise));

    if (newExercise.notesBass) {
        newExercise.notesBass = newExercise.notesBass.map(noteObj => {
            const newNoteObj = { ...noteObj }; // Clona l'oggetto nota
            if (newNoteObj.keys) {
                newNoteObj.keys = newNoteObj.keys.map(key => transposeBassKey(key));
            }
            if (newNoteObj.midiValues && newNoteObj.midiValues.length > 0) { // Assicurati che ci siano valori da trasporre
                newNoteObj.midiValues = transposeMidiValues(newNoteObj.midiValues);
            }
            // Se midiValue singolo (non array, anche se raro per il basso con accordi)
            // else if (typeof newNoteObj.midiValue === 'number' && !newNoteObj.keys[0].startsWith("r/")) {
            //    newNoteObj.midiValue += 12;
            // }
            return newNoteObj;
        });
    }
    return newExercise;
});


// Esporta l'array degli esercizi MODIFICATO
if (window.exerciseData) {
    window.exerciseData.chapter_2 = chapter2Exercises;
} else {
    window.exerciseData = {
        chapter_2: chapter2Exercises
    };
}