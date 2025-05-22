/**
 * js/exercises/walking_bass_lines.js
 * Esercizi per lo studio delle Walking Bass Lines nel Blues.
 * Esercizio WB-C-1: Walking Bass Intermedio in DO.
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
const walkingBassExercisesOriginal = [
    // =======================================================================
    // === Esercizio WB-C-1 - Walking Bass Intermedio in DO ===
    // =======================================================================
    // Mano sinistra: Walking bass con semiminime, note diatoniche e approcci cromatici.
    // Mano destra: Accordi di settima come riferimento armonico.
    {
        id: "walkingBass-C-Intermediate1",
        name: "Walking Bass DO (Intermedio 1)",
        category: "walking_bass", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Accordi di settima (semibrevi)
            // Bar 1 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 2 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 3 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 4 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },

            // Bar 5 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 6 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 7 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 8 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },

            // Bar 9 (G7)
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] },
            // Bar 10 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 11 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 12 (G7) - Turnaround
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass Lines (semiminime)
            // Bar 1 (C7) - Pattern: 1-2-3-5
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["d/2"], duration: "q", midiValue: 38 },  // D
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G

            // Bar 2 (C7) - Pattern: 1-3-5-6
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A

            // Bar 3 (C7) - Pattern: 1-b3(pass)-3-5 (leggero sapore bluesy)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, // Eb (passaggio)
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G

            // Bar 4 (C7) - Pattern: 1-5-b7-1(oct up) -> conduce a F
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C (ottava sopra, prepara F)

            // Bar 5 (F7) - Pattern: 1-2-3-5
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C

            // Bar 6 (F7) - Pattern: 1-3-5-b7
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, // Eb

            // Bar 7 (C7) - Ritorno a C
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C
            { keys: ["b/2"], duration: "q", midiValue: 47 },  // B (approccio cromatico a C o passing)
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb (b7)
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A (sesta, conduce a G o G#)

            // Bar 8 (C7) - Pattern: 1-3-5-b7 (classico)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb

            // Bar 9 (G7) - Pattern: 1-2-3-5
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A
            { keys: ["b/2"], duration: "q", midiValue: 47 },  // B
            { keys: ["d/3"], duration: "q", midiValue: 50 },  // D

            // Bar 10 (F7) - Pattern: 1-3-5-b7
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, // Eb

            // Bar 11 (C7) - Pattern: 1-5-b7-1(oct up)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C (ottava sopra)

            // Bar 12 (G7) - Turnaround - Pattern: 1-3-5-b7 (prepara ritorno a C)
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["b/2"], duration: "q", midiValue: 47 },  // B
            { keys: ["d/3"], duration: "q", midiValue: 50 },  // D
            { keys: ["f/3"], duration: "q", midiValue: 53 }   // F (b7, forte tendenza a C)
        ] // end notesBass
    },

    {
        id: "walkingBass-C-Intermediate2",
        name: "Walking Bass DO (Intermedio 2 - Variazioni)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Accordi di settima (semibrevi, possiamo variare dopo)
            // Bar 1 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 2 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 3 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 4 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },

            // Bar 5 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 6 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 7 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 8 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },

            // Bar 9 (G7)
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] },
            // Bar 10 (F7)
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 11 (C7)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            // Bar 12 (G7) - Turnaround
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass Lines con più variazioni
            // Bar 1 (C7) - Pattern: 1 - crom_down_to_5 - 5 - b7
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["ab/2"], duration: "q", midiValue: 44 }, // Ab (crom down)
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G (target)
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb

            // Bar 2 (C7) - Pattern: 1 - 2 - crom_up_to_3 - 3
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["d/2"], duration: "q", midiValue: 38 },  // D
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, // Eb (crom up)
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E (target)

            // Bar 3 (C7) - Pattern: 5(low) - 6 - b7 - 1 (con ottavi)
            { keys: ["g/1"], duration: "q", midiValue: 31 },  // G (ottava bassa)
            { keys: ["a/1"], duration: "8", midiValue: 33 },  // A
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, // Bb
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["e/2"], duration: "q", midiValue: 40 }, // Pausa per completare la battuta se necessario (o altra nota) // Originale era r/4

            // Bar 4 (C7) - Enclosure semplice sulla 5a (G), poi conduce a F
            // G target: F#(sotto) - Ab(sopra) - G. Poi Bb per condurre a F.
            { keys: ["gb/2"], duration: "8", midiValue: 42 }, // F#
            { keys: ["ab/2"], duration: "8", midiValue: 44 }, // Ab
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G (target)
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb (conduce a F o A di F7)

            // Bar 5 (F7) - Pattern: 1 - crom_up_to_3 - 3 - 5
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["g#/2"], duration: "q", midiValue: 44 }, // G# (o Ab, crom up)
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A (target)
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C

            // Bar 6 (F7) - Pattern: 1 - b7(low) - 6(low) - 5(low) (linea discendente)
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, // Eb (b7)
            { keys: ["d/2"], duration: "q", midiValue: 38 },  // D (6)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C (5) -> conduce bene a C7

            // Bar 7 (C7) - Ritorno a C - Pattern: 1 - 5 - #5(crom) - 6 (conduce a G)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["ab/2"], duration: "q", midiValue: 44 }, // G# (Ab)
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A

            // Bar 8 (C7) - Pattern con ottavi: 1 - 2 - 3(8va) - eb(8va) - e(8va) (movimento bluesy)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C
            { keys: ["d/2"], duration: "q", midiValue: 38 },  // D
            { keys: ["e/2"], duration: "8", midiValue: 40 },  // E
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, // Eb
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E (risoluzione)

            // Bar 9 (G7) - Enclosure sulla 3a (B), poi b7
            // B target: Bb(sotto) - C#(sopra) - B. Poi F.
            { keys: ["bb/2"], duration: "8", midiValue: 46 }, // Bb
            { keys: ["db/3"], duration: "8", midiValue: 49 }, // C#
            { keys: ["b/2"], duration: "q", midiValue: 47 },  // B (target)
            { keys: ["f/3"], duration: "q", midiValue: 53 },  // F (b7)

            // Bar 10 (F7) - Pattern: 1 - 5 - 6 - b7 (movimento melodico verso l'alto)
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C
            { keys: ["d/3"], duration: "q", midiValue: 50 },  // D
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, // Eb

            // Bar 11 (C7) - Pattern classico discendente:
            { keys: ["c/3"], duration: "q", midiValue: 48 },  // C
            { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Bb
            { keys: ["a/2"], duration: "q", midiValue: 45 },  // A (o Ab per suono più blues)
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G

            // Bar 12 (G7) - Turnaround - Pattern: 1 - crom_up_to_b7 - b7 - 5 (conduce a C)
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G
            { keys: ["e/3"], duration: "q", midiValue: 52 },  // E (crom up)
            { keys: ["f/3"], duration: "q", midiValue: 53 },  // F (b7 target)
            { keys: ["d/3"], duration: "q", midiValue: 50 }   // D (5, conduce a C o G di C7)
        ] // end notesBass
    },
    // ============================================================================
    // === Esercizio WB-F-3 - Walking Bass Avanzato in FA (Progressione Varia) ===
    // ============================================================================
    // Tonalità: Fa. Progressione armonica più movimentata con II-V e alterazioni.
    // Mano sinistra: Walking bass complesso con crome, sincopi, cromatismi estesi.
    // Mano destra: Accordi (qui come semibrevi, ma pensati per comping ritmico).
    {
        id: "walkingBass-F-Advanced1",
        name: "Walking Bass FA (Avanzato 1 - Prog. Varia)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "F", // Un bemolle (Bb)
        timeSignature: "4/4",
        repetitions: 1, // Data la complessità, 1 ripetizione per iniziare

        notesTreble: [ // Mano Destra: Accordi (semibrevi per ora)
            // Bar 1 (Fmaj7: F-A-C-E)
            { keys: ["f/3", "a/3", "c/4", "e/4"], duration: "w", midiValues: [53, 57, 60, 64] },
            // Bar 2 (Bbm7: Bb-Db-F-Ab | Eb7: Eb-G-Bb-Db)
            { keys: ["bb/3", "db/4", "f/4", "ab/4"], duration: "h", midiValues: [58, 61, 65, 68] },
            { keys: ["eb/3", "g/3", "bb/3", "db/4"], duration: "h", midiValues: [51, 55, 58, 61] },
            // Bar 3 (Am7: A-C-E-G | D7: D-F#-A-C)
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "h", midiValues: [57, 60, 64, 67] },
            { keys: ["d/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [50, 54, 57, 60] }, // F# è Gb
            // Bar 4 (Gm7: G-Bb-D-F | C7: C-E-G-Bb)
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "h", midiValues: [55, 58, 62, 65] },
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48, 52, 55, 58] },

            // Bar 5 (F7: F-A-C-Eb) - Dominante per un feel più blues
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            // Bar 6 (Bb7: Bb-D-F-Ab)
            { keys: ["bb/2", "d/3", "f/3", "ab/3"], duration: "w", midiValues: [46, 50, 53, 56] },
            // Bar 7 (Bbm7: Bb-Db-F-Ab)
            { keys: ["bb/2", "db/3", "f/3", "ab/3"], duration: "w", midiValues: [46, 49, 53, 56] },
            // Bar 8 (Am7: A-C-E-G | Abm7: Ab-Cb-Eb-Gb) Cb è B, Gb è F#
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "h", midiValues: [45, 48, 52, 55] },
            { keys: ["ab/2", "b/2", "eb/3", "gb/3"], duration: "h", midiValues: [44, 47, 51, 54] },

            // Bar 9 (Gm7: G-Bb-D-F)
            { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "w", midiValues: [43, 46, 50, 53] },
            // Bar 10 (C7: C-E-G-Bb)
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] },
            // Bar 11 (Fmaj7: F-A-C-E | D7alt -> es. D-F#-Ab-C -> D-Gb-Ab-C)
            { keys: ["f/3", "a/3", "c/4", "e/4"], duration: "h", midiValues: [53, 57, 60, 64] },
            { keys: ["d/3", "gb/3", "ab/3", "c/4"], duration: "h", midiValues: [50, 54, 56, 60] }, // D7(b5,b9)
            // Bar 12 (Gm7: G-Bb-D-F | C7alt -> es. C-E-G#-Bb -> C-E-Ab-Bb)
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "h", midiValues: [55, 58, 62, 65] },
            { keys: ["c/3", "e/3", "ab/3", "bb/3"], duration: "h", midiValues: [48, 52, 56, 58] } // C7(#5) o C7(b13)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass Lines Avanzate
            // Bar 1 (Fmaj7) - Arpeggio ascendente con passaggio cromatico
            { keys: ["f/1"], duration: "q", midiValue: 29 },  // F
            { keys: ["a/1"], duration: "q", midiValue: 33 },  // A
            { keys: ["b/1"], duration: "8", midiValue: 35 },  // B (crom. a C)
            { keys: ["c/2"], duration: "8", midiValue: 36 },  // C
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E

            // Bar 2 (Bbm7 - Eb7) - Linea che connette i due accordi
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, // Bb (Bbm7)
            { keys: ["db/2"], duration: "q", midiValue: 37 }, // Db
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, // Eb (Eb7)
            { keys: ["g/2"], duration: "q", midiValue: 43 },  // G

            // Bar 3 (Am7 - D7)
            { keys: ["a/1"], duration: "q", midiValue: 33 },  // A (Am7)
            { keys: ["g/1"], duration: "8", midiValue: 31 },  // G (passaggio)
            { keys: ["gb/1"], duration: "8", midiValue: 30 }, // F# (D7)
            { keys: ["d/2"], duration: "q", midiValue: 38 },  // D (radice D7, ma F# è la 3a)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C (b7 di D7)

            // Bar 4 (Gm7 - C7) - Enclosure su G, poi approccio a C
            { keys: ["gb/1"], duration: "8", midiValue: 30 }, // F# (sotto G)
            { keys: ["ab/1"], duration: "8", midiValue: 32 }, // G# (sopra G)
            { keys: ["g/1"], duration: "q", midiValue: 31 },  // G (Gm7 target)
            { keys: ["b/1"], duration: "q", midiValue: 35 },  // B (app. crom. a C)

            // Bar 5 (F7) - Ritorno a F con movimento e ottavi
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C (da C7 precedente)
            { keys: ["a/1"], duration: "8", midiValue: 33 },  // A
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, // Bb (passaggio)
            { keys: ["a/1"], duration: "q", midiValue: 33 },  // A (terza di F7)
            { keys: ["f/1"], duration: "q", midiValue: 29 },  // F

            // Bar 6 (Bb7) - Linea melodica su Bb7
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, // Bb
            { keys: ["d/2"], duration: "q", midiValue: 38 },  // D
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["ab/2"], duration: "q", midiValue: 44 }, // Ab

            // Bar 7 (Bbm7) - Pattern discendente cromatico
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, // Bb
            { keys: ["a/1"], duration: "8", midiValue: 33 },  // A (crom)
            { keys: ["ab/1"], duration: "8", midiValue: 32 }, // Ab
            { keys: ["g/1"], duration: "q", midiValue: 31 },  // G (crom)
            { keys: ["gb/1"], duration: "q", midiValue: 30 }, // F# (conduce ad A di Am7 o F di F)

            // Bar 8 (Am7 - Abm7) - Movimento per semitoni sulle toniche
            { keys: ["a/1"], duration: "q", midiValue: 33 },  // A (Am7)
            { keys: ["e/2"], duration: "q", midiValue: 40 },  // E (quinta di A)
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, // Ab (Abm7)
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, // Eb (quinta di Ab)

            // Bar 9 (Gm7) - Arpeggio spezzato con ritmo
            { keys: ["g/1"], duration: "q.", midiValue: 31 }, // G.
            { keys: ["d/2"], duration: "8", midiValue: 38 },  // D
            { keys: ["f/2"], duration: "q", midiValue: 41 },  // F
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, // Bb (radice bassa)

            // Bar 10 (C7) - Linea ascendente verso C, con cromatismo
            { keys: ["g/1"], duration: "q", midiValue: 31 },  // G (quinta di C)
            { keys: ["a/1"], duration: "q", midiValue: 33 },  // A (sesta)
            { keys: ["b/1"], duration: "q", midiValue: 35 },  // B (app. crom.)
            { keys: ["c/2"], duration: "q", midiValue: 36 },  // C

            // Bar 11 (Fmaj7 - D7alt) - Linea che collega F a D
            { keys: ["f/1"], duration: "q", midiValue: 29 },  // F (Fmaj7)
            { keys: ["e/1"], duration: "8", midiValue: 28 },  // E (app. crom a D o F)
            { keys: ["eb/1"], duration: "8", midiValue: 27 }, // Eb (app. crom a D)
            { keys: ["d/1"], duration: "q", midiValue: 26 },  // D (D7alt)
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, // Ab (b5 di D7alt)

            // Bar 12 (Gm7 - C7alt) - Turnaround con movimento e tensione
            { keys: ["g/1"], duration: "q", midiValue: 31 },  // G (Gm7)
            { keys: ["f/1"], duration: "8", midiValue: 29 },  // F (b7 di G)
            { keys: ["e/1"], duration: "8", midiValue: 28 },  // E (terza di C7alt)
            { keys: ["eb/1"], duration: "q", midiValue: 27 }, // Eb (o D#, #9 di C7alt o b3 di C)
            { keys: ["d/1"], duration: "q", midiValue: 26 }   // D (conduce a G o C)
        ] // end notesBass
    },
   /**
 * js/exercises/walking_bass_lines.js
 * Esercizi per lo studio delle Walking Bass Lines nel Blues.
 * Esercizio WB-C-1: Walking Bass Intermedio in DO.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */


    // ... (gli esercizi WB-C-1, WB-C-Intermediate2, WB-F-Advanced1, WB-Bb-Advanced2 rimangono qui come prima) ...
    // =======================================================================
    // === Esercizio WB-C-1 - Walking Bass Intermedio in DO ===
    // =======================================================================
    {
        id: "walkingBass-C-Intermediate1",
        name: "Walking Bass DO (Intermedio 1)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] }, { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }, { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }
        ],
        notesBass: [
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 }
        ]
    },
    {
        id: "walkingBass-C-Intermediate2",
        name: "Walking Bass DO (Intermedio 2 - Variazioni)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,
        notesTreble: [
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] }, { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] },
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }, { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }
        ],
        notesBass: [
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["a/1"], duration: "8", midiValue: 33 }, { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["gb/2"], duration: "8", midiValue: 42 }, { keys: ["ab/2"], duration: "8", midiValue: 44 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g#/2"], duration: "q", midiValue: 44 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["e/2"], duration: "8", midiValue: 40 }, { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["bb/2"], duration: "8", midiValue: 46 }, { keys: ["db/3"], duration: "8", midiValue: 49 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "q", midiValue: 50 }
        ]
    },
    {
        id: "walkingBass-F-Advanced1",
        name: "Walking Bass FA (Avanzato 1 - Prog. Varia)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "F",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["f/3", "a/3", "c/4", "e/4"], duration: "w", midiValues: [53, 57, 60, 64] },
            { keys: ["bb/3", "db/4", "f/4", "ab/4"], duration: "h", midiValues: [58, 61, 65, 68] }, { keys: ["eb/3", "g/3", "bb/3", "db/4"], duration: "h", midiValues: [51, 55, 58, 61] },
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "h", midiValues: [57, 60, 64, 67] }, { keys: ["d/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [50, 54, 57, 60] },
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "h", midiValues: [55, 58, 62, 65] }, { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48, 52, 55, 58] },
            { keys: ["f/3", "a/3", "c/4", "eb/4"], duration: "w", midiValues: [53, 57, 60, 63] },
            { keys: ["bb/2", "d/3", "f/3", "ab/3"], duration: "w", midiValues: [46, 50, 53, 56] },
            { keys: ["bb/2", "db/3", "f/3", "ab/3"], duration: "w", midiValues: [46, 49, 53, 56] },
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "h", midiValues: [45, 48, 52, 55] }, { keys: ["ab/2", "b/2", "eb/3", "gb/3"], duration: "h", midiValues: [44, 47, 51, 54] },
            { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "w", midiValues: [43, 46, 50, 53] },
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 52, 55, 58] },
            { keys: ["f/3", "a/3", "c/4", "e/4"], duration: "h", midiValues: [53, 57, 60, 64] }, { keys: ["d/3", "gb/3", "ab/3", "c/4"], duration: "h", midiValues: [50, 54, 56, 60] },
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "h", midiValues: [55, 58, 62, 65] }, { keys: ["c/3", "e/3", "ab/3", "bb/3"], duration: "h", midiValues: [48, 52, 56, 58] }
        ],
        notesBass: [
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["b/1"], duration: "8", midiValue: 35 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["db/2"], duration: "q", midiValue: 37 }, { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["g/1"], duration: "8", midiValue: 31 }, { keys: ["gb/1"], duration: "8", midiValue: 30 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["gb/1"], duration: "8", midiValue: 30 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "8", midiValue: 33 }, { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["ab/2"], duration: "q", midiValue: 44 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "8", midiValue: 33 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["gb/1"], duration: "q", midiValue: 30 },
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["ab/1"], duration: "q", midiValue: 32 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },
            { keys: ["g/1"], duration: "q.", midiValue: 31 }, { keys: ["d/2"], duration: "8", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["bb/1"], duration: "q", midiValue: 34 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["e/1"], duration: "8", midiValue: 28 }, { keys: ["eb/1"], duration: "8", midiValue: 27 }, { keys: ["d/1"], duration: "q", midiValue: 26 }, { keys: ["ab/1"], duration: "q", midiValue: 32 },
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "8", midiValue: 29 }, { keys: ["e/1"], duration: "8", midiValue: 28 }, { keys: ["eb/1"], duration: "q", midiValue: 27 }, { keys: ["d/1"], duration: "q", midiValue: 26 }
        ]
    },
    {
        id: "walkingBass-Bb-Advanced2",
        name: "Walking Bass SIb (Avanzato 2 - Passaggi)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "Bb",
        timeSignature: "4/4",
        repetitions: 1,
        notesTreble: [
            { keys: ["bb/2", "d/3", "f/3", "ab/3"], duration: "w", midiValues: [46, 50, 53, 56] },
            { keys: ["eb/3", "g/3", "bb/3", "db/4"], duration: "w", midiValues: [51, 55, 58, 61] },
            { keys: ["bb/2", "d/3", "f/3", "ab/3"], duration: "w", midiValues: [46, 50, 53, 56] },
            { keys: ["b/2", "d/3", "f/3", "ab/3"], duration: "w", midiValues: [47, 50, 53, 56] },
            { keys: ["c/3", "eb/3", "g/3", "bb/3"], duration: "w", midiValues: [48, 51, 55, 58] },
            { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "w", midiValues: [41, 45, 48, 51] },
            { keys: ["bb/2", "d/3", "f/3", "ab/3"], duration: "h", midiValues: [46, 50, 53, 56] }, { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "h", midiValues: [43, 46, 50, 53] },
            { keys: ["c/3", "eb/3", "g/3", "bb/3"], duration: "h", midiValues: [48, 51, 55, 58] }, { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "h", midiValues: [41, 45, 48, 51] },
            { keys: ["d/3", "f/3", "ab/3", "c/4"], duration: "h", midiValues: [50, 53, 56, 60] }, { keys: ["g/2", "b/2", "db/3", "f/3"], duration: "h", midiValues: [43, 47, 49, 53] },
            { keys: ["c/3", "eb/3", "g/3", "bb/3"], duration: "q", midiValues: [48, 51, 55, 58] }, { keys: ["r/4"], duration: "q"}, { keys: ["f/2", "bb/2", "c/3", "eb/3"], duration: "q", midiValues: [41, 46, 48, 51] }, { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "q", midiValues: [41, 45, 48, 51] },
            { keys: ["bb/2", "d/3", "f/3", "ab/3"], duration: "q", midiValues: [46, 50, 53, 56] }, { keys: ["r/4"], duration: "q"}, { keys: ["d/3", "gb/3", "ab/3", "c/4"], duration: "q", midiValues: [50, 54, 56, 60] }, { keys: ["g/2", "bb/2", "d/3", "f/3"], duration: "q", midiValues: [43, 46, 50, 53] },
            { keys: ["c/3", "e/3", "ab/3", "bb/3"], duration: "h", midiValues: [48, 52, 56, 58] }, { keys: ["f/2", "a/2", "db/3", "eb/3"], duration: "h", midiValues: [41, 45, 49, 51] }
        ],
        notesBass: [
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["db/2"], duration: "8", midiValue: 37 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["db/3"], duration: "q", midiValue: 49 },
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, { keys: ["a/1"], duration: "8", midiValue: 33 }, { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["ab/2"], duration: "q", midiValue: 44 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["g/1"], duration: "8", midiValue: 31 }, { keys: ["ab/1"], duration: "8", midiValue: 32 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["db/2"], duration: "q", midiValue: 37 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            { keys: ["bb/1"], duration: "8", midiValue: 34 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["d/2"], duration: "8", midiValue: 38 }, { keys: ["ab/2"], duration: "8", midiValue: 44 },{ keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["bb/1"], duration: "q", midiValue: 34 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, { keys: ["db/2"], duration: "q", midiValue: 37 }
        ]
    },
    {
        id: "walkingBass-E-BirdBlues-Rev1",
        name: "Walking Bass MI (Bird Blues - Revised)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "E", // Quattro diesis (F#, C#, G#, D#)
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Accordi (base per la struttura) - TRASPOSTA DI UN'OTTAVA IN ALTO
            // Bar 1 (Emaj7: E-G#-B-D#)
            { keys: ["e/4", "ab/4", "b/4", "eb/5"], duration: "w", midiValues: [64, 68, 71, 75] },
            // Bar 2 (F#m7: F#-A-C#-E | B7: B-D#-F#-A)
            { keys: ["gb/4", "a/4", "db/5", "e/5"], duration: "h", midiValues: [66, 69, 73, 76] },
            { keys: ["b/3", "eb/4", "gb/4", "a/4"], duration: "h", midiValues: [59, 63, 66, 69] },
            // Bar 3 (Em7: E-G-B-D | A7: A-C#-E-G)
            { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "h", midiValues: [64, 67, 71, 74] },
            { keys: ["a/3", "db/4", "e/4", "g/4"], duration: "h", midiValues: [57, 61, 64, 67] },
            // Bar 4 (Dmaj7: D-F#-A-C# | G7: G-B-D-F)
            { keys: ["d/4", "gb/4", "a/4", "db/5"], duration: "h", midiValues: [62, 66, 69, 73] },
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "h", midiValues: [55, 59, 62, 65] },

            // Bar 5 (C#m7: C#-E-G#-B | F#7: F#-A#-C#-E)
            { keys: ["db/4", "e/4", "ab/4", "b/4"], duration: "h", midiValues: [61, 64, 68, 71] },
            { keys: ["gb/3", "bb/3", "db/4", "e/4"], duration: "h", midiValues: [54, 58, 61, 64] },
            // Bar 6 (B7: B-D#-F#-A)
            { keys: ["b/3", "eb/4", "gb/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] },
            // Bar 7 (Amaj7: A-C#-E-G# | D7alt: D-F#-Ab-C)
            { keys: ["a/3", "db/4", "e/4", "ab/4"], duration: "h", midiValues: [57, 61, 64, 68] },
            { keys: ["d/4", "gb/4", "ab/4", "c/5"], duration: "h", midiValues: [62, 66, 68, 72] },
            // Bar 8 (G#m7: G#-B-D#-F# | C#7alt: C#-E#(F)-G#-B)
            { keys: ["ab/3", "b/3", "eb/4", "gb/4"], duration: "h", midiValues: [56, 59, 63, 66] },
            { keys: ["db/4", "f/4", "ab/4", "b/4"], duration: "h", midiValues: [61, 65, 68, 71] },

            // Bar 9 (F#m7: F#-A-C#-E)
            { keys: ["gb/3", "a/3", "db/4", "e/4"], duration: "w", midiValues: [54, 57, 61, 64] },
            // Bar 10 (B7sus4: B-E-F#-A | B7: B-D#-F#-A)
            { keys: ["b/3", "e/4", "gb/4", "a/4"], duration: "h", midiValues: [59, 64, 66, 69] },
            { keys: ["b/3", "eb/4", "gb/4", "a/4"], duration: "h", midiValues: [59, 63, 66, 69] },
            // Bar 11 (Emaj7 | C#7alt: C#-F-G#-B)
            { keys: ["e/4", "ab/4", "b/4", "eb/5"], duration: "h", midiValues: [64, 68, 71, 75] },
            { keys: ["db/4", "f/4", "ab/4", "b/4"], duration: "h", midiValues: [61, 65, 68, 71] },
            // Bar 12 (F#m7 | B7alt: B-D#-E#-A -> B-D#-F-A)
            { keys: ["gb/4", "a/4", "db/5", "e/5"], duration: "h", midiValues: [66, 69, 73, 76] },
            { keys: ["b/3", "eb/4", "f/4", "a/4"], duration: "h", midiValues: [59, 63, 65, 69] }
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass "Bird Blues" in E - Registro Rivisto (NON TRASPOSTO QUESTA VOLTA)
            // Bar 1 (Emaj7) - Linea ascendente melodica
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E
            { keys: ["ab/2"], duration: "q", midiValue: 44 },  // G# (3a)
            { keys: ["b/2"], duration: "q", midiValue: 47 },   // B (5a)
            { keys: ["eb/3"], duration: "q", midiValue: 51 },  // D# (7M)

            // Bar 2 (F#m7 - B7) - Connessione II-V
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (F#m7)
            { keys: ["e/3"], duration: "q", midiValue: 52 },   // E (b7 di F#m7)
            { keys: ["eb/3"], duration: "q", midiValue: 51 },  // D# (3a di B7)
            { keys: ["b/2"], duration: "q", midiValue: 47 },   // B (B7)

            // Bar 3 (Em7 - A7) - Altro II-V
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E (Em7)
            { keys: ["d/3"], duration: "q", midiValue: 50 },   // D (b7 di Em7)
            { keys: ["db/3"], duration: "q", midiValue: 49 },  // C# (3a di A7)
            { keys: ["a/2"], duration: "q", midiValue: 45 },   // A (A7)

            // Bar 4 (Dmaj7 - G7)
            { keys: ["d/2"], duration: "q", midiValue: 38 },   // D (Dmaj7)
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (3a di Dmaj7)
            { keys: ["b/2"], duration: "q", midiValue: 47 },   // B (3a di G7)
            { keys: ["g/2"], duration: "q", midiValue: 43 },   // G (G7)

            // Bar 5 (C#m7 - F#7)
            { keys: ["db/2"], duration: "q", midiValue: 37 },  // C# (C#m7)
            { keys: ["b/2"], duration: "q", midiValue: 47 },   // B (b7 di C#m7)
            { keys: ["bb/2"], duration: "q", midiValue: 46 },  // A# (3a di F#7)
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (F#7)

            // Bar 6 (B7) - Linea discendente su B7
            { keys: ["b/2"], duration: "q", midiValue: 47 },   // B
            { keys: ["a/2"], duration: "q", midiValue: 45 },   // A (b7)
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (5a)
            { keys: ["eb/2"], duration: "q", midiValue: 39 },  // D# (3a)

            // Bar 7 (Amaj7 - D7alt)
            { keys: ["a/1"], duration: "q", midiValue: 33 },   // A (Amaj7, radice più bassa ma accettabile)
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E (5a di A)
            { keys: ["d/2"], duration: "q", midiValue: 38 },   // D (D7alt)
            { keys: ["ab/2"], duration: "q", midiValue: 44 },  // G# (b5 di D7alt)

            // Bar 8 (G#m7 - C#7alt)
            { keys: ["ab/1"], duration: "q", midiValue: 32 },  // G# (G#m7, radice più bassa ma accettabile)
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (b7 di G#m7)
            { keys: ["f/2"], duration: "q", midiValue: 41 },   // E# (F nat, 3a di C#7alt)
            { keys: ["db/2"], duration: "q", midiValue: 37 },  // C# (C#7alt)

            // Bar 9 (F#m7) - Arpeggio con crome
            { keys: ["gb/1"], duration: "q", midiValue: 30 },  // F# (radice più bassa ma accettabile)
            { keys: ["a/1"], duration: "8", midiValue: 33 },   // A
            { keys: ["db/2"], duration: "8", midiValue: 37 },  // C#
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F#

            // Bar 10 (B7sus4 - B7) - Movimento sulla sospensione
            { keys: ["b/1"], duration: "q", midiValue: 35 },   // B
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E (nota sus)
            { keys: ["eb/2"], duration: "q", midiValue: 39 },  // D# (risoluzione a 3a di B7)
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (5a)

            // Bar 11 (Emaj7 - C#7alt) - Turnaround
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E (Emaj7)
            { keys: ["b/2"], duration: "q", midiValue: 47 },   // B (5a di E)
            { keys: ["db/2"], duration: "q", midiValue: 37 },  // C# (C#7alt)
            { keys: ["g/2"], duration: "q", midiValue: 43 },   // G (b5 di C#7alt)

            // Bar 12 (F#m7 - B7alt) - Turnaround finale
            { keys: ["gb/2"], duration: "q", midiValue: 42 },  // F# (F#m7)
            { keys: ["e/2"], duration: "q", midiValue: 40 },   // E (b7 di F#m7)
            { keys: ["b/1"], duration: "q", midiValue: 35 },   // B (B7alt)
            { keys: ["f/2"], duration: "q", midiValue: 41 }    // E# (F nat, #11 o b5 di B7alt, conduce a E)
        ] // end notesBass
    },
    // =====================================================================================================
    // === Esercizio WB-E-5-Rev2 - Walking Bass Avanzato in MI (Bird Blues - Melodia e Walking Nuovi) ===
    // =====================================================================================================
    // Tonalità: Mi. Progressione "Bird Blues".
    // Mano sinistra: Nuova walking bass line, registro originale.
    // Mano destra: Nuova melodia/accordi, registro originale.
    {
        id: "walkingBass-E-BirdBlues-Rev2",
        name: "Walking Bass MI (Bird Blues - Nuova Melodia/Walking)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "E",
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Nuova melodia/accordi in registro standard
            // Bar 1 (Emaj7) - Melodia semplice su Emaj7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 2 (F#m7 - B7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, // Su F#m7
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // Su B7
            // Bar 3 (Em7 - A7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Su Em7
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // Su A7
            // Bar 4 (Dmaj7 - G7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // Su Dmaj7
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, // Su G7
            // Bar 5 (C#m7 - F#7)
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // Su C#m7
            { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, // Su F#7 (A# è Bb)
            // Bar 6 (B7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Bar 7 (Amaj7 - D7alt)
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // Su Amaj7
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, // Su D7alt
            // Bar 8 (G#m7 - C#7alt)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // Su G#m7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["f/3"], duration: "q", midiValue: 53 },  // Su C#7alt (E# è F)
            // Bar 9 (F#m7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["db/3"], duration: "q", midiValue: 49 },
            // Bar 10 (B7sus4 - B7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // Su B7sus
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, // Su B7
            // Bar 11 (Emaj7 - C#7alt)
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // Su Emaj7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "q", midiValue: 55 },  // Su C#7alt (G è b5 di C#)
            // Bar 12 (F#m7 - B7alt)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, // Su F#m7
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["f/3"], duration: "q", midiValue: 53 }   // Su B7alt (F è #11 di B)
        ],
        notesBass: [ // Mano Sinistra: Nuova Walking Bass Line in E (registro originale)
            // Bar 1 (Emaj7)
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            // Bar 2 (F#m7 - B7)
            { keys: ["gb/2"], duration: "q", midiValue: 42 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["eb/3"], duration: "q", midiValue: 51 },
            // Bar 3 (Em7 - A7)
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["db/3"], duration: "q", midiValue: 49 },
            // Bar 4 (Dmaj7 - G7)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 5 (C#m7 - F#7)
            { keys: ["db/2"], duration: "q", midiValue: 37 }, { keys: ["ab/2"], duration: "q", midiValue: 44 },
            { keys: ["gb/2"], duration: "q", midiValue: 42 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            // Bar 6 (B7)
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["gb/2"], duration: "q", midiValue: 42 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },
            // Bar 7 (Amaj7 - D7alt)
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Bar 8 (G#m7 - C#7alt)
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },
            { keys: ["db/2"], duration: "q", midiValue: 37 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Bar 9 (F#m7)
            { keys: ["gb/1"], duration: "q", midiValue: 30 }, { keys: ["db/2"], duration: "q", midiValue: 37 },
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Bar 10 (B7sus4 - B7)
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, // Approccio a B7
            { keys: ["gb/1"], duration: "q", midiValue: 30 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },
            // Bar 11 (Emaj7 - C#7alt)
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["ab/2"], duration: "q", midiValue: 44 },
            { keys: ["db/2"], duration: "q", midiValue: 37 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Bar 12 (F#m7 - B7alt)
            { keys: ["gb/1"], duration: "q", midiValue: 30 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["f/2"], duration: "q", midiValue: 41 } // E# è F nat
        ]
    }
];








// Applica la trasformazione a tutti gli esercizi
const walkingBassExercises = walkingBassExercisesOriginal.map(exercise => {
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
    window.exerciseData.walking_bass = walkingBassExercises;
} else {
    window.exerciseData = {
        walking_bass: walkingBassExercises
    };
}