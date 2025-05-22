/**
 * js/exercises/charper_10.js
 * Capitolo 10 (o categoria "Classic Blues"): Esercizi basati su Standard Blues.
 * Esercizio 1: Estratto in stile "St. Louis Blues" in SOL.
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

// Array che conterrà tutti gli esercizi di questo capitolo/categoria (originale)
const classicBluesExercisesOriginal = [ // Ho chiamato l'array 'classicBluesExercises'
    // =======================================================================================
    // === Esercizio BLUES-CLASSIC-G-1: Estratto "St. Louis Blues" Style (36 Battute) ===
    // =======================================================================================
    // Ispirato a "St. Louis Blues" di W.C. Handy (1914, composizione di pubblico dominio negli USA)
    // Questo è un arrangiamento originale di 36 battute (3 chorus blues standard) in SOL.
    {
        id: "bluesClassic-G-StLouisStyle-36Bar",
        name: "Classic Blues: St. Louis Style Excerpt (G)",
        category: "classic_blues", // Categoria per questi esercizi
        staveLayout: "grand",
        keySignature: "G", // Un diesis (F#)
        timeSignature: "4/4",
        repetitions: 1, // L'estratto è già di 36 battute
        notesTreble: [ // Mano Destra: Melodia bluesy originale ispirata allo stile
            // CHORUS 1
            // Bar 1 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 2 (G7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 3 (G7)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 4 (G7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 5 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 6 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 7 (G7)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 8 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 9 (D7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 10 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 11 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 12 (D7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["gb/3"], duration: "h", midiValue: 54 },

            // CHORUS 2
            // Bar 13 (G7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 14 (G7)
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
            // Bar 15 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 16 (G7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 17 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 18 (C7)
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["bb/4"], duration: "h", midiValue: 70 },
            // Bar 19 (G7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 20 (G7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 21 (D7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["gb/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 22 (C7)
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 23 (G7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 24 (D7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },

            // CHORUS 3
            // Bar 25 (G7)
            { keys: ["d/4"], duration: "q.", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 26 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 27 (G7)
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 28 (G7)
            { keys: ["g/3"], duration: "w", midiValue: 55 },
            // Bar 29 (C7)
            { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            // Bar 30 (C7)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 31 (G7)
            { keys: ["d/4"], duration: "q.", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 32 (G7)
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Bar 33 (D7)
            { keys: ["a/3"], duration: "q.", midiValue: 57 }, { keys: ["gb/3"], duration: "8", midiValue: 54 },
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 34 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 35 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 36 (G7)
            { keys: ["g/3"], duration: "w", midiValue: 55 },
        ],
        notesBass: [ // Mano Sinistra: Accordi di settima su ogni semiminima
            // G7: [31,35,38,41], C7: [36,40,43,46], D7: [38,42,45,48]
            // Chorus 1
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 1 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 2 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 3 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 4 (G7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 5 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 6 (C7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 7 (G7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 8 (G7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 9 (D7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 10 (C7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 11 (G7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 12 (D7)
            // Chorus 2
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            // Chorus 3
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Chorus 4
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] } // Bar 48 (A7 finale)
        ]
    },
    

    {
    id: "bluesClassic-C-CarelessLoveStyle-48Bar",
        name: "Classic Blues: Careless Love Style Excerpt (C)",
        category: "classic_blues",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra: Melodia semplice con feeling folk/blues
            // CHORUS 1
            // Bar 1 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 2 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 3 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 5 (F7)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 6 (F7)
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["eb/4"], duration: "h", midiValue: 63 }, // Eb è b7 di F7
            // Bar 7 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 8 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 9 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // F è b7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (F7)
            { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 11 (C7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 12 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },

            // CHORUS 2
            // Bar 13 (C7)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, // Bb b7
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 14 (C7)
            { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 15 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 16 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 17 (F7)
            { keys: ["f/4"], duration: "q.", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 18 (F7)
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // G su F7 (9a)
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 19 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 20 (C7)
            { keys: ["d/4"], duration: "w", midiValue: 62 }, // D (9a di C7)
            // Bar 21 (G7)
            { keys: ["b/3"], duration: "q.", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 22 (F7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 23 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 24 (G7)
            { keys: ["d/4"], duration: "w", midiValue: 62 },

            // CHORUS 3
            // Bar 25 (C7)
            { keys: ["e/4"], duration: "8", midiValue: 64 },{ keys: ["f/4"], duration: "8", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 26 (C7)
            { keys: ["d/4"], duration: "h", midiValue: 62 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 27 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 28 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },{ keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 29 (F7)
            { keys: ["a/4"], duration: "8", midiValue: 69 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 30 (F7)
            { keys: ["f/4"], duration: "w", midiValue: 65 },
            // Bar 31 (C7)
            { keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 32 (C7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 33 (G7)
            { keys: ["b/3"], duration: "8", midiValue: 59 },{ keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 34 (F7) - CORRETTO
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 35 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 36 (G7) - MELODIA PIÙ ATTIVA (esempio)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Risolve su G

            // CHORUS 4
            // Bar 37 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["bb/4"], duration: "q", midiValue: 70 },
            // Bar 38 (C7)
            { keys: ["c/5"], duration: "h", midiValue: 72 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 39 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 40 (C7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 41 (F7)
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 42 (F7)
            { keys: ["f/4"], duration: "w", midiValue: 65 },
            // Bar 43 (C7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 44 (C7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 45 (G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 46 (F7)
            { keys: ["eb/4"], duration: "h", midiValue: 63 },{ keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 47 (C7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 48 (C7) - Finale sulla tonica (o G7 per ciclo)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
        ],
        notesBass: [ // Mano Sinistra: Accordi di settima su ogni semiminima
            // C7: [36,40,43,46], F7: [29,33,36,39], G7: [31,35,38,41]
            // Chorus 1
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 1 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 2 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 3 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 4 (C7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] }, // Bar 5 (F7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] }, // Bar 6 (F7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 7 (C7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 8 (C7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 9 (G7)
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] }, // Bar 10 (F7)
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 11 (C7)
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] }, // Bar 12 (G7)
            // Chorus 2
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            // Chorus 3
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },{ keys: ["g/1","b/1","d/2","f/2"], duration: "q", midiValues: [31,35,38,41] },
            { keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },{ keys: ["f/1","a/1","c/2","eb/2"], duration: "q", midiValues: [29,33,36,39] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },
            { keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] },{ keys: ["c/2","e/2","g/2","bb/2"], duration: "q", midiValues: [36,40,43,46] }, // Bar 48 (C7 finale)
        ]
    },
    // =======================================================================================
    // === Esercizio BLUES-CLASSIC-Am-1: Estratto "Frankie and Johnny" Style (48 Battute) ===
    // =======================================================================================
    // Ispirato a "Frankie and Johnny" (Tradizionale, arrangiamento originale)
    // Questo è un arrangiamento originale di 48 battute (4 chorus blues standard) in LA (con sonorità minore/blues).
    {
        id: "bluesClassic-Am-FrankieJohnnyStyle-48Bar",
        name: "Classic Blues: Frankie & Johnny Style Excerpt (Am)",
        category: "classic_blues",
        staveLayout: "grand",
        keySignature: "Am", 
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra: Melodia con feeling narrativo/blues in LA minore
            // CHORUS 1 (Progressione Blues in LA: A7, D7, E7)
            // Bar 1 (A7) - Melodia su pentatonica minore di A (A C D E G)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 2 (A7)
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // G è b7 di A7
            // Bar 3 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 4 (A7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 5 (D7) - Melodia su pentatonica minore di D (D F G A C)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 6 (D7)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, // C è b7 di D7
            // Bar 7 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 8 (A7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 9 (E7) - Melodia su pentatonica minore di E (E G A B D)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 10 (D7)
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            // Bar 11 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 12 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // G è b7 di E7
            { keys: ["e/3"], duration: "h", midiValue: 52 },

            // CHORUS 2
            // Bar 13 (A7)
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 14 (A7)
            { keys: ["a/3"], duration: "q.", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, // B è 9 di A7
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 15 (A7)
            { keys: ["e/4"], duration: "8", midiValue: 64 },{ keys: ["eb/4"], duration: "8", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Eb blue note
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 16 (A7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 17 (D7)
            { keys: ["f/4"], duration: "q.", midiValue: 65 },{ keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 18 (D7)
            { keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 19 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 20 (A7)
            { keys: ["g/3"], duration: "w", midiValue: 55 },
            // Bar 21 (E7)
            { keys: ["b/3"], duration: "q.", midiValue: 59 },{ keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, // G è b7 di E7
            // Bar 22 (D7)
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 23 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 24 (E7)
            { keys: ["g/3"], duration: "w", midiValue: 55 },

            // CHORUS 3
            // Bar 25 (A7)
            { keys: ["a/3"], duration: "8", midiValue: 57 },{ keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 26 (A7)
            { keys: ["a/4"], duration: "h", midiValue: 69 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 27 (A7)
            { keys: ["e/4"], duration: "8", midiValue: 64 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 28 (A7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 29 (D7)
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["f/4"], duration: "8", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 30 (D7)
            { keys: ["d/4"], duration: "h", midiValue: 62 },{ keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 31 (A7)
            { keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 32 (A7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 33 (E7)
            { keys: ["b/3"], duration: "8", midiValue: 59 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 34 (D7)
            { keys: ["f/4"], duration: "h", midiValue: 65 },{ keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 35 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 36 (E7)
            { keys: ["e/3"], duration: "w", midiValue: 52 },

            // CHORUS 4
            // Bar 37 (A7)
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 38 (A7)
            { keys: ["g/4"], duration: "h", midiValue: 67 },{ keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 39 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 40 (A7)
            { keys: ["a/4"], duration: "w", midiValue: 69 },
            // Bar 41 (D7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 42 (D7)
            { keys: ["c/5"], duration: "h", midiValue: 72 },{ keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 43 (A7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 44 (A7)
            { keys: ["a/3"], duration: "w", midiValue: 57 },
            // Bar 45 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 46 (D7)
            { keys: ["a/4"], duration: "h", midiValue: 69 },{ keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 47 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 48 (A7) - Finale sulla tonica (o E7 per ciclo)
            { keys: ["a/3"], duration: "w", midiValue: 57 },
        ],
        notesBass: [ // Mano Sinistra: Accordi di settima su ogni semiminima
            // A7: [33,37,40,43] (A,C#,E,G), D7: [38,42,45,48] (D,F#,A,C), E7: [40,44,47,50] (E,G#,B,D)
            // Chorus 1
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 1 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 2 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 3 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 4 (A7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 5 (D7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 6 (D7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 7 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 8 (A7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 9 (E7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 10 (D7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 11 (A7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 12 (E7)
            // Chorus 2
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            // Chorus 3
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 48 (A7 finale)
        ]
    },
// =======================================================================================
    // === Esercizio BLUES-CLASSIC-Am-1: Estratto "Frankie and Johnny" Style (48 Battute) ===
    // =======================================================================================
    // Ispirato a "Frankie and Johnny" (Tradizionale, arrangiamento originale)
    // Questo è un arrangiamento originale di 48 battute (4 chorus blues standard) in LA (con sonorità minore/blues).
    {
        id: "bluesClassic-Am-FrankieJohnnyStyle-48Bar",
        name: "Classic Blues: Frankie & Johnny Style Excerpt (Am)",
        category: "classic_blues",
        staveLayout: "grand",
        keySignature: "Am", 
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra: Melodia con feeling narrativo/blues in LA minore
            // CHORUS 1 (Progressione Blues in LA: A7, D7, E7)
            // Bar 1 (A7) - Melodia su pentatonica minore di A (A C D E G)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 2 (A7)
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // G è b7 di A7
            // Bar 3 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 4 (A7)
            { keys: ["c/4"], duration: "w", midiValue: 60 },
            // Bar 5 (D7) - Melodia su pentatonica minore di D (D F G A C)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 6 (D7)
            { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, // C è b7 di D7
            // Bar 7 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 8 (A7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 9 (E7) - Melodia su pentatonica minore di E (E G A B D)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 10 (D7)
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            // Bar 11 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 12 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // G è b7 di E7
            { keys: ["e/3"], duration: "h", midiValue: 52 },

            // CHORUS 2
            // Bar 13 (A7)
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 14 (A7)
            { keys: ["a/3"], duration: "q.", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, // B è 9 di A7
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 15 (A7)
            { keys: ["e/4"], duration: "8", midiValue: 64 },{ keys: ["eb/4"], duration: "8", midiValue: 63 },{ keys: ["d/4"], duration: "q", midiValue: 62 }, // Eb blue note
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 16 (A7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 17 (D7)
            { keys: ["f/4"], duration: "q.", midiValue: 65 },{ keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 18 (D7)
            { keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 19 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 20 (A7)
            { keys: ["g/3"], duration: "w", midiValue: 55 },
            // Bar 21 (E7)
            { keys: ["b/3"], duration: "q.", midiValue: 59 },{ keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, // G è b7 di E7
            // Bar 22 (D7)
            { keys: ["f/4"], duration: "q", midiValue: 65 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 23 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 24 (E7)
            { keys: ["g/3"], duration: "w", midiValue: 55 },

            // CHORUS 3
            // Bar 25 (A7)
            { keys: ["a/3"], duration: "8", midiValue: 57 },{ keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 26 (A7)
            { keys: ["a/4"], duration: "h", midiValue: 69 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 27 (A7)
            { keys: ["e/4"], duration: "8", midiValue: 64 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["g/3"], duration: "q", midiValue: 55 },
            // Bar 28 (A7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 29 (D7)
            { keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["f/4"], duration: "8", midiValue: 65 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 },{ keys: ["c/5"], duration: "q", midiValue: 72 },
            // Bar 30 (D7)
            { keys: ["d/4"], duration: "h", midiValue: 62 },{ keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 31 (A7)
            { keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 32 (A7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 33 (E7)
            { keys: ["b/3"], duration: "8", midiValue: 59 },{ keys: ["d/4"], duration: "8", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 34 (D7)
            { keys: ["f/4"], duration: "h", midiValue: 65 },{ keys: ["d/4"], duration: "h", midiValue: 62 },
            // Bar 35 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 36 (E7)
            { keys: ["e/3"], duration: "w", midiValue: 52 },

            // CHORUS 4
            // Bar 37 (A7)
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 38 (A7)
            { keys: ["g/4"], duration: "h", midiValue: 67 },{ keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 39 (A7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 40 (A7)
            { keys: ["a/4"], duration: "w", midiValue: 69 },
            // Bar 41 (D7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },{ keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 42 (D7)
            { keys: ["c/5"], duration: "h", midiValue: 72 },{ keys: ["a/4"], duration: "h", midiValue: 69 },
            // Bar 43 (A7)
            { keys: ["g/4"], duration: "q", midiValue: 67 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 44 (A7)
            { keys: ["a/3"], duration: "w", midiValue: 57 },
            // Bar 45 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 46 (D7)
            { keys: ["a/4"], duration: "h", midiValue: 69 },{ keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 47 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 48 (A7) - Finale sulla tonica (o E7 per ciclo)
            { keys: ["a/3"], duration: "w", midiValue: 57 },
        ],
        notesBass: [ // Mano Sinistra: Accordi di settima su ogni semiminima
            // A7: [33,37,40,43] (A,C#,E,G), D7: [38,42,45,48] (D,F#,A,C), E7: [40,44,47,50] (E,G#,B,D)
            // Chorus 1
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 1 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 2 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 3 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 4 (A7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 5 (D7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 6 (D7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 7 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 8 (A7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 9 (E7)
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] }, // Bar 10 (D7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 11 (A7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 12 (E7)
            // Chorus 2
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            // Chorus 3
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },{ keys: ["d/2","gb/2","a/2","c/3"], duration: "q", midiValues: [38,42,45,48] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 48 (A7 finale)
        ]
    }, 
    // =====================================================================================
    // === Esercizio BLUES-CLASSIC-E-1: Estratto "John Henry" Style (48 Battute) ===
    // =======================================================================================
    // Ispirato a "John Henry" (Tradizionale, arrangiamento originale)
    // Questo è un arrangiamento originale di 48 battute (4 chorus blues standard) in MI.
    {
        id: "bluesClassic-E-JohnHenryStyle-48Bar",
        name: "Classic Blues: John Henry Style Excerpt (E)",
        category: "classic_blues",
        staveLayout: "grand",
        keySignature: "E", // Quattro diesis (F#, C#, G#, D#)
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [ // Mano Destra: Melodia con feeling folk/blues narrativo in MI
            // CHORUS 1 (Progressione Blues in MI: E7, A7, B7)
            // Bar 1 (E7) - Melodia su pentatonica maggiore di E (E Gb Ab B Db) / note di E7
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, // G#
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["ab/4"], duration: "q", midiValue: 68 },
            // Bar 2 (E7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, // D è b7 di E7
            // Bar 3 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["ab/4"], duration: "q", midiValue: 68 },
            // Bar 4 (E7)
            { keys: ["b/4"], duration: "w", midiValue: 71 },
            // Bar 5 (A7) - Melodia su pentatonica maggiore di A (A B Db E Gb) / note di A7
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["db/4"], duration: "q", midiValue: 61 },
            // Bar 6 (A7)
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, // G è b7 di A7
            // Bar 7 (E7)
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 8 (E7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 9 (B7) - Melodia su pentatonica maggiore di B (B Db Eb Gb Ab) / note di B7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // D#
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // F#
            // Bar 10 (A7)
            { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["db/4"], duration: "h", midiValue: 61 },
            // Bar 11 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["ab/4"], duration: "h", midiValue: 68 },
            // Bar 12 (B7)
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["b/3"], duration: "h", midiValue: 59 },

            // CHORUS 2
            // Bar 13 (E7)
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["ab/4"], duration: "q", midiValue: 68 },
            // Bar 14 (E7)
            { keys: ["e/4"], duration: "q.", midiValue: 64 }, { keys: ["gb/4"], duration: "8", midiValue: 66 },
            { keys: ["ab/4"], duration: "h", midiValue: 68 },
            // Bar 15 (E7)
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 16 (E7)
            { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["ab/4"], duration: "h", midiValue: 68 },
            // Bar 17 (A7)
            { keys: ["a/4"], duration: "q.", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // G nat (b7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 18 (A7)
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // C nat (blue note per A)
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 19 (E7)
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 20 (E7)
            { keys: ["d/4"], duration: "w", midiValue: 62 },
            // Bar 21 (B7)
            { keys: ["gb/4"], duration: "q.", midiValue: 66 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // A nat (b7)
            { keys: ["b/4"], duration: "h", midiValue: 71 },
            // Bar 22 (A7)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 23 (E7)
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 24 (B7)
            { keys: ["gb/3"], duration: "w", midiValue: 54 }, // F#

            // CHORUS 3
            // Bar 25 (E7)
            { keys: ["e/4"], duration: "8", midiValue: 64 },{ keys: ["ab/4"], duration: "8", midiValue: 68 },{ keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 26 (E7)
            { keys: ["e/5"], duration: "h", midiValue: 76 },{ keys: ["b/4"], duration: "h", midiValue: 71 },
            // Bar 27 (E7)
            { keys: ["ab/4"], duration: "8", midiValue: 68 },{ keys: ["g/4"], duration: "8", midiValue: 67 },{ keys: ["gb/4"], duration: "q", midiValue: 66 }, // G nat (blue note)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 28 (E7)
            { keys: ["ab/4"], duration: "w", midiValue: 68 },
            // Bar 29 (A7)
            { keys: ["a/3"], duration: "8", midiValue: 57 },{ keys: ["c/4"], duration: "8", midiValue: 60 },{ keys: ["db/4"], duration: "q", midiValue: 61 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 30 (A7)
            { keys: ["a/4"], duration: "h", midiValue: 69 },{ keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 31 (E7)
            { keys: ["gb/4"], duration: "8", midiValue: 66 },{ keys: ["ab/4"], duration: "8", midiValue: 68 },{ keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 32 (E7)
            { keys: ["d/5"], duration: "q", midiValue: 74 },{ keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["ab/4"], duration: "h", midiValue: 68 },
            // Bar 33 (B7)
            { keys: ["gb/4"], duration: "8", midiValue: 66 },{ keys: ["a/4"], duration: "8", midiValue: 69 },{ keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 34 (A7)
            { keys: ["db/4"], duration: "h", midiValue: 61 },{ keys: ["a/3"], duration: "h", midiValue: 57 },
            // Bar 35 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["e/3"], duration: "h", midiValue: 52 },
            // Bar 36 (B7)
            { keys: ["b/3"], duration: "w", midiValue: 59 },

            // CHORUS 4
            // Bar 37 (E7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },{ keys: ["d/5"], duration: "q", midiValue: 74 },
            // Bar 38 (E7)
            { keys: ["e/5"], duration: "h", midiValue: 76 },{ keys: ["ab/4"], duration: "h", midiValue: 68 },
            // Bar 39 (E7)
            { keys: ["b/4"], duration: "q", midiValue: 71 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },{ keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 40 (E7)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            // Bar 41 (A7)
            { keys: ["a/3"], duration: "q", midiValue: 57 },{ keys: ["c/4"], duration: "q", midiValue: 60 }, // C nat blue
            { keys: ["db/4"], duration: "q", midiValue: 61 },{ keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 42 (A7)
            { keys: ["a/4"], duration: "h", midiValue: 69 },{ keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 43 (E7)
            { keys: ["ab/4"], duration: "q", midiValue: 68 },{ keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 44 (E7)
            { keys: ["b/3"], duration: "w", midiValue: 59 },
            // Bar 45 (B7)
            { keys: ["gb/4"], duration: "q", midiValue: 66 },{ keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 },{ keys: ["d/5"], duration: "q", midiValue: 74 }, // D nat (b3 di B)
            // Bar 46 (A7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },{ keys: ["db/4"], duration: "h", midiValue: 61 },
            // Bar 47 (E7)
            { keys: ["b/3"], duration: "q", midiValue: 59 },{ keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 48 (E7) - Finale sulla tonica (o B7 per ciclo)
            { keys: ["e/4"], duration: "w", midiValue: 64 },
        ],
        notesBass: [ // Mano Sinistra: Accordi di settima su ogni semiminima
            // E7: [40,44,47,50] (E,G#,B,D), A7: [33,37,40,43] (A,C#,E,G), B7: [35,39,42,45] (B,D#,F#,A)
            // Chorus 1
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 1 (E7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 2 (E7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 3 (E7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 4 (E7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 5 (A7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 6 (A7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 7 (E7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 8 (E7)
            { keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] }, // Bar 9 (B7)
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] }, // Bar 10 (A7)
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 11 (E7)
            { keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] }, // Bar 12 (B7)
            // Chorus 2
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },
            // Chorus 3
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },{ keys: ["b/1","eb/2","gb/2","a/2"], duration: "q", midiValues: [35,39,42,45] },
            { keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },{ keys: ["a/1","db/2","e/2","g/2"], duration: "q", midiValues: [33,37,40,43] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },
            { keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] },{ keys: ["e/2","ab/2","b/2","d/3"], duration: "q", midiValues: [40,44,47,50] }, // Bar 48 (E7 finale)
        ]
    }
];


// Applica la trasformazione a tutti gli esercizi
const classicBluesExercises = classicBluesExercisesOriginal.map(exercise => {
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
    window.exerciseData.classic_blues = classicBluesExercises;
} else {
    window.exerciseData = {
        classic_blues: classicBluesExercises
    };
}