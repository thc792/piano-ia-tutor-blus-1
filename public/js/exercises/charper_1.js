/**
 * js/exercises/chapter_1.js
 * Capitolo 1: Le Basi del Blues - Mano Sinistra e Accordi Fondamentali sulla Progressione.
 * Esercizi per suonare la progressione blues di 12 battute con la mano sinistra,
 * concentrandosi sugli accordi I7, IV7, V7 e sul timing.
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
    return midiValues.map(value => value + 12);
}

// Array che conterrà tutti gli esercizi del Capitolo 1
const chapter1ExercisesOriginal = [ // Rinomino l'originale per evitare confusione durante la trasformazione
    // =======================================================================================
    // === Esercizio CH1-EX1: Progressione Blues Standard - Accordi Tenuti (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex1-Prog-Sustain-LH",
        name: "Cap.1: Progressione Standard (Accordi Tenuti)",
        category: "chapter_1",
        staveLayout: "bass", // Solo pentagramma di basso
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano destra vuota (pause)
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi tenuti per l'intera battuta
            // C7: [36,40,43,46], F7: [29,33,36,39], G7: [31,35,38,41]
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
    // === Esercizio CH1-EX2: Progressione Blues Standard - Ritmo Base (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex2-Prog-BasicRhythm-LH",
        name: "Cap.1: Progressione Standard (MS Ritmo Base)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues, accordi su beat 1 e 3 (semiminime)
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    },
    // =======================================================================================
    // === Esercizio CH1-EX3: Progressione Blues "Quick Change" - Accordi Tenuti (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex3-Prog-QuickChange-Sustain-LH",
        name: "Cap.1: Progressione Quick Change (Acc. Tenuti)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione "Quick Change" (F7 alla seconda battuta)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 1 (C7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 2 (F7) - Quick Change
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
    // === Esercizio CH1-EX4: Progressione con V7 al posto di I7 (Battuta 12) - Tenuti (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex4-Prog-V7End-Sustain-LH",
        name: "Cap.1: Progressione V7 Finale (Acc. Tenuti)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione standard ma con G7 alla battuta 12 invece di C7 (comune turnaround)
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
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7) - Turnaround
        ]
    },
    // =======================================================================================
    // === Esercizio CH1-EX5: Progressione Blues con II-V-I Finale - Ritmo Base (MS) ===
    // =======================================================================================
    {
        id: "ch1-ex5-Prog-ii-V-I-End-LH-Rhythm",
        name: "Cap.1: Progressione II-V-I Finale (MS Ritmo)",
        category: "chapter_1",
        staveLayout: "bass",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ /* Pause */
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" },
        ],
        notesBass: [ // Mano Sinistra: Progressione con Dm7-G7-C7 nelle ultime battute, ritmo base
            // Dm7: D-F-A-C (MIDI: 38,41,45,48 per D2)
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 9 (Dm7) - Inizio II-V-I
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "q", midiValues: [38,41,45,48] }, { keys: ["r/4"], duration: "q" },
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "q", midiValues: [38,41,45,48] }, { keys: ["r/4"], duration: "q" },
            // Bar 10 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 12 (G7) - Turnaround finale
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    },
  // === Esercizio CH1-EX1 (Riscritto): Progressione Blues Standard - Accordi Tenuti (MS) + Melodia Semplice (MD) ===
    // =======================================================================================
    {
        id: "ch1-ex1-Prog-Sustain-LH-Melody-RH",
        name: "Cap.1: Progressione Standard (MS Acc. Tenuti, MD Melodia)",
        category: "chapter_1",
        staveLayout: "grand", // Modificato per entrambe le mani
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia semplice sulle note degli accordi (NON TRASPOSTA)
            // Bar 1 (C7: C E G Bb) - Melodia: G G E C
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 2 (C7) - Melodia: C E G E
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 3 (C7) - Melodia: Bb G E C
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 4 (C7) - Melodia: C G C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 5 (F7: F A C Eb) - Melodia: C C A F
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 6 (F7) - Melodia: F A C A
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 7 (C7) - Melodia: G G E C (come Bar 1)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 8 (C7) - Melodia: C E G (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 9 (G7: G B D F) - Melodia: D D B G
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 10 (F7) - Melodia: C C A F (come Bar 5)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 11 (C7) - Melodia: E G C (tenuto)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 12 (G7) - Melodia: D F B G (Turnaround)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues Standard, accordi tenuti per l'intera battuta (TRASPOSTA)
            // C7: [36,40,43,46], F7: [29,33,36,39], G7: [31,35,38,41]
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
    // === Esercizio CH1-EX2 (Riscritto): Progressione Blues Standard - Ritmo Base (MS) + Melodia (MD) ===
    // =======================================================================================
    {
        id: "ch1-ex2-Prog-BasicRhythm-LH-Melody-RH",
        name: "Cap.1: Progressione Standard (MS Ritmo Base, MD Melodia)",
        category: "chapter_1",
        staveLayout: "grand", // Modificato
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia che interagisce con il ritmo della MS (NON TRASPOSTA)
            // Bar 1 (C7) - Melodia: C (sul beat 2) G (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["r/4"], duration: "q" }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 2 (C7) - Melodia: E (sul beat 2) C (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 3 (C7) - Melodia: G G E (legato)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 4 (C7) - Melodia: C Bb G (Scala Blues discendente)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 5 (F7) - Melodia: F (sul beat 2) C (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 6 (F7) - Melodia: A (sul beat 2) F (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 7 (C7) - Melodia: E G C (Arpeggio)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7) - Melodia: G Eb C (Scala Blues discendente)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 9 (G7) - Melodia: G (sul beat 2) D (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["r/4"], duration: "q" }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (F7) - Melodia: F A C (Arpeggio)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 11 (C7) - Melodia: G E C (Arpeggio Discendente)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 12 (G7) - Melodia: D (sul beat 2) G (sul beat 4, per turnaround)
            { keys: ["r/4"], duration: "q" }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["r/4"], duration: "q" }, { keys: ["g/3"], duration: "q", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Progressione Blues, accordi su beat 1 e 3 (semiminime) (TRASPOSTA)
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    },
    // =======================================================================================
    // === Esercizio CH1-EX3 (Riscritto): Progressione Blues "Quick Change" - Accordi Tenuti (MS) + Melodia (MD) ===
    // =======================================================================================
    {
        id: "ch1-ex3-Prog-QuickChange-Sustain-LH-Melody-RH",
        name: "Cap.1: Progressione Quick Change (MS Acc. Tenuti, MD Melodia)",
        category: "chapter_1",
        staveLayout: "grand", // Modificato
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia semplice (NON TRASPOSTA)
            // Bar 1 (C7) - Melodia: G E C G
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 2 (F7) - Quick Change! Melodia: A F C A
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 3 (C7) - Melodia: G E C E
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 4 (C7) - Melodia: C G C (tenuto)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 5 (F7) - Melodia: F A C Eb (Arpeggio F7)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["eb/5"], duration: "q", midiValue: 75 },
            // Bar 6 (F7) - Melodia: C A F (tenuto)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7) - Melodia: E G C (tenuto)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7) - Melodia: G Eb C G (Scala Blues)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 9 (G7) - Melodia: D B G D (Arpeggio G)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (F7) - Melodia: A F C (tenuto)
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 11 (C7) - Melodia: G E C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 12 (G7) - Melodia: F D B G (Arpeggio G7 discendente)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Progressione "Quick Change" (F7 alla seconda battuta) (TRASPOSTA)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 1 (C7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 2 (F7) - Quick Change
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
    // === Esercizio CH1-EX4 (Riscritto): Progressione con V7 al posto di I7 (Batt. 12) - Tenuti (MS) + Melodia (MD) ===
    // =======================================================================================
    {
        id: "ch1-ex4-Prog-V7End-Sustain-LH-Melody-RH",
        name: "Cap.1: Progressione V7 Finale (MS Acc. Tenuti, MD Melodia)",
        category: "chapter_1",
        staveLayout: "grand", // Modificato
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia semplice (NON TRASPOSTA)
            // Bar 1 (C7) - Melodia: C E G E
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 2 (C7) - Melodia: G G E C
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 3 (C7) - Melodia: C D Eb E (Movimento cromatico verso la 3a)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 4 (C7) - Melodia: G Bb C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 5 (F7) - Melodia: F A C A
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 6 (F7) - Melodia: C Eb F (tenuto)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 7 (C7) - Melodia: E G E C
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 8 (C7) - Melodia: C G (Scala Blues) C (tenuto)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, // F#
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 9 (G7) - Melodia: G B D B
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 10 (F7) - Melodia: F A C (tenuto)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 11 (C7) - Melodia: G E C (tenuto)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 12 (G7) - Turnaround! Melodia: D F G (Arpeggio G, risolve su G)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Risolve sulla tonica di G7
        ],
        notesBass: [ // Mano Sinistra: Progressione standard ma con G7 alla battuta 12 (TRASPOSTA)
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
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7) - Turnaround
        ]
    },
      // === Esercizio CH1-EX5 (Riscritto): Progressione Blues con II-V-I Finale - Ritmo Base (MS) + Melodia (MD) ===
    // =======================================================================================
    {
        id: "ch1-ex5-Prog-ii-V-I-End-LH-Rhythm-Melody-RH",
        name: "Cap.1: Progressione II-V-I Finale (MS Ritmo, MD Melodia)",
        category: "chapter_1",
        staveLayout: "grand", // Modificato
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia che si adatta al II-V-I finale (NON TRASPOSTA)
            // Bar 1 (C7) - Melodia: G (sul beat 2) C (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 2 (C7) - Melodia: E (sul beat 2) G (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["r/4"], duration: "q" }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 3 (C7) - Melodia: C E G C (Arpeggio ascendente)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 4 (C7) - Melodia: Bb G F Eb (Scala Blues discendente)
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 5 (F7) - Melodia: A (sul beat 2) F (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 6 (F7) - Melodia: C (sul beat 2) A (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["r/4"], duration: "q" }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 7 (C7) - Melodia: G E C (Arpeggio discendente)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7) - Melodia: C (sul beat 2) G (sul beat 4)
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["r/4"], duration: "q" }, { keys: ["g/4"], duration: "q", midiValue: 67 },

            // === II-V-I Finale ===
            // Bar 9 (Dm7) - Melodia: F (sul beat 2) D (sul beat 4) (Note di Dm7)
            { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // F è la terza minore di Dm7
            { keys: ["r/4"], duration: "q" }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // D è la tonica
            // Bar 10 (G7) - Melodia: B (sul beat 2) G (sul beat 4) (Note di G7)
            { keys: ["r/4"], duration: "q" }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // B è la terza di G7
            { keys: ["r/4"], duration: "q" }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // G è la tonica
            // Bar 11 (C7) - Melodia: E (sul beat 2) C (sul beat 4) (Risoluzione su C7)
            { keys: ["r/4"], duration: "q" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // E è la terza di C7
            { keys: ["r/4"], duration: "q" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // C è la tonica
            // Bar 12 (G7) - Turnaround Finale - Melodia: D F B G (Arpeggio G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Progressione con Dm7-G7-C7 nelle ultime battute, ritmo base (TRASPOSTA)
            // Dm7: D-F-A-C (MIDI: 38,41,45,48 per D2)
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "q", midiValues: [29,33,36,39] }, { keys: ["r/4"], duration: "q" },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 9 (Dm7) - Inizio II-V-I
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "q", midiValues: [38,41,45,48] }, { keys: ["r/4"], duration: "q" },
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "q", midiValues: [38,41,45,48] }, { keys: ["r/4"], duration: "q" },
            // Bar 10 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "q", midiValues: [36,40,43,46] }, { keys: ["r/4"], duration: "q" },
            // Bar 12 (G7) - Turnaround finale
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, { keys: ["r/4"], duration: "q" },
        ]
    },
];


