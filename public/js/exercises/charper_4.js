/**
 * js/exercises/chapter_4.js
 * Capitolo 4: Combinare le Mani - Primi Accompagnamenti e Melodie Coordinate.
 * Esercizi per integrare il lavoro della mano sinistra (accompagnamenti base)
 * con la mano destra (melodie semplici e licks intuitivi), e introdurre i turnaround.
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

// Array che conterrà tutti gli esercizi del Capitolo 4 (originale)
const chapter4ExercisesOriginal = [
    // =================================================================================================
    // === Esercizio CH4-EX1: Accompagnamento MS (Fondamentale-Quinta) + Melodia Scritta Semplice MD ===
    // =================================================================================================
    {
        id: "ch4-ex1-LH-RootFifth-RH-SimpleMelody",
        name: "Cap.4: MS Fond-5a + MD Melodia Semplice",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia scritta semplice (basata su note intuitive degli accordi)
            // Bar 1 (C7)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 2 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 3 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Corretto g/4 mancante midiValue
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 5 (F7)
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 6 (F7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["ab/3"], duration: "h", midiValue: 56 },
            // Bar 7 (C7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 9 (G7)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 10 (F7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 11 (C7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, // Corretto g/3 mancante midiValue
            // Bar 12 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // Corretto d/4 mancante midiValue
        ],
        notesBass: [ // Mano Sinistra: Pattern Fondamentale-Quinta (semiminime)
            // C7: C G | F7: F C | G7: G D
            // Bar 1 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 2 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 3 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 4 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 5 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 6 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 7 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 8 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 9 (G7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Bar 10 (F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 11 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 12 (G7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
        ]
    },
    // =======================================================================================
    // === Esercizio CH4-EX2: Arpeggio Semplice MS + Brevi Frasi Melodiche MD ===
    // =======================================================================================
    {
        id: "ch4-ex2-LH-SimpleArp-RH-ShortPhrases",
        name: "Cap.4: MS Arpeggio Semplice + MD Frasi Brevi",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Brevi frasi di 2-3 note
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["r/4"], duration: "h" }, // Bar 1 C7
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" }, // Bar 2 C7
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 3 C7
            { keys: ["c/5"], duration: "w", midiValue: 72 },                                 // Bar 4 C7
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["r/4"], duration: "h" }, // Bar 5 F7
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" }, // Bar 6 F7
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["eb/4"], duration: "h", midiValue: 63 }, // Bar 7 C7
            { keys: ["c/4"], duration: "w", midiValue: 60 },                                 // Bar 8 C7
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["r/4"], duration: "h" }, // Bar 9 G7
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["ab/3"], duration: "h", midiValue: 56 },// Bar 10 F7
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, // Bar 11 C7
            { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // Bar 12 G7
        ],
        notesBass: [ // Mano Sinistra: Arpeggio semplice (1-3-5-b7 come semiminime)
            // C7: C E G Bb
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // F7: F A C Eb
            { keys: ["f/1"], duration: "q", midiValue: 29 },{ keys: ["a/1"], duration: "q", midiValue: 33 },{ keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["eb/2"], duration: "q", midiValue: 39 },
            { keys: ["f/1"], duration: "q", midiValue: 29 },{ keys: ["a/1"], duration: "q", midiValue: 33 },{ keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["eb/2"], duration: "q", midiValue: 39 },
            // C7
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // G7: G B D F
            { keys: ["g/1"], duration: "q", midiValue: 31 },{ keys: ["b/1"], duration: "q", midiValue: 35 },{ keys: ["d/2"], duration: "q", midiValue: 38 },{ keys: ["f/2"], duration: "q", midiValue: 41 },
            // F7
            { keys: ["f/1"], duration: "q", midiValue: 29 },{ keys: ["a/1"], duration: "q", midiValue: 33 },{ keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["eb/2"], duration: "q", midiValue: 39 },
            // C7
            { keys: ["c/2"], duration: "q", midiValue: 36 },{ keys: ["e/2"], duration: "q", midiValue: 40 },{ keys: ["g/2"], duration: "q", midiValue: 43 },{ keys: ["bb/2"], duration: "q", midiValue: 46 },
            // G7
            { keys: ["g/1"], duration: "q", midiValue: 31 },{ keys: ["b/1"], duration: "q", midiValue: 35 },{ keys: ["d/2"], duration: "q", midiValue: 38 },{ keys: ["f/2"], duration: "q", midiValue: 41 },
        ]
    },
       // =======================================================================================
    // === Esercizio CH4-EX3 (Corretto senza pause MD iniziali): Introduzione al Turnaround Semplice ===
    // =======================================================================================
    {
        id: "ch4-ex3-SimpleTurnaround-NoRHRest", // ID aggiornato
        name: "Cap.4: Turnaround Semplice (MD Continua)",
        category: "chapter_4", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,
        notesTreble: [ // Mano Destra: Melodia continua, con focus sul turnaround
            // Bar 1 (C7) - Melodia introduttiva semplice
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 2 (C7)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 3 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Movimento bluesy
            // Bar 4 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 5 (F7) - Melodia su F7
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 6 (F7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["eb/5"], duration: "h", midiValue: 75 }, // Eb è b7 di F7
            // Bar 7 (C7) - Ritorno a C7
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 8 (C7)
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["g/4"], duration: "h", midiValue: 67 },

            // Turnaround nelle ultime 4 battute: C7 | A7 | Dm7 | G7 (Melodia originale mantenuta)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 9 (C7)
            { keys: ["db/4"], duration: "h", midiValue: 61 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, // Bar 10 (A7 - C# e A)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f/4"], duration: "h", midiValue: 65 }, // Bar 11 (Dm7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 12 (G7)
        ],
        notesBass: [ // Mano Sinistra: Progressione con turnaround I-VI-ii-V (come da originale)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "w", midiValues: [29,33,36,39] }, { keys: ["f/1","a/1","c/2","eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] },
            // Turnaround: C7 | A7 | Dm7 | G7
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 9 (C7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "w", midiValues: [33,37,40,43] }, // Bar 10 (A7)
            { keys: ["d/2","f/2","a/2","c/3"], duration: "w", midiValues: [38,41,45,48] }, // Bar 11 (Dm7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 (G7)
        ]
    },
       // =======================================================================================
    // === Esercizio CH4-EX4 (Corretto senza pause): "Call and Response" Continuo tra le Mani ===
    // =======================================================================================
    {
        id: "ch4-ex4-HandCallResponse-Simple-NoPause", // ID aggiornato
        name: "Cap.4: Call & Response Continuo tra Mani",
        category: "chapter_4", // Categoria ipotetica
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: "Response" melodico esteso per coprire tutta la battuta
            // Bar 1 - Originale MS: C7(h) R(h) | MD: R(h) G(q) Eb(q)
            // Nuovo MD: C E G Eb (note di C7, con G Eb come risposta)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 2 - Originale MS: C7(h) R(h) | MD: R(h) C(h)
            // Nuovo MD: G E C C (con C tenuto come risposta)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // O { keys: ["c/4"], duration: "h", midiValue: 60 } se si preferisce tenere
            // Bar 3 - Originale MS: C7(h) R(h) | MD: R(h) E(q) G(q)
            // Nuovo MD: C G E G
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 4 - Originale MS: C7(h) R(h) | MD: R(h) C(h)
            // Nuovo MD: E G C C
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 5 (F7) - Originale MS: F7(h) R(h) | MD: R(h) A(q) F(q)
            // Nuovo MD: F C A F
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 6 (F7) - Originale MS: F7(h) R(h) | MD: R(h) C(h)
            // Nuovo MD: A F C C
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 7 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 8 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 9 (G7) - Originale MS: G7(h) R(h) | MD: R(h) D(q) B(q)
            // Nuovo MD: G B D B
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 10 (F7)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 11 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 12 (G7) - Originale MS: G7(h) R(h) | MD: R(h) D(h)
            // Nuovo MD: B G D D
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
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
    },
    // =======================================================================================
    // === Esercizio CH4-EX5: Mini-Studio Blues Elementare (Testa Semplice) ===
    // =======================================================================================
    {
        id: "ch4-ex5-MiniBluesStudy-SimpleHead",
        name: "Cap.4: Mini-Studio Blues (Testa Semplice)",
        category: "chapter_4",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [ // Mano Destra: Melodia "Testa" semplice di 12 battute
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "h", midiValue: 60 },         // Bar 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, // Bar 2 // Corretto c/4 e d/4 midiValues
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },                                                                     // Bar 3
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 },                                                 // Bar 4
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["c/5"], duration: "h", midiValue: 72 },                   // Bar 5
            { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["ab/4"], duration: "h", midiValue: 68 },                                                                   // Bar 6
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },                                                   // Bar 7
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Bar 8 // Corretto tutti i midiValues
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 },                                                                     // Bar 9
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },                                                                     // Bar 10
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Bar 11
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },                 // Bar 12
        ],
        notesBass: [ // Mano Sinistra: Accompagnamento con accordi tenuti (da CH1-EX4)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] },
        ]
    }
];

// Applica la trasformazione a tutti gli esercizi
const chapter4Exercises = chapter4ExercisesOriginal.map(exercise => {
    // Clona l'esercizio per non modificare l'originale direttamente
    const newExercise = JSON.parse(JSON.stringify(exercise));

    // Correzione: Assicurarsi che ogni nota in notesTreble abbia un midiValue se non è una pausa.
    // Questo è un esempio di come potresti farlo, ma dovresti adattarlo
    // alla logica specifica di come vengono determinati i midiValue se mancano.
    // Per ora, mi concentro sulla trasposizione del basso.
    // Se necessario, puoi aggiungere qui una logica per popolare i midiValue mancanti in notesTreble.
    // Esempio (molto semplificato e potrebbe non essere corretto per tutti i casi):
    /*
    if (newExercise.notesTreble) {
        newExercise.notesTreble = newExercise.notesTreble.map(noteObj => {
            if (noteObj.keys && !noteObj.keys[0].startsWith("r/") && typeof noteObj.midiValue === 'undefined' && noteObj.midiValues && noteObj.midiValues.length > 0) {
                // Prova a prendere il primo valore da midiValues se midiValue singolo manca
                // Questo è solo un placeholder, la logica corretta dipende dalla tua struttura dati
                // noteObj.midiValue = noteObj.midiValues[0];
            } else if (noteObj.keys && !noteObj.keys[0].startsWith("r/") && typeof noteObj.midiValue === 'undefined' && (!noteObj.midiValues || noteObj.midiValues.length === 0) ) {
                 // Qui dovresti avere una logica per derivare midiValue da 'keys' se possibile,
                 // o segnalare un errore/avviso. Per ora, lasciamo com'è per la richiesta principale.
                 // console.warn(`Missing midiValue for treble note: ${noteObj.keys.join(',')}`);
            }
            return noteObj;
        });
    }
    */


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
    window.exerciseData.chapter_4 = chapter4Exercises;
} else {
    window.exerciseData = {
        chapter_4: chapter4Exercises
    };
}