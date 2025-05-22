/**
 * js/exercises/licks_and_scales.js
 * Esercizi per lo studio di Licks Blues e Applicazioni delle Scale.
 * Esercizio LS-C-1: Lick Pentatonico Minore Base su I e IV grado in DO.
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
const licksAndScalesExercisesOriginal = [
    // =====================================================================================
    // === Esercizio LS-C-1 - Lick Pentatonico Minore Base (I e IV grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Pentatonica Minore di C e F.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-MinorPent1",
        name: "Lick Pent. Minore DO (su I & IV)",
        category: "licks_scales", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // === Lick su C7 ===
            // Pentatonica Minore di C: C(60), Eb(63), F(65), G(67), Bb(70)
            // Lick: G - Bb - G - F - Eb - C (ritmo: q q 8 8 q)
            // Bar 1 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // { keys: ["c/4"], duration: "q", midiValue: 60 }, // Nota finale del lick, spostata per ritmo

            // Bar 2 (C7) - Lick con risoluzione sulla tonica e pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 }, // Risoluzione del lick precedente
            { keys: ["r/4"], duration: "h." }, // Pausa per il resto della battuta

            // Bar 3 (C7) - Ripetizione Lick per rinforzo (o variazione)
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },

            // Bar 4 (C7) - Risoluzione e pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["r/4"], duration: "h." },


            // === Lick su F7 ===
            // Pentatonica Minore di F: F(65), Ab(68), Bb(70), C(72), Eb(75)
            // Lick adattato: C - Eb - C - Bb - Ab - F (stesso pattern ritmico)
            // Bar 5 (F7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },

            // Bar 6 (F7) - Risoluzione e pausa
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["r/4"], duration: "h." },

            // Bar 7 (C7) - Pausa o breve motivo di ritorno
            { keys: ["r/4"], duration: "w" },
            // Bar 8 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },

            // Bar 9 (G7) - Pausa (per ora non introduciamo lick sul V grado)
            { keys: ["r/4"], duration: "w" },
            // Bar 10 (F7) - Ripetizione Lick su F7 (opzionale, o pausa)
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["eb/5"], duration: "q", midiValue: 75 },
            { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["bb/4"], duration: "8", midiValue: 70 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },

            // Bar 11 (C7) - Risoluzione del lick di F7 e pausa
            { keys: ["f/4"], duration: "q", midiValue: 65 }, // Risoluzione del lick precedente
            { keys: ["r/4"], duration: "h." },
            // Bar 12 (G7) - Pausa finale
            { keys: ["r/4"], duration: "w" },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio LS-C-2 - Lick Scala Blues (I e V grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Scala Blues di C (su C7) e Scala Blues di G (su G7).
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-BluesScale1",
        name: "Lick Scala Blues DO (su I & V)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // === Lick su C7 (Scala Blues di Do: C, Eb, F, F#, G, Bb) ===
            // Lick: C - Eb - F - F# - F - Eb - C (ritmo: q 8 8 8 8 q q)
            // Bar 1 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
            { keys: ["eb/4"], duration: "8", midiValue: 63 },   // Eb
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F
            { keys: ["gb/4"], duration: "8", midiValue: 66 },   // F# (scritto Gb)
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F
            { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
            // { keys: ["c/4"], duration: "q", midiValue: 60 }, // Risoluzione spostata

            // Bar 2 (C7) - Risoluzione e pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa

            // Bar 3-4 (C7) - Pause per la mano destra
            { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" },

            // Bar 5-6 (F7) - Pause per la mano destra
            { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" },

            // Bar 7-8 (C7) - Pause per la mano destra
            { keys: ["r/4"], duration: "w" },
            { keys: ["r/4"], duration: "w" },

            // === Lick su G7 (Scala Blues di Sol: G, Bb, C, C#, D, F) ===
            // Lick adattato: G - Bb - C - C# - C - Bb - G
            // Bar 9 (G7)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (un'ottava sotto per varietà)
            { keys: ["bb/3"], duration: "8", midiValue: 58 },   // Bb
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C
            { keys: ["db/4"], duration: "8", midiValue: 61 },   // C# (scritto Db)
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C
            { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb

            // Bar 10 (G7) - Risoluzione e pausa
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa

            // Bar 11 (C7) - Pausa o breve risoluzione a C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, // Opzionale: risoluzione finale
            { keys: ["r/4"], duration: "h." },
            // Bar 12 (G7 o C7 per finale) - Pausa
            { keys: ["r/4"], duration: "w" },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (G7) - (Potrebbe essere F7 nella progressione standard, ma qui teniamo G7 per il lick)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7, o C7 per una chiusura più definitiva sull'esercizio)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio LS-C-3 - Lick Pentatonico Maggiore (I e IV grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Pentatonica Maggiore di C (su C7) e F (su F7).
    // Enfasi sulla sesta maggiore.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-MajorPent1",
        name: "Lick Pent. Maggiore DO (su I & IV)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // === Lick su C7 (Pentatonica Maggiore di Do: C, D, E, G, A) ===
            // Lick: A/4 G/4 E/4 D/4 | C/4 A/3 C/4 (ritmo: 8 8 8 8 | q 8 8 q)
            // Bar 1 (C7)
            { keys: ["a/4"], duration: "8", midiValue: 69 },    // A
            { keys: ["g/4"], duration: "8", midiValue: 67 },    // G
            { keys: ["e/4"], duration: "8", midiValue: 64 },    // E
            { keys: ["d/4"], duration: "8", midiValue: 62 },    // D
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
            { keys: ["a/3"], duration: "8", midiValue: 57 },    // A (ottava sotto)
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (ritorno)

            // Bar 2 (C7) - Pausa o continuazione/risoluzione breve
            // { keys: ["c/4"], duration: "q", midiValue: 60 }, // Potrebbe essere una nota tenuta
            { keys: ["r/4"], duration: "w" }, // Pausa per semplicità

            // Bar 3 (C7) - Ripetizione Lick per rinforzo
            { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["c/4"], duration: "8", midiValue: 60 },

            // Bar 4 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },


            // === Lick su F7 (Pentatonica Maggiore di Fa: F, G, A, C, D) ===
            // Lick adattato: D/5 C/5 A/4 G/4 | F/4 D/4 F/4
            // Bar 5 (F7)
            { keys: ["d/5"], duration: "8", midiValue: 74 },    // D
            { keys: ["c/5"], duration: "8", midiValue: 72 },    // C
            { keys: ["a/4"], duration: "8", midiValue: 69 },    // A
            { keys: ["g/4"], duration: "8", midiValue: 67 },    // G
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
            { keys: ["d/4"], duration: "8", midiValue: 62 },    // D (ottava sotto)
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F (ritorno)

            // Bar 6 (F7) - Pausa
            { keys: ["r/4"], duration: "w" },

            // Bar 7 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 8 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },

            // Bar 9 (G7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 10 (F7) - Ripetizione Lick su F7 (opzionale)
             { keys: ["d/5"], duration: "8", midiValue: 74 },
             { keys: ["c/5"], duration: "8", midiValue: 72 },
             { keys: ["a/4"], duration: "8", midiValue: 69 },
             { keys: ["g/4"], duration: "8", midiValue: 67 },
             { keys: ["f/4"], duration: "q", midiValue: 65 },
             { keys: ["d/4"], duration: "8", midiValue: 62 },
             { keys: ["f/4"], duration: "8", midiValue: 65 },

            // Bar 11 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 12 (G7) - Pausa finale
            { keys: ["r/4"], duration: "w" },
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio LS-C-4 - Lick Scala Misolidia (V e I grado) ===
    // =====================================================================================
    // Tonalità: Do. Lick sulla Scala Misolidia di G (su G7) e C (su C7).
    // Enfasi sulla 3a maggiore e b7.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-Mixolydian1",
        name: "Lick Misolidio DO (su V & I)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 3,

        notesTreble: [ // Mano Destra: Licks
            // Battute 1-8: Pause o riempitivi semplici per arrivare al G7
            { keys: ["r/4"], duration: "w" }, // Bar 1 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 2 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 3 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 4 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 5 (F7)
            { keys: ["r/4"], duration: "w" }, // Bar 6 (F7)
            { keys: ["r/4"], duration: "w" }, // Bar 7 (C7)
            { keys: ["r/4"], duration: "w" }, // Bar 8 (C7)

            // === Lick su G7 (Scala Misolidia di Sol: G A B C D E F) ===
            // Lick: D/4 - F/4 - E/4 - C/4 | B/3 - G/3 (ritmo: q q 8 8 | q q )
            // Gradi rispetto a G: 5 - b7 - 6 - 4 | 3 - 1
            // Bar 9 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },    // D
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F (b7 di G)
            { keys: ["e/4"], duration: "8", midiValue: 64 },    // E (6 di G)
            { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (4 di G)
            { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (3 di G)
            // { keys: ["g/3"], duration: "q", midiValue: 55 }, // Risoluzione spostata

            // Bar 10 (G7) - Risoluzione e pausa
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa

            // === Lick su C7 (Scala Misolidia di Do: C D E F G A Bb) ===
            // Lick adattato: G/3 - Bb/3 - A/3 - F/3 | E/3 - C/3
            // Gradi rispetto a C: 5 - b7 - 6 - 4 | 3 - 1
            // Bar 11 (C7)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G
            { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb (b7 di C)
            { keys: ["a/3"], duration: "8", midiValue: 57 },    // A (6 di C)
            { keys: ["f/3"], duration: "8", midiValue: 53 },    // F (4 di C)
            { keys: ["e/3"], duration: "q", midiValue: 52 },    // E (3 di C)
            // { keys: ["c/3"], duration: "q", midiValue: 48 }, // Risoluzione spostata

            // Bar 12 (C7, o G7 per turnaround se fosse un chorus completo) - Risoluzione e pausa
            { keys: ["c/3"], duration: "q", midiValue: 48 },    // C (Risoluzione)
            { keys: ["r/4"], duration: "h." },                 // Pausa
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 9 (G7) - Accordo per il lick misolidio di G
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 10 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

            // Bar 11 (C7) - Accordo per il lick misolidio di C
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (C7 o G7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio LS-C-5 - Lick Combinato (Mix Scale su I-IV-V) ===
    // =====================================================================================
    // Tonalità: Do. Lick esteso di 4 battute che combina elementi di Pentatonica Minore/Blues,
    // Pentatonica Maggiore e Misolidia sugli accordi C7, F7, G7.
    // Mano destra: Esegue il lick.
    // Mano sinistra: Accordi di settima.
    {
        id: "lickScale-C-Combined1",
        name: "Lick Combinato DO (I-IV-V)",
        category: "licks_scales",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Lick Combinato
            // === Lick su C7 (Bar 1-2) - Inizio Pentatonica Minore/Blues di Do ===
            // Bar 1 (C7) - Pattern: C Eb F F# (Blue note)
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
            { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
            { keys: ["gb/4"], duration: "q", midiValue: 66 },   // F# (Blue Note)

            // Bar 2 (C7) - Continuazione: G F Eb C (Risoluzione Pent. Minore)
            { keys: ["g/4"], duration: "q", midiValue: 67 },    // G
            { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
            { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // C

            // === Lick su F7 (Bar 3) - Transizione a Misolidia di Fa / Pent. Min. di Fa ===
            // Scala Misolidia di Fa: F G A Bb C D Eb
            // Pent. Min. di Fa: F Ab Bb C Eb
            // Lick: C(5 di F) - A(3 di F) - Ab(b3 di F, bluesy) - F(1 di F)
            // Ritmo: q q 8 8
            // Bar 3 (F7)
            { keys: ["c/5"], duration: "q", midiValue: 72 },    // C (5th di F)
            { keys: ["a/4"], duration: "q", midiValue: 69 },    // A (3rd di F - Misolidia)
            { keys: ["ab/4"], duration: "8", midiValue: 68 },   // Ab (b3 di F - Pent. Minore)
            { keys: ["f/4"], duration: "8", midiValue: 65 },    // F (Root)
            { keys: ["r/4"], duration: "h"}, // Pausa per completare la battuta

            // === Lick su G7 (Bar 4) - Transizione a Misolidia di G / Pent. Magg. di C ===
            // Scala Misolidia di G: G A B C D E F
            // Pent. Magg. di C: C D E G A (A è la 9a di G7, E è la 13a)
            // Lick: D(5 di G) - B(3 di G) - A(9 di G/6 di C) - G(1 di G)
            // Ritmo: q q q q
            // Bar 4 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },    // D (5th di G)
            { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (3rd di G)
            { keys: ["a/3"], duration: "q", midiValue: 57 },    // A (9th di G / 6th di C)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (Root)

            // Bar 5 (C7) - Risoluzione finale o pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["r/4"], duration: "h." },
            // Bar 6 (F7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 7 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 8 (G7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 9 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 10 (F7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 11 (C7) - Pausa
            { keys: ["r/4"], duration: "w" },
            // Bar 12 (G7) - Pausa
            { keys: ["r/4"], duration: "w" },

        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi di settima
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 3 (F7) - Accordo per il lick su F
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 4 (G7) - Accordo per il lick su G
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

            // Progressione standard per le restanti battute (per coerenza se l'utente continua a suonare)
            // Bar 5 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 6 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 7 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 8 (G7) - (Spesso C7 qui, ma G7 per un turnaround più standard)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
             // Bar 9 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 12 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
// =====================================================================================
// === Esercizio LS-G-1 - Lick Pentatonico Minore Base (I e IV grado) in SOL ===
// =====================================================================================
// Tonalità: Sol. Lick sulla Pentatonica Minore di G e C.
// Mano destra: Esegue il lick.
// Mano sinistra: Accordi di settima.
{
    id: "lickScale-G-MinorPent1",
    name: "Lick Pent. Minore SOL (su I & IV)",
    category: "licks_scales",
    staveLayout: "grand",
    keySignature: "G", // Un diesis (F#)
    timeSignature: "4/4",
    repetitions: 3,

    notesTreble: [ // Mano Destra: Licks
        // === Lick su G7 ===
        // Pentatonica Minore di G: G(55), Bb(58), C(60), D(62), F(65)
        // Lick: D/4 - F/4 - D/4 - C/4 - Bb/3 - G/3 (ritmo: q q 8 8 q q)
        // Bar 1 (G7)
        { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "q", midiValue: 58 },
        { keys: ["g/3"], duration: "q", midiValue: 55 }, // Risoluzione del lick

        // Bar 2 (G7) - Continuazione o variazione ritmica
        { keys: ["d/4"], duration: "h", midiValue: 62 }, // Nota tenuta
        { keys: ["f/4"], duration: "h", midiValue: 65 }, // Altra nota tenuta

        // Bar 3 (G7) - Ripetizione Lick
        { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "q", midiValue: 58 },
        { keys: ["g/3"], duration: "q", midiValue: 55 },

        // Bar 4 (G7) - Semplice motivo conclusivo sulla tonica
        { keys: ["g/3"], duration: "q", midiValue: 55 },
        { keys: ["bb/3"], duration: "q", midiValue: 58 },
        { keys: ["g/3"], duration: "h", midiValue: 55 },

        // === Lick su C7 ===
        // Pentatonica Minore di C: C(60), Eb(63), F(65), G(67), Bb(70)
        // Lick adattato: G/4 - Bb/4 - G/4 - F/4 - Eb/4 - C/4
        // Bar 5 (C7)
        { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["bb/4"], duration: "q", midiValue: 70 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["eb/4"], duration: "q", midiValue: 63 },
        { keys: ["c/4"], duration: "q", midiValue: 60 },

        // Bar 6 (C7) - Sviluppo
        { keys: ["eb/4"], duration: "h", midiValue: 63 },
        { keys: ["f/4"], duration: "h", midiValue: 65 },

        // Bar 7 (G7) - Motivo di ritorno a G
        { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["c/4"], duration: "q", midiValue: 60 },
        { keys: ["bb/3"], duration: "h", midiValue: 58 },

        // Bar 8 (G7) - Conclusione sulla tonica
        { keys: ["g/3"], duration: "w", midiValue: 55 },

        // Bar 9 (D7) - (Su V grado, qui lo usiamo per C)
        // Pentatonica Minore di G (usata su D7 per un suono outside che risolve a G)
        { keys: ["f/4"], duration: "q", midiValue: 65 }, // b3 di D
        { keys: ["d/4"], duration: "q", midiValue: 62 }, // Tonica di D
        { keys: ["c/4"], duration: "q", midiValue: 60 }, // b7 di D
        { keys: ["g/3"], duration: "q", midiValue: 55 }, // 4 di D

        // Bar 10 (C7) - Ripetizione Lick su C7
        { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["bb/4"], duration: "q", midiValue: 70 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["eb/4"], duration: "q", midiValue: 63 },
        { keys: ["c/4"], duration: "q", midiValue: 60 },

        // Bar 11 (G7) - Risoluzione finale
        { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["bb/3"], duration: "q", midiValue: 58 },
        { keys: ["g/3"], duration: "h", midiValue: 55 },

        // Bar 12 (D7 o G7 per finale)
        { keys: ["g/3"], duration: "w", midiValue: 55 } // Finale su G
    ], // end notesTreble

    notesBass: [ // Mano Sinistra: Accordi di settima (Progressione Blues in G)
        // G7 C7 G7 G7
        // C7 C7 G7 G7
        // D7 C7 G7 D7 (o G7 finale)
        // Bar 1 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 2 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 3 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 4 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

        // Bar 5 (C7) - IV grado
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 6 (C7)
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 7 (G7) - Ritorno a I
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 8 (G7)
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },

        // Bar 9 (D7) - V grado
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] }, // Gb è F#
        // Bar 10 (C7) - IV grado
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 11 (G7) - I grado
        { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
        // Bar 12 (D7 o G7 per finale)
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] } // D7 per turnaround tipico
    ] // end notesBass
},
// =====================================================================================
// === Esercizio LS-F-1 - Lick Scala Blues (I e V grado) in FA ===
// =====================================================================================
// Tonalità: Fa. Lick sulla Scala Blues di F (su F7) e Scala Blues di C (su C7).
// Mano destra: Esegue il lick.
// Mano sinistra: Accordi di settima.
{
    id: "lickScale-F-BluesScale1",
    name: "Lick Scala Blues FA (su I & V)",
    category: "licks_scales",
    staveLayout: "grand",
    keySignature: "F", // Un bemolle (Bb)
    timeSignature: "4/4",
    repetitions: 3,

    notesTreble: [ // Mano Destra: Licks
        // === Lick su F7 (Scala Blues di Fa: F, Ab, Bb, B, C, Eb) ===
        // Lick: F/4 - Ab/4 - Bb/4 - B/4 (blue note) - Bb/4 - Ab/4 - F/4
        // Ritmo: q 8 8 8 8 q q
        // Bar 1 (F7)
        { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
        { keys: ["ab/4"], duration: "8", midiValue: 68 },   // Ab
        { keys: ["bb/4"], duration: "8", midiValue: 70 },   // Bb
        { keys: ["b/4"], duration: "8", midiValue: 71 },    // B (blue note, scritto naturale)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },   // Bb
        { keys: ["ab/4"], duration: "q", midiValue: 68 },   // Ab
        { keys: ["f/4"], duration: "q", midiValue: 65 },    // F (Risoluzione)

        // Bar 2 (F7) - Continuazione melodica
        { keys: ["c/4"], duration: "q", midiValue: 60 },    // C (5th)
        { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb (b7th)
        { keys: ["f/4"], duration: "h", midiValue: 65 },    // F (Root)

        // Bar 3 (F7) - Ripetizione Lick con variazione ritmica finale
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["b/4"], duration: "8", midiValue: 71 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["ab/4"], duration: "q.", midiValue: 68 }, // Un po' più lungo
        { keys: ["f/4"], duration: "8", midiValue: 65 },  // Risoluzione più breve

        // Bar 4 (F7) - Motivo discendente sulla pentatonica minore di F
        { keys: ["eb/5"], duration: "q", midiValue: 75 },   // Eb
        { keys: ["c/5"], duration: "q", midiValue: 72 },    // C
        { keys: ["bb/4"], duration: "q", midiValue: 70 },   // Bb
        { keys: ["ab/4"], duration: "q", midiValue: 68 },   // Ab

        // Bar 5 (Bb7) - Lick sulla Pentatonica Minore di Bb (Bb, Db, Eb, F, Ab)
        // Lick: F/4 - Ab/4 - F/4 - Eb/4 - Db/4 - Bb/3
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["ab/4"], duration: "q", midiValue: 68 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },
        { keys: ["db/4"], duration: "q", midiValue: 61 },
        { keys: ["bb/3"], duration: "q", midiValue: 58 },

        // Bar 6 (Bb7) - Sviluppo melodico
        { keys: ["db/4"], duration: "h", midiValue: 61 },
        { keys: ["eb/4"], duration: "q", midiValue: 63 },
        { keys: ["f/4"], duration: "q", midiValue: 65 },

        // Bar 7 (F7) - Ritorno alla tonica F con enfasi sulla Blue Note
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["b/4"], duration: "q", midiValue: 71 }, // Blue note B
        { keys: ["bb/4"], duration: "q", midiValue: 70 }, // Risoluzione della blue note
        { keys: ["f/4"], duration: "q", midiValue: 65 },

        // Bar 8 (F7) - Conclusione semplice
        { keys: ["c/4"], duration: "h", midiValue: 60 }, // 5th
        { keys: ["f/3"], duration: "h", midiValue: 53 }, // Root più bassa

        // === Lick su C7 (Scala Blues di Sol: G, Bb, C, C#, D, F) - Adattato per C7 ===
        // Scala Blues di C: C, Eb, F, F#, G, Bb
        // Lick: C/4 - Eb/4 - F/4 - Gb/4 - F/4 - Eb/4 - C/4
        // Bar 9 (C7) - Questo è il V grado di F
        { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
        { keys: ["eb/4"], duration: "8", midiValue: 63 },   // Eb
        { keys: ["f/4"], duration: "8", midiValue: 65 },    // F
        { keys: ["gb/4"], duration: "8", midiValue: 66 },   // F# (blue note di C)
        { keys: ["f/4"], duration: "8", midiValue: 65 },    // F
        { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb
        { keys: ["c/4"], duration: "q", midiValue: 60 },    // C (Risoluzione)

        // Bar 10 (C7) - Continuazione
        { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (5th)
        { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb (b7th)
        { keys: ["c/4"], duration: "h", midiValue: 60 },    // C (Root)

        // Bar 11 (F7) - Risoluzione finale del V grado sulla tonica F
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["a/3"], duration: "q", midiValue: 57 }, // 3rd di F
        { keys: ["f/3"], duration: "h", midiValue: 53 }, // Root F

        // Bar 12 (C7 o F7 per finale)
        { keys: ["f/4"], duration: "w", midiValue: 65 } // Finale su F
    ], // end notesTreble

    notesBass: [ // Mano Sinistra: Accordi di settima (Progressione Blues in F)
        // F7 Bb7 F7 F7
        // Bb7 Bb7 F7 F7
        // C7 Bb7 F7 C7 (o F7 finale)
        // Bar 1 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 2 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 3 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 4 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },

        // Bar 5 (Bb7) - IV grado
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 6 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 7 (F7) - Ritorno a I
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 8 (F7)
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },

        // Bar 9 (C7) - V grado
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 10 (C7) - Teniamo C7 per coerenza col lick, anche se Bb7 sarebbe più standard qui
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
        // Bar 11 (F7) - I grado
        { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
        // Bar 12 (C7 o F7 per finale)
        { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] } // C7 per turnaround
    ] // end notesBass
},
// =====================================================================================
// === Esercizio LS-Bb-1 - Lick Pentatonico Maggiore (I e IV grado) in SIb ===
// =====================================================================================
// Tonalità: Sib. Lick sulla Pentatonica Maggiore di Bb (su Bb7) e Eb (su Eb7).
// Enfasi sulla sesta maggiore.
// Mano destra: Esegue il lick.
// Mano sinistra: Accordi di settima.
{
    id: "lickScale-Bb-MajorPent1",
    name: "Lick Pent. Maggiore SIb (su I & IV)",
    category: "licks_scales",
    staveLayout: "grand",
    keySignature: "Bb", // Due bemolli (Bb, Eb)
    timeSignature: "4/4",
    repetitions: 3,

    notesTreble: [ // Mano Destra: Licks
        // === Lick su Bb7 (Pentatonica Maggiore di Bb: Bb, C, D, F, G) ===
        // Lick: G/4 F/4 D/4 C/4 | Bb/3 G/3 Bb/3 (ritmo: 8 8 8 8 | q 8 8 q)
        // Bar 1 (Bb7)
        { keys: ["g/4"], duration: "8", midiValue: 67 },    // G (6th di Bb)
        { keys: ["f/4"], duration: "8", midiValue: 65 },    // F (5th di Bb)
        { keys: ["d/4"], duration: "8", midiValue: 62 },    // D (3rd di Bb)
        { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (2nd/9th di Bb)
        { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb (Root)
        { keys: ["g/3"], duration: "8", midiValue: 55 },    // G (6th ottava sotto)
        { keys: ["bb/3"], duration: "8", midiValue: 58 },   // Bb (Root ritorno)

        // Bar 2 (Bb7) - Continuazione melodica ascendente
        { keys: ["c/4"], duration: "q", midiValue: 60 },
        { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["f/4"], duration: "h", midiValue: 65 },

        // Bar 3 (Bb7) - Ripetizione Lick
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["bb/3"], duration: "q", midiValue: 58 },
        { keys: ["g/3"], duration: "8", midiValue: 55 },
        { keys: ["bb/3"], duration: "8", midiValue: 58 },

        // Bar 4 (Bb7) - Variazione: arpeggio Bbmaj7 (Bb D F A - A è la b7)
        { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb
        { keys: ["d/4"], duration: "q", midiValue: 62 },    // D
        { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
        { keys: ["ab/4"], duration: "q", midiValue: 68 },   // Ab (b7 di Bb7)

        // === Lick su Eb7 (Pentatonica Maggiore di Eb: Eb, F, G, Bb, C) ===
        // Lick adattato: C/5 Bb/4 G/4 F/4 | Eb/4 C/4 Eb/4
        // Bar 5 (Eb7) - IV grado
        { keys: ["c/5"], duration: "8", midiValue: 72 },    // C (6th di Eb)
        { keys: ["bb/4"], duration: "8", midiValue: 70 },   // Bb (5th di Eb)
        { keys: ["g/4"], duration: "8", midiValue: 67 },    // G (3rd di Eb)
        { keys: ["f/4"], duration: "8", midiValue: 65 },    // F (2nd/9th di Eb)
        { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb (Root)
        { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (6th ottava sotto)
        { keys: ["eb/4"], duration: "8", midiValue: 63 },   // Eb (Root ritorno)

        // Bar 6 (Eb7) - Sviluppo melodico
        { keys: ["f/4"], duration: "q", midiValue: 65 },
        { keys: ["g/4"], duration: "q", midiValue: 67 },
        { keys: ["bb/4"], duration: "h", midiValue: 70 },

        // Bar 7 (Bb7) - Motivo di ritorno a Bb7
        { keys: ["d/4"], duration: "q", midiValue: 62 },    // D
        { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
        { keys: ["g/4"], duration: "q", midiValue: 67 },    // G
        { keys: ["ab/4"], duration: "q", midiValue: 68 },   // Ab (b7 di Bb)

        // Bar 8 (Bb7) - Conclusione sulla tonica
        { keys: ["bb/3"], duration: "w", midiValue: 58 },

        // Bar 9 (F7) - V grado. Lick sulla pentatonica maggiore di Bb (suona "inside" su F7)
        // Lick: D/4 C/4 Bb/3 G/3 | F/3 D/3 F/3 (target F, la tonica di F7)
        { keys: ["d/4"], duration: "8", midiValue: 62 },    // D (6th di F)
        { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (5th di F)
        { keys: ["bb/3"], duration: "8", midiValue: 58 },   // Bb (4th di F)
        { keys: ["g/3"], duration: "8", midiValue: 55 },    // G (2nd di F)
        { keys: ["f/3"], duration: "q", midiValue: 53 },    // F (Root di F7)
        { keys: ["d/3"], duration: "8", midiValue: 50 },    // D (6th ottava sotto)
        { keys: ["f/3"], duration: "8", midiValue: 53 },    // F (Root ritorno)

        // Bar 10 (Eb7) - Ripetizione Lick su Eb7
        { keys: ["c/5"], duration: "8", midiValue: 72 },
        { keys: ["bb/4"], duration: "8", midiValue: 70 },
        { keys: ["g/4"], duration: "8", midiValue: 67 },
        { keys: ["f/4"], duration: "8", midiValue: 65 },
        { keys: ["eb/4"], duration: "q", midiValue: 63 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },
        { keys: ["eb/4"], duration: "8", midiValue: 63 },

        // Bar 11 (Bb7) - Risoluzione finale
        { keys: ["f/4"], duration: "q", midiValue: 65 },    // F
        { keys: ["d/4"], duration: "q", midiValue: 62 },    // D
        { keys: ["bb/3"], duration: "h", midiValue: 58 },   // Bb

        // Bar 12 (F7 o Bb7 per finale)
        { keys: ["bb/3"], duration: "w", midiValue: 58 } // Finale su Bb
    ], // end notesTreble

    notesBass: [ // Mano Sinistra: Accordi di settima (Progressione Blues in Bb)
        // Bb7 Eb7 Bb7 Bb7
        // Eb7 Eb7 Bb7 Bb7
        // F7  Eb7 Bb7 F7  (o Bb7 finale)
        // Bar 1 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 2 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 3 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 4 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },

        // Bar 5 (Eb7) - IV grado
        { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
        // Bar 6 (Eb7)
        { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
        // Bar 7 (Bb7) - Ritorno a I
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 8 (Bb7)
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },

        // Bar 9 (F7) - V grado
        { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "w", midiValues: [41, 45, 48, 51] },
        // Bar 10 (Eb7) - IV grado
        { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
        // Bar 11 (Bb7) - I grado
        { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
        // Bar 12 (F7 o Bb7 per finale)
        { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "w", midiValues: [41, 45, 48, 51] } // F7 per turnaround
    ] // end notesBass
},
// =====================================================================================
// === Esercizio LS-E-1 - Lick Scala Misolidia (V e I grado) in MI ===
// =====================================================================================
// Tonalità: Mi. Lick sulla Scala Misolidia di B (su B7, V grado) e E (su E7, I grado).
// Enfasi sulla 3a maggiore e b7.
// Mano destra: Esegue il lick.
// Mano sinistra: Accordi di settima.
{
    id: "lickScale-E-Mixolydian1",
    name: "Lick Misolidio MI (su V & I)",
    category: "licks_scales",
    staveLayout: "grand",
    keySignature: "E", // Quattro diesis (F#, C#, G#, D#)
    timeSignature: "4/4",
    repetitions: 3,

    notesTreble: [ // Mano Destra: Licks
        // Battute 1-4: Costruzione melodica su E7 per arrivare al B7
        // Bar 1 (E7) - Motivo ascendente sulla pentatonica minore di E (E G A B D)
        { keys: ["e/4"], duration: "q", midiValue: 64 },
        { keys: ["g/4"], duration: "q", midiValue: 67 }, // G naturale (b3)
        { keys: ["a/4"], duration: "q", midiValue: 69 },
        { keys: ["b/4"], duration: "q", midiValue: 71 },
        // Bar 2 (E7) - Continuazione
        { keys: ["d/5"], duration: "h", midiValue: 74 }, // D naturale (b7)
        { keys: ["b/4"], duration: "h", midiValue: 71 },
        // Bar 3 (A7) - IV grado, lick sulla pentatonica minore di A (A C D E G)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, // 5th di A
        { keys: ["g/4"], duration: "q", midiValue: 67 }, // b7 di A
        { keys: ["a/3"], duration: "q", midiValue: 57 }, // Root A
        { keys: ["c/4"], duration: "q", midiValue: 60 }, // b3 di A
        // Bar 4 (E7) - Ritorno a E, preparazione per B7
        { keys: ["b/3"], duration: "q", midiValue: 59 }, // 5th di E
        { keys: ["ab/3"], duration: "q", midiValue: 56 }, // G# (3rd di E)
        { keys: ["e/3"], duration: "h", midiValue: 52 }, // Root E

        // === Lick su B7 (V grado - Scala Misolidia di B: B Db Eb E Gb Ab A) ===
        // B C# D# E F# G# A
        // Lick: Gb/4 - A/4 - Ab/4 - E/4 | Eb/4 - B/3
        // Gradi rispetto a B: 5 - b7 - 6(G#) - 4(E) | 3(D#) - 1
        // Bar 5 (B7)
        { keys: ["gb/4"], duration: "q", midiValue: 66 },   // F# (5th di B)
        { keys: ["a/4"], duration: "q", midiValue: 69 },    // A (b7 di B)
        { keys: ["ab/4"], duration: "8", midiValue: 68 },   // G# (6th di B)
        { keys: ["e/4"], duration: "8", midiValue: 64 },    // E (4th di B)
        { keys: ["eb/4"], duration: "q", midiValue: 63 },   // D# (3rd di B)
        { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (Root)

        // Bar 6 (B7) - Sviluppo melodico
        { keys: ["db/4"], duration: "q", midiValue: 61 },   // C# (9th di B)
        { keys: ["eb/4"], duration: "q", midiValue: 63 },   // D#
        { keys: ["gb/4"], duration: "h", midiValue: 66 },   // F#

        // Bar 7 (E7) - Ritorno a I, lick sulla misolidia di E
        // Scala Misolidia di E: E Gb Ab A B Db D (E F# G# A B C# D)
        // Lick: B/3 - D/4 - Db/4 - A/3 | Ab/3 - E/3
        // Gradi: 5 - b7 - 6(C#) - 4 | 3(G#) - 1
        { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (5th di E)
        { keys: ["d/4"], duration: "q", midiValue: 62 },    // D (b7 di E)
        { keys: ["db/4"], duration: "8", midiValue: 61 },   // C# (6th di E)
        { keys: ["a/3"], duration: "8", midiValue: 57 },    // A (4th di E)
        { keys: ["ab/3"], duration: "q", midiValue: 56 },   // G# (3rd di E)
        { keys: ["e/3"], duration: "q", midiValue: 52 },    // E (Root)

        // Bar 8 (E7) - Conclusione
        { keys: ["gb/3"], duration: "h", midiValue: 54 },   // F# (9th di E)
        { keys: ["e/3"], duration: "h", midiValue: 52 },    // E

        // Bar 9 (B7) - Ripetizione Lick su B7
        { keys: ["gb/4"], duration: "q", midiValue: 66 },
        { keys: ["a/4"], duration: "q", midiValue: 69 },
        { keys: ["ab/4"], duration: "8", midiValue: 68 },
        { keys: ["e/4"], duration: "8", midiValue: 64 },
        { keys: ["eb/4"], duration: "q", midiValue: 63 },
        { keys: ["b/3"], duration: "q", midiValue: 59 },

        // Bar 10 (A7) - IV grado. Lick misolidio di A: E G Gb D | Db A
        // Gradi: 5 b7 6 4 | 3 1
        { keys: ["e/4"], duration: "q", midiValue: 64 },    // E
        { keys: ["g/4"], duration: "q", midiValue: 67 },    // G (b7 di A)
        { keys: ["gb/4"], duration: "8", midiValue: 66 },   // F# (6 di A)
        { keys: ["d/4"], duration: "8", midiValue: 62 },    // D (4 di A)
        { keys: ["db/4"], duration: "q", midiValue: 61 },   // C# (3 di A)
        { keys: ["a/3"], duration: "q", midiValue: 57 },    // A

        // Bar 11 (E7) - Lick Misolidio su E come in battuta 7
        { keys: ["b/3"], duration: "q", midiValue: 59 },
        { keys: ["d/4"], duration: "q", midiValue: 62 },
        { keys: ["db/4"], duration: "8", midiValue: 61 },
        { keys: ["a/3"], duration: "8", midiValue: 57 },
        { keys: ["ab/3"], duration: "q", midiValue: 56 },
        { keys: ["e/3"], duration: "q", midiValue: 52 },

        // Bar 12 (B7 o E7 per finale)
        { keys: ["e/4"], duration: "w", midiValue: 64 } // Finale su E
    ], // end notesTreble

    notesBass: [ // Mano Sinistra: Accordi di settima (Progressione Blues in E)
        // E7 A7 E7 E7
        // A7 A7 E7 E7
        // B7 A7 E7 B7 (o E7 finale)
        // Bar 1 (E7)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] }, // G# è Ab
        // Bar 2 (E7)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },
        // Bar 3 (A7) - IV grado
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] }, // C# è Db
        // Bar 4 (E7)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },

        // Bar 5 (B7) - V grado (Accordo per il lick misolidio di B)
        { keys: ["b/1", "eb/2", "gb/2", "a/2"], duration: "w", midiValues: [35, 39, 42, 45] }, // D# è Eb, F# è Gb
        // Bar 6 (B7)
        { keys: ["b/1", "eb/2", "gb/2", "a/2"], duration: "w", midiValues: [35, 39, 42, 45] },
        // Bar 7 (E7) - I grado (Accordo per il lick misolidio di E)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },
        // Bar 8 (E7)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },

        // Bar 9 (B7) - V grado
        { keys: ["b/1", "eb/2", "gb/2", "a/2"], duration: "w", midiValues: [35, 39, 42, 45] },
        // Bar 10 (A7) - IV grado
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 11 (E7) - I grado
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },
        // Bar 12 (B7 o E7 per finale)
        { keys: ["b/1", "eb/2", "gb/2", "a/2"], duration: "w", midiValues: [35, 39, 42, 45] } // B7 per turnaround
    ] // end notesBass
},
// =====================================================================================
// === Esercizio LS-A-1 - Lick Combinato (Mix Scale su I-IV-V) in LA ===
// =====================================================================================
// Tonalità: La. Lick esteso di 4 battute che combina elementi di Pentatonica Minore/Blues,
// Pentatonica Maggiore e Misolidia sugli accordi A7, D7, E7.
// Mano destra: Esegue il lick.
// Mano sinistra: Accordi di settima.
{
    id: "lickScale-A-Combined1",
    name: "Lick Combinato LA (I-IV-V)",
    category: "licks_scales",
    staveLayout: "grand",
    keySignature: "A", // Tre diesis (F#, C#, G#)
    timeSignature: "4/4",
    repetitions: 2,

    notesTreble: [ // Mano Destra: Lick Combinato
        // === Lick su A7 (Bar 1-2) - Inizio Pentatonica Minore/Blues di LA ===
        // Pent. Minore di A: A C D E G
        // Scala Blues di A: A C D Eb E G
        // Bar 1 (A7) - Pattern: A/3 C/4 D/4 Eb/4 (Blue note)
        { keys: ["a/3"], duration: "q", midiValue: 57 },    // A
        { keys: ["c/4"], duration: "q", midiValue: 60 },    // C (b3)
        { keys: ["d/4"], duration: "q", midiValue: 62 },    // D (4th)
        { keys: ["eb/4"], duration: "q", midiValue: 63 },   // Eb (Blue Note)

        // Bar 2 (A7) - Continuazione: E/4 D/4 C/4 A/3 (Risoluzione Pent. Minore)
        { keys: ["e/4"], duration: "q", midiValue: 64 },    // E (5th)
        { keys: ["d/4"], duration: "q", midiValue: 62 },    // D
        { keys: ["c/4"], duration: "q", midiValue: 60 },    // C
        { keys: ["a/3"], duration: "q", midiValue: 57 },    // A

        // === Lick su D7 (Bar 3) - IV grado. Transizione a Misolidia di RE / Pent. Magg. di LA ===
        // Scala Misolidia di D: D E Gb G A B C (D E F# G A B C)
        // Pent. Magg. di A: A B Db E Gb (A B C# E F#) -> Gb è la 3M di D, A è la 5 di D
        // Lick: A/4 (5 di D) - Gb/4 (3M di D) - G/4 (b5 blue di D o 4 di A) - D/4 (1 di D)
        // Ritmo: q q 8 8 q (per riempire)
        // Bar 3 (D7)
        { keys: ["a/4"], duration: "q", midiValue: 69 },    // A (5th di D)
        { keys: ["gb/4"], duration: "q", midiValue: 66 },   // F# (3rd di D - Misolidia)
        { keys: ["g/4"], duration: "8", midiValue: 67 },    // G (4th di D / b5 bluesy)
        { keys: ["d/4"], duration: "8", midiValue: 62 },    // D (Root)
        { keys: ["e/4"], duration: "h", midiValue: 64 },    // E (9th di D, per riempire)


        // === Lick su E7 (Bar 4) - V grado. Transizione a Misolidia di MI / Pent. Magg. di LA ===
        // Scala Misolidia di E: E Gb Ab A B Db D (E F# G# A B C# D)
        // Pent. Magg. di A: A B Db E Gb (A B C# E F#) -> B è la 5 di E7, Gb è la 9# di E7 (suono Lydian Dom)
        // Lick: B/3 (5 di E) - Ab/3 (3M di E) - Gb/3 (b3 blue di E / F#) - E/3 (1 di E)
        // Ritmo: q q q q
        // Bar 4 (E7)
        { keys: ["b/3"], duration: "q", midiValue: 59 },    // B (5th di E)
        { keys: ["ab/3"], duration: "q", midiValue: 56 },   // G# (3rd di E)
        { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (b3 bluesy di E, o b7 di A)
        { keys: ["e/3"], duration: "q", midiValue: 52 },    // E (Root)

        // === Ripetizione e Sviluppo del Lick ===
        // Bar 5 (A7) - Ritorno a A7, Pentatonica Maggiore di A (A B C# E F#)
        // Lick: Gb/4 E/4 Db/4 B/3 | A/3 Gb/3 A/3
        { keys: ["gb/4"], duration: "8", midiValue: 66 },   // F# (6th)
        { keys: ["e/4"], duration: "8", midiValue: 64 },    // E (5th)
        { keys: ["db/4"], duration: "8", midiValue: 61 },   // C# (3rd)
        { keys: ["b/3"], duration: "8", midiValue: 59 },    // B (2nd)
        { keys: ["a/3"], duration: "q", midiValue: 57 },    // A (Root)
        { keys: ["gb/3"], duration: "8", midiValue: 54 },   // F# (6th basso)
        { keys: ["a/3"], duration: "8", midiValue: 57 },    // A

        // Bar 6 (D7) - Misolidia di D, frase discendente
        // D C B A | G Gb D
        { keys: ["d/4"], duration: "8", midiValue: 62 },
        { keys: ["c/4"], duration: "8", midiValue: 60 },    // C (b7)
        { keys: ["b/3"], duration: "8", midiValue: 59 },    // B (6)
        { keys: ["a/3"], duration: "8", midiValue: 57 },    // A (5)
        { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (4)
        { keys: ["gb/3"], duration: "q", midiValue: 54 },   // F# (3)


        // Bar 7 (A7) - Ritorno a I, frase bluesy conclusiva
        { keys: ["e/4"], duration: "q", midiValue: 64 },    // E
        { keys: ["eb/4"], duration: "8", midiValue: 63 },   // Eb blue note
        { keys: ["d/4"], duration: "8", midiValue: 62 },    // D
        { keys: ["c/4"], duration: "q", midiValue: 60 },    // C b3
        { keys: ["a/3"], duration: "q", midiValue: 57 },    // A

        // Bar 8 (E7) - Dominante per turnaround
        { keys: ["b/3"], duration: "q", midiValue: 59 },    // B
        { keys: ["ab/3"], duration: "q", midiValue: 56 },   // G#
        { keys: ["e/3"], duration: "h", midiValue: 52 },    // E

        // Bar 9 (A7) - Conclusione semplice su A
        { keys: ["a/4"], duration: "h", midiValue: 69 },
        { keys: ["e/4"], duration: "h", midiValue: 64 },

        // Bar 10 (D7) - Accordo lungo
        { keys: ["d/4"], duration: "w", midiValue: 62 },

        // Bar 11 (A7) - Accordo lungo
        { keys: ["a/3"], duration: "w", midiValue: 57 },

        // Bar 12 (E7) - Accordo lungo per chiudere o turnaround
        { keys: ["e/4"], duration: "w", midiValue: 64 }
    ], // end notesTreble

    notesBass: [ // Mano Sinistra: Accordi di settima (Progressione Blues in A)
        // A7 D7 A7 A7
        // D7 D7 A7 A7
        // E7 D7 A7 E7 (o A7 finale)
        // Bar 1 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] }, // C# è Db
        // Bar 2 (A7)
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 3 (D7) - IV grado
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] }, // F# è Gb
        // Bar 4 (E7) - V grado
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] }, // G# è Ab

        // Bar 5 (A7) - Ritorno a I
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 6 (D7) - IV grado
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 7 (A7) - I grado
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 8 (E7) - V grado
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] },

        // Bar 9 (A7) - I grado
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 10 (D7) - IV grado
        { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "w", midiValues: [38, 42, 45, 48] },
        // Bar 11 (A7) - I grado
        { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },
        // Bar 12 (E7 o A7 per finale)
        { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "w", midiValues: [40, 44, 47, 50] } // E7 per turnaround
    ] // end notesBass
},


];

// Applica la trasformazione a tutti gli esercizi
const licksAndScalesExercises = licksAndScalesExercisesOriginal.map(exercise => {
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
    window.exerciseData.licks_scales = licksAndScalesExercises; // Sovrascrive la categoria con i dati modificati
} else {
    window.exerciseData = {
        licks_scales: licksAndScalesExercises
    };
}