// Applica la trasformazione a tutti gli esercizi
const chapter1Exercises = chapter1ExercisesOriginal.map(exercise => {
    // Clona l'esercizio per non modificare l'originale direttamente se chapter1ExercisesOriginal dovesse servire altrove
    const newExercise = JSON.parse(JSON.stringify(exercise));

    if (newExercise.notesBass) {
        newExercise.notesBass = newExercise.notesBass.map(noteObj => {
            const newNoteObj = { ...noteObj }; // Clona l'oggetto nota
            if (newNoteObj.keys) {
                newNoteObj.keys = newNoteObj.keys.map(key => transposeBassKey(key));
            }
            if (newNoteObj.midiValues) {
                // Trasponi solo se non è una pausa (le pause non hanno midiValues significativi per la tonalità)
                // La condizione `!newNoteObj.keys[0].startsWith("r/")` è un modo per verificarlo,
                // assumendo che le pause siano sempre definite con 'r/' come prima chiave.
                // Una verifica più robusta potrebbe essere controllare se midiValues non è vuoto o se la durata non indica una pausa completa.
                // Per ora, ci fidiamo che le note con midiValues siano note suonabili.
                newNoteObj.midiValues = transposeMidiValues(newNoteObj.midiValues);
            }
            return newNoteObj;
        });
    }
    return newExercise;
});


// Esporta l'array degli esercizi MODIFICATO per questo capitolo
if (window.exerciseData) {
    window.exerciseData.chapter_1 = chapter1Exercises;
} else {
    window.exerciseData = {
        chapter_1: chapter1Exercises
    };
}