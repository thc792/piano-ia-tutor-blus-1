/**
 * js/exercises/blues_phrasing_harmony.js
 * Esercizi per Fraseggio Blues e Consapevolezza Armonica.
 * Esercizio PH-C-1: Enfatizzare la Blue Note (F# in Do) con Approcci Cromatici.
 *
 * Piano Blues Teacher
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Array che conterrà tutti gli esercizi di questa categoria
const bluesPhrasingHarmonyExercises = [
    // =====================================================================================
    // === Esercizio PH-C-1 - Enfatizzare Blue Note F# (Do) con Approcci Cromatici ===
    // =====================================================================================
    // Tonalità: Do. Focus sull'uso espressivo della F# (blue note) con approcci da F e G.
    // Nuova progressione armonica.
    // Mano destra: Frasi melodiche.
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-C-BlueNoteFsharp",
        name: "Blue Note F# (Do) - Approcci",
        category: "phrasing_harmony", // Nuova categoria
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Frasi con F#
            // Bar 1 (C7) - Approccio da F a F#, poi discesa blues
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // F
            { keys: ["gb/4"], duration: "q.", midiValue: 66 }, // F# (Blue Note, tenuta)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Eb
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // C

            // Bar 2 (F7) - Approccio da G a F# (relativa a C), poi frase su F7
            // Qui F# è la #11 di F7, un colore interessante.
            { keys: ["g/4"], duration: "8", midiValue: 67 },   // G
            { keys: ["gb/4"], duration: "q.", midiValue: 66 }, // F# (tenuta)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Eb (b7 di F7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // C (5 di F7)

            // Bar 3 (C7) - F# come nota di passaggio blues
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },  // F#
            { keys: ["g/4"], duration: "q", midiValue: 67 },

            // Bar 4 (C7) - Risoluzione e pausa
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["r/4"], duration: "h" },

            // Bar 5 (F7) - Lick su F7 che potrebbe incorporare la #11 (B naturale) o blue note di F (B)
            // Per ora, un lick pentatonico minore di F per contrasto
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["ab/4"], duration: "q", midiValue: 68 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },

            // Bar 6 (F#dim7) - Arpeggio o nota che enfatizza F#dim7 (F#, A, C, Eb)
            { keys: ["gb/4"], duration: "q", midiValue: 66 },  // F#
            { keys: ["a/4"], duration: "q", midiValue: 69 },   // A
            { keys: ["c/5"], duration: "q", midiValue: 72 },   // C
            { keys: ["eb/5"], duration: "q", midiValue: 75 },  // Eb

            // Bar 7 (C7/G) - Ritorno a C, magari con F#
            { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 }, // F#
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },

            // Bar 8 (A7) - Frase che prepara Dm7, usando note di A7 (A, C#, E, G)
            { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },   // G (b7 di A7)
            { keys: ["e/4"], duration: "h", midiValue: 64 },   // E (5 di A7)

            // Bar 9 (Dm7) - Frase su Dm7 (D, F, A, C)
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["a/4"], duration: "h", midiValue: 69 },

            // Bar 10 (G7) - Frase su G7, magari con F# come #11 di G o blue note di C
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["f/4"], duration: "8", midiValue: 65 },   // F (b7 di G)
            { keys: ["gb/4"], duration: "q", midiValue: 66 },  // F#
            { keys: ["b/3"], duration: "h", midiValue: 59 },   // B (3 di G)

            // Bar 11 (C7 - Eb7) - Frase che si adatta al cambio cromatico
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // Su C7
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },  // F# (su Eb7 diventa la 9a aumentata, interessante!)
            { keys: ["db/4"], duration: "q", midiValue: 61 },  // Db (b7 di Eb7)

            // Bar 12 (Dm7 - G7) - Turnaround finale
            { keys: ["a/4"], duration: "q", midiValue: 69 },   // Su Dm7 (5a)
            { keys: ["f/4"], duration: "q", midiValue: 65 },   // Su G7 (b7)
            { keys: ["d/4"], duration: "q", midiValue: 62 },   // Su G7 (5a)
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // Risolve a C (implicito)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della nuova progressione
            // Bar 1 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 2 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (F#dim7: F#-A-C-Eb)
            { keys: ["gb/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [30, 33, 36, 39] },
            // Bar 7 (C7/G: G-C-E-Bb)
            { keys: ["g/1", "c/2", "e/2", "bb/2"], duration: "w", midiValues: [31, 36, 40, 46] },
            // Bar 8 (A7: A-C#-E-G)
            { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33, 37, 40, 43] },

            // Bar 9 (Dm7: D-F-A-C)
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "w", midiValues: [38, 41, 45, 48] },
            // Bar 10 (G7: G-B-D-F)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 11 (C7 | Eb7: Eb-G-Bb-Db)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36, 40, 43, 46] },
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "h", midiValues: [39, 43, 46, 49] },
            // Bar 12 (Dm7 | G7)
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "h", midiValues: [38, 41, 45, 48] },
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "h", midiValues: [31, 35, 38, 41] }
        ] // end notesBass
    },
      // =====================================================================================
    // === Esercizio PH-F-2 - Simulazione Bending b3->3 (in Fa) ===
    // =====================================================================================
    // Tonalità: Fa. Focus sulla simulazione del bending b3 (es. Ab) -> 3 (es. A) su accordi dominanti.
    // Nuova progressione armonica in Fa.
    // Mano destra: Frasi melodiche con "bending simulato".
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-F-Bend-b3to3",
        name: "Simulazione Bending b3-3 (Fa)",
        category: "phrasing_harmony",
        staveLayout: "grand",
        keySignature: "F", // Un bemolle (Bb)
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Frasi con "bending" b3->3
            // Su F7: b3 è Ab, 3 è A
            // Bar 1 (F7) - "Bend" Ab -> A
            { keys: ["ab/3"], duration: "8", midiValue: 56 },  // Ab (b3)
            { keys: ["a/3"], duration: "q.", midiValue: 57 }, // A (3, tenuta)
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // F
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // C

            // Su Bb7: b3 è Db, 3 è D
            // Bar 2 (Bb7) - "Bend" Db -> D
            { keys: ["db/4"], duration: "8", midiValue: 61 },  // Db (b3)
            { keys: ["d/4"], duration: "q.", midiValue: 62 },  // D (3, tenuta)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // F

            // Bar 3 (F7) - Altra frase con "bend" Ab -> A
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["ab/3"], duration: "8", midiValue: 56 },
            { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["f/3"], duration: "h", midiValue: 53 },

            // Su C7: b3 è Eb, 3 è E
            // Bar 4 (C7) - "Bend" Eb -> E
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Eb (b3)
            { keys: ["e/4"], duration: "q.", midiValue: 64 },  // E (3, tenuta)
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // C
            { keys: ["g/3"], duration: "q", midiValue: 55 },   // G

            // Bar 5 (F7) - Ritorno al "bend" di F7
            { keys: ["f/4"], duration: "q", midiValue: 65 },   // F (ottava sopra)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Eb (b7)
            { keys: ["ab/3"], duration: "8", midiValue: 56 },
            { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["f/3"], duration: "q", midiValue: 53 },

            // Bar 6 (Bb7) - "Bend" Db -> D, frase più estesa
            { keys: ["db/4"], duration: "8", midiValue: 61 },
            { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 },   // F (5 di Bb)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Eb (4 di Bb)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },

            // Bar 7 (F7 | D7alt) - "Bend" su F7, poi transizione
            // Su D7alt: b3 è F, 3 è F#
            { keys: ["ab/3"], duration: "8", midiValue: 56 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, // Su F7
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["f/3"], duration: "8", midiValue: 53 },   // F (b3 di D7alt)
            { keys: ["gb/3"], duration: "q.", midiValue: 54 }, // F# (3 di D7alt)

            // Bar 8 (Gm7 | C7) - Frase sul ii-V
            // Su C7: "Bend" Eb -> E
            { keys: ["g/3"], duration: "q", midiValue: 55 },   // Su Gm7
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Su C7
            { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },

            // Bar 9 (Am7 | D7alt) - Frase sul ii-V (relativo a Gm)
            // Su D7alt: "Bend" F -> F#
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // Su Am7
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f/3"], duration: "8", midiValue: 53 },   // Su D7alt
            { keys: ["gb/3"], duration: "8", midiValue: 54 },
            { keys: ["d/3"], duration: "q", midiValue: 50 },

            // Bar 10 (Gm7 | Gb7)
            // Su Gb7: b3 è Bbb (A nat), 3 è Bb
            { keys: ["g/3"], duration: "q", midiValue: 55 },   // Su Gm7
            { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["a/3"], duration: "8", midiValue: 57 },   // Su Gb7 (Bbb)
            { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Bb (3 di Gb)
            { keys: ["gb/3"], duration: "q", midiValue: 54 },  // Gb

            // Bar 11 (F7 | Ab7) - "Bend" su F7, poi su Ab7
            // Su Ab7: b3 è Cb (B nat), 3 è C nat
            { keys: ["ab/3"], duration: "8", midiValue: 56 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, // Su F7
            { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["b/3"], duration: "8", midiValue: 59 },   // Su Ab7 (Cb)
            { keys: ["c/4"], duration: "q.", midiValue: 60 },  // C (3 di Ab)

            // Bar 12 (Gm7 | C7) - Turnaround con "bend" finale su C7
            { keys: ["d/4"], duration: "q", midiValue: 62 },   // Su Gm7
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Su C7
            { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },   // Risolve a G (5 di C, o tonica di G)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della nuova progressione in Fa
            // Bar 1 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 2 (Bb7)
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
            // Bar 3 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 6 (Bb7)
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
            // Bar 7 (F7 | D7alt: D-F#-Ab-C)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29, 33, 36, 39] },
            { keys: ["d/2", "gb/2", "ab/2", "c/3"], duration: "h", midiValues: [38, 42, 44, 48] },
            // Bar 8 (Gm7 | C7)
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "h", midiValues: [31, 34, 38, 41] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36, 40, 43, 46] },

            // Bar 9 (Am7 | D7alt)
            { keys: ["a/1", "c/2", "e/2", "g/2"], duration: "h", midiValues: [33, 36, 40, 43] },
            { keys: ["d/2", "gb/2", "ab/2", "c/3"], duration: "h", midiValues: [38, 42, 44, 48] },
            // Bar 10 (Gm7 | Gb7: Gb-Bb-Db-Fb(E))
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "h", midiValues: [31, 34, 38, 41] },
            { keys: ["gb/1", "bb/1", "db/2", "e/2"], duration: "h", midiValues: [30, 34, 37, 40] }, // Fb è E nat
            // Bar 11 (F7 | Ab7: Ab-C-Eb-Gb)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29, 33, 36, 39] },
            { keys: ["ab/1", "c/2", "eb/2", "gb/2"], duration: "h", midiValues: [32, 36, 39, 42] },
            // Bar 12 (Gm7 | C7)
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "h", midiValues: [31, 34, 38, 41] },
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36, 40, 43, 46] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio PH-G-3 - Combinazione Blue Note (#4) e Bend b3->3 (in Sol) ===
    // =====================================================================================
    // Tonalità: Sol. Combina l'uso della Blue Note C# (rispetto a G) e il "bend" b3->3.
    // Nuova progressione armonica in Sol.
    // Mano destra: Frasi melodiche combinate.
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-G-CombinedBlueNoteBend",
        name: "Blue Note & Bend b3-3 (Sol)",
        category: "phrasing_harmony",
        staveLayout: "grand",
        keySignature: "G", // Un diesis (F#)
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Frasi combinate
            // Su G7: b3 è Bb, 3 è B. Blue note #4/b5 è C# (Db).
            // Bar 1 (G7) - Bend Bb->B, poi tocca C#
            { keys: ["bb/3"], duration: "8", midiValue: 58 },  // Bb (b3)
            { keys: ["b/3"], duration: "q.", midiValue: 59 },  // B (3)
            { keys: ["db/4"], duration: "q", midiValue: 61 },  // C# (Blue Note)
            { keys: ["g/3"], duration: "q", midiValue: 55 },   // G

            // Bar 2 (G7) - Approccio cromatico a C#, poi discesa blues
            { keys: ["c/4"], duration: "8", midiValue: 60 },   // C
            { keys: ["db/4"], duration: "q.", midiValue: 61 }, // C#
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb
            { keys: ["g/3"], duration: "q", midiValue: 55 },   // G

            // Su C7: b3 è Eb, 3 è E. Blue note (relativa a C) è F# (Gb).
            // Bar 3 (C7) - Bend Eb->E, poi tocca F#
            { keys: ["eb/4"], duration: "8", midiValue: 63 },  // Eb (b3)
            { keys: ["e/4"], duration: "q.", midiValue: 64 },  // E (3)
            { keys: ["gb/4"], duration: "q", midiValue: 66 },  // F# (Blue Note di C)
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // C

            // Bar 4 (C7) - Frase con F# e ritorno a note di C7
            { keys: ["g/4"], duration: "q", midiValue: 67 },   // G (5 di C)
            { keys: ["gb/4"], duration: "8", midiValue: 66 },  // F#
            { keys: ["e/4"], duration: "8", midiValue: 64 },   // E (3 di C)
            { keys: ["c/4"], duration: "h", midiValue: 60 },   // C

            // Bar 5 (G7) - Ritorno a G7, combinando C# e bend Bb->B
            { keys: ["d/4"], duration: "q", midiValue: 62 },   // D (5 di G)
            { keys: ["db/4"], duration: "q", midiValue: 61 },  // C# (Blue Note)
            { keys: ["bb/3"], duration: "8", midiValue: 58 },
            { keys: ["b/3"], duration: "8", midiValue: 59 },
            { keys: ["g/3"], duration: "q", midiValue: 55 },

            // Su D7alt: b3 è F, 3 è F#. Blue note (relativa a D) è G# (Ab).
            // Bar 6 (D7alt) - Bend F->F#, poi tocca G#
            { keys: ["f/3"], duration: "8", midiValue: 53 },   // F (b3)
            { keys: ["gb/3"], duration: "q.", midiValue: 54 }, // F# (3)
            { keys: ["ab/3"], duration: "q", midiValue: 56 },  // G# (Blue Note di D)
            { keys: ["d/3"], duration: "q", midiValue: 50 },   // D

            // Bar 7 (G7 | E7alt)
            // Su E7alt: b3 è G, 3 è G#. Blue note (relativa a E) è A# (Bb).
            { keys: ["g/3"], duration: "q", midiValue: 55 },   // Su G7
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 },   // Su E7alt (b3)
            { keys: ["ab/3"], duration: "q.", midiValue: 56 }, // G# (3)
            // { keys: ["bb/3"], duration: "q", midiValue: 58 }, // A# (Blue Note di E) - Opzionale

            // Bar 8 (Am7 | D7) - ii-V, frase con bend su D7
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // Su Am7
            { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f/3"], duration: "8", midiValue: 53 },   // Su D7 (b3)
            { keys: ["gb/3"], duration: "8", midiValue: 54 },  // F# (3)
            { keys: ["d/3"], duration: "q", midiValue: 50 },

            // Bar 9 (G6: G-B-D-E) - Frase più melodica sulla sesta
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 },   // E (6a)

            // Bar 10 (C#dim7: C#-E-G-Bb) - Arpeggio diminuito o frase che usa C#
            { keys: ["db/4"], duration: "q", midiValue: 61 },  // C#
            { keys: ["e/4"], duration: "q", midiValue: 64 },   // E
            { keys: ["g/4"], duration: "q", midiValue: 67 },   // G
            { keys: ["bb/4"], duration: "q", midiValue: 70 },  // Bb

            // Bar 11 (G7/D | Eb7) - Frase che si adatta al cambio
            // Su Eb7: b3 è Gb (F#), 3 è G. Blue note (relativa a Eb) è A.
            { keys: ["d/4"], duration: "q", midiValue: 62 },   // Su G7/D
            { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["gb/3"], duration: "8", midiValue: 54 },  // Su Eb7 (b3)
            { keys: ["g/3"], duration: "q.", midiValue: 55 },  // G (3)
            // { keys: ["a/3"], duration: "q", midiValue: 57 }, // A (Blue Note di Eb) - Opzionale

            // Bar 12 (Am7 | D7) - Turnaround finale con bend su D7
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // Su Am7 (9a)
            { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["f/3"], duration: "8", midiValue: 53 },   // Su D7 (b3)
            { keys: ["gb/3"], duration: "8", midiValue: 54 },  // F# (3)
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // Risolve ad A (5 di D, o per condurre a G)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della nuova progressione in Sol
            // Bar 1 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 2 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 3 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },
            // Bar 4 (C7)
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 40, 43, 46] },

            // Bar 5 (G7)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31, 35, 38, 41] },
            // Bar 6 (D7alt: D-F#-Ab-C)
            { keys: ["d/2", "gb/2", "ab/2", "c/3"], duration: "w", midiValues: [38, 42, 44, 48] },
            // Bar 7 (G7 | E7alt: E-G#-B-D)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "h", midiValues: [31, 35, 38, 41] },
            { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "h", midiValues: [40, 44, 47, 50] },
            // Bar 8 (Am7 | D7)
            { keys: ["a/1", "c/2", "e/2", "g/2"], duration: "h", midiValues: [33, 36, 40, 43] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "h", midiValues: [38, 42, 45, 48] },

            // Bar 9 (G6: G-B-D-E)
            { keys: ["g/1", "b/1", "d/2", "e/2"], duration: "w", midiValues: [31, 35, 38, 40] },
            // Bar 10 (C#dim7: C#-E-G-Bb)
            { keys: ["db/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [37, 40, 43, 46] },
            // Bar 11 (G7/D | Eb7: Eb-G-Bb-Db)
            { keys: ["d/2", "g/2", "b/2", "f/3"], duration: "h", midiValues: [38, 43, 47, 53] }, // G7/D
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "h", midiValues: [39, 43, 46, 49] },
            // Bar 12 (Am7 | D7)
            { keys: ["a/1", "c/2", "e/2", "g/2"], duration: "h", midiValues: [33, 36, 40, 43] },
            { keys: ["d/2", "gb/2", "a/2", "c/3"], duration: "h", midiValues: [38, 42, 45, 48] }
        ] // end notesBass
    },
    
    // =====================================================================================
    // === Esercizio PH-Bb-4 - Targeting di Terze e Settime (in Si Bemolle) ===
    // =====================================================================================
    // Tonalità: Si Bemolle. Focus sul far cadere terze e settime degli accordi su tempi forti.
    // Nuova progressione armonica in Bb.
    // Mano destra: Frasi melodiche mirate ai chord tones.
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-Bb-ChordToneTarget",
        name: "Targeting 3rd/7th (Bb)",
        category: "phrasing_harmony",
        staveLayout: "grand",
        keySignature: "Bb", // Due bemolli (Bb, Eb)
        timeSignature: "4/4",
        repetitions: 2,

        notesTreble: [ // Mano Destra: Frasi con targeting di 3rd/7th
            // Su Bb7: 3a è D, b7 è Ab
            // Bar 1 (Bb7) - Target D (3a) sul beat 1, Ab (b7) sul beat 3
            { keys: ["d/4"], duration: "q", midiValue: 62 },    // D (3a)
            { keys: ["c/4"], duration: "q", midiValue: 60 },    // Passaggio
            { keys: ["ab/3"], duration: "q", midiValue: 56 },   // Ab (b7)
            { keys: ["f/3"], duration: "q", midiValue: 53 },    // Passaggio

            // Su Eb7: 3a è G, b7 è Db
            // Bar 2 (Eb7) - Target G (3a) e Db (b7)
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G (3a)
            { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["db/4"], duration: "q", midiValue: 61 },   // Db (b7)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },

            // Bar 3 (Bb7) - Target Ab (b7) e D (3a)
            { keys: ["ab/3"], duration: "h", midiValue: 56 },   // Ab (b7)
            { keys: ["d/4"], duration: "h", midiValue: 62 },    // D (3a)

            // Bar 4 (Bb7) - Frase libera che gravita attorno a D e Ab
            { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 },

            // Bar 5 (Eb7) - Target G (3a) e Db (b7)
            { keys: ["g/3"], duration: "q.", midiValue: 55 },
            { keys: ["f/3"], duration: "8", midiValue: 53 },
            { keys: ["db/4"], duration: "h", midiValue: 61 },

            // Su Edim7: E-G-Bb-Db(C#)
            // Bar 6 (Edim7) - Arpeggio o note che evidenziano Edim7
            { keys: ["e/3"], duration: "q", midiValue: 52 },    // E
            { keys: ["g/3"], duration: "q", midiValue: 55 },    // G
            { keys: ["bb/3"], duration: "q", midiValue: 58 },   // Bb
            { keys: ["db/4"], duration: "q", midiValue: 61 },   // Db

            // Bar 7 (Bb7/F) - Target D (3a) e Ab (b7)
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // F (basso)
            { keys: ["d/4"], duration: "q", midiValue: 62 },   // D (3a)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },  // Ab (b7)

            // Su Dm7: 3a (min) è F, b7 è C. Su G7alt: 3a è B, b7 è F.
            // Bar 8 (Dm7 | G7alt)
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // F (b3 di Dm7)
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // C (b7 di Dm7)
            { keys: ["b/3"], duration: "q", midiValue: 59 },   // B (3 di G7)
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // F (b7 di G7)

            // Su Cm7: 3a (min) è Eb, b7 è Bb
            // Bar 9 (Cm7) - Target Eb (b3) e Bb (b7)
            { keys: ["eb/4"], duration: "h", midiValue: 63 },  // Eb (b3)
            { keys: ["bb/3"], duration: "h", midiValue: 58 },  // Bb (b7)

            // Su F7: 3a è A, b7 è Eb
            // Bar 10 (F7) - Target A (3a) e Eb (b7)
            { keys: ["a/3"], duration: "q.", midiValue: 57 },
            { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },

            // Su Gm7: b3 è Bb, b7 è F. Su C7alt: 3a è E, b7 è Bb.
            // Bar 11 (Gm7 | C7alt)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb (b3 di Gm7)
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // F (b7 di Gm7)
            { keys: ["e/4"], duration: "q", midiValue: 64 },   // E (3 di C7)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb (b7 di C7)

            // Su Cm7: b3 è Eb, b7 è Bb. Su F7: 3a è A, b7 è Eb.
            // Bar 12 (Cm7 | F7) - Turnaround con targeting
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Eb (b3 di Cm7)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb (b7 di Cm7)
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // A (3 di F7)
            { keys: ["eb/3"], duration: "q", midiValue: 51 },  // Eb (b7 di F7, ottava bassa)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della nuova progressione in Bb
            // Bar 1 (Bb7)
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
            // Bar 2 (Eb7)
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
            // Bar 3 (Bb7)
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },
            // Bar 4 (Bb7)
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },

            // Bar 5 (Eb7)
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
            // Bar 6 (Edim7: E-G-Bb-Db)
            { keys: ["e/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [40, 43, 46, 49] },
            // Bar 7 (Bb7/F: F-Bb-D-Ab)
            { keys: ["f/1", "bb/1", "d/2", "ab/2"], duration: "w", midiValues: [29, 34, 38, 44] },
            // Bar 8 (Dm7 | G7alt: G-B-Db-F)
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "h", midiValues: [38, 41, 45, 48] },
            { keys: ["g/1", "b/1", "db/2", "f/2"], duration: "h", midiValues: [31, 35, 37, 41] },

            // Bar 9 (Cm7)
            { keys: ["c/2", "eb/2", "g/2", "bb/2"], duration: "w", midiValues: [36, 39, 43, 46] },
            // Bar 10 (F7)
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29, 33, 36, 39] },
            // Bar 11 (Gm7 | C7alt: C-E-G#-Bb)
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "h", midiValues: [31, 34, 38, 41] },
            { keys: ["c/2", "e/2", "ab/2", "bb/2"], duration: "h", midiValues: [36, 40, 44, 46] },
            // Bar 12 (Cm7 | F7)
            { keys: ["c/2", "eb/2", "g/2", "bb/2"], duration: "h", midiValues: [36, 39, 43, 46] },
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29, 33, 36, 39] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio PH-Eb-5 - Fraseggio Blues Integrato (in Mi Bemolle) ===
    // =====================================================================================
    // Tonalità: Mi Bemolle. Combina Blue Note, Bend b3->3, e Targeting Chord Tones.
    // Nuova progressione armonica complessa in Eb.
    // Mano destra: Frasi melodiche integrate.
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-Eb-IntegratedBlues",
        name: "Fraseggio Blues Integrato (Eb)",
        category: "phrasing_harmony",
        staveLayout: "grand",
        keySignature: "Eb", // Tre bemolli (Bb, Eb, Ab)
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Fraseggio Integrato
            // Su Eb7: b3=Gb, 3=G. Blue Note #4/b5 = A nat.
            // Bar 1 (Eb7) - Bend Gb->G, poi tocca A (Blue Note)
            { keys: ["gb/3"], duration: "8", midiValue: 54 },  // Gb (b3)
            { keys: ["g/3"], duration: "q.", midiValue: 55 },  // G (3)
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // A (Blue Note)
            { keys: ["eb/3"], duration: "q", midiValue: 51 },  // Eb

            // Su Ab7: b3=Cb(B), 3=C. Blue Note #4/b5 = D nat.
            // Bar 2 (Ab7) - Bend Cb(B)->C, poi tocca D (Blue Note)
            { keys: ["b/3"], duration: "8", midiValue: 59 },   // Cb (B nat, b3)
            { keys: ["c/4"], duration: "q.", midiValue: 60 },  // C (3)
            { keys: ["d/4"], duration: "q", midiValue: 62 },   // D (Blue Note)
            { keys: ["ab/3"], duration: "q", midiValue: 56 },  // Ab

            // Bar 3 (Eb7) - Frase con Blue Note A e targeting b7 (Db)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["db/4"], duration: "h", midiValue: 61 },  // Db (b7 di Eb)

            // Su Bb7: b3=Db, 3=D. Blue Note #4/b5 = E nat.
            // Bar 4 (Bb7) - Bend Db->D, poi tocca E (Blue Note)
            { keys: ["db/4"], duration: "8", midiValue: 61 },  // Db (b3)
            { keys: ["d/4"], duration: "q.", midiValue: 62 },  // D (3)
            { keys: ["e/4"], duration: "q", midiValue: 64 },   // E (Blue Note)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb

            // Bar 5 (Ab7) - Targeting 3 (C) e b7 (Gb)
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["gb/4"], duration: "h", midiValue: 66 },  // Gb (b7 di Ab)

            // Su Adim7: A-C-Eb-Gb. La Blue Note A di Eb è la radice.
            // Bar 6 (Adim7) - Arpeggio o frase che usa A e altre note dell'accordo
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // A
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 },

            // Bar 7 (Eb7/Bb) - Bend Gb->G
            { keys: ["bb/3"], duration: "q", midiValue: 58 },  // Bb (basso)
            { keys: ["gb/3"], duration: "8", midiValue: 54 },
            { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },

            // Bar 8 (Fm7 | Bb7) - ii-V, frase con bend su Bb7
            { keys: ["f/3"], duration: "q", midiValue: 53 },   // Su Fm7
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["db/4"], duration: "8", midiValue: 61 },  // Su Bb7 (b3)
            { keys: ["d/4"], duration: "8", midiValue: 62 },   // D (3)
            { keys: ["bb/3"], duration: "q", midiValue: 58 },

            // Su Cm7b5: C-Eb-Gb-Bb. Su F7alt: b3=Ab, 3=A. Blue Note (di F)=B.
            // Bar 9 (Cm7b5 | F7alt)
            { keys: ["gb/3"], duration: "q", midiValue: 54 },  // Gb (b5 di Cm7b5)
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Eb (b3 di Cm7b5)
            { keys: ["ab/3"], duration: "8", midiValue: 56 },  // Su F7alt (b3)
            { keys: ["a/3"], duration: "8", midiValue: 57 },   // A (3)
            { keys: ["b/3"], duration: "q", midiValue: 59 },   // B (Blue Note di F)

            // Su Bbm7: b3=Db, b7=Ab. Su Eb7alt: b3=Gb, 3=G. Blue Note (di Eb)=A.
            // Bar 10 (Bbm7 | Eb7alt)
            { keys: ["db/4"], duration: "q", midiValue: 61 },  // Db (b3 di Bbm7)
            { keys: ["ab/3"], duration: "q", midiValue: 56 },  // Ab (b7 di Bbm7)
            { keys: ["gb/3"], duration: "8", midiValue: 54 },  // Su Eb7alt (b3)
            { keys: ["g/3"], duration: "8", midiValue: 55 },   // G (3)
            { keys: ["a/3"], duration: "q", midiValue: 57 },   // A (Blue Note di Eb)

            // Su G7alt: b3=Bb, 3=B. Blue Note (di G)=C#.
            // Bar 11 (Eb7 | G7alt) - Frase su G7alt
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Su Eb7
            { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["b/3"], duration: "q", midiValue: 59 },   // Su G7alt (3a)
            { keys: ["db/4"], duration: "q", midiValue: 61 },  // C# (Blue Note di G)

            // Su Cm7: b3=Eb, b7=Bb. Su F7alt: b3=Ab, 3=A.
            // Bar 12 (Cm7 | F7alt) - Turnaround finale
            { keys: ["eb/4"], duration: "q", midiValue: 63 },  // Su Cm7
            { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["ab/3"], duration: "8", midiValue: 56 },  // Su F7alt
            { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },   // Risolve a C (5 di F, o per condurre a Bb)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della nuova progressione in Eb
            // Bar 1 (Eb7)
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
            // Bar 2 (Ab7)
            { keys: ["ab/2", "c/3", "eb/3", "gb/3"], duration: "w", midiValues: [44, 48, 51, 54] },
            // Bar 3 (Eb7)
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "w", midiValues: [39, 43, 46, 49] },
            // Bar 4 (Bb7)
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34, 38, 41, 44] },

            // Bar 5 (Ab7)
            { keys: ["ab/2", "c/3", "eb/3", "gb/3"], duration: "w", midiValues: [44, 48, 51, 54] },
            // Bar 6 (Adim7: A-C-Eb-Gb)
            { keys: ["a/2", "c/3", "eb/3", "gb/3"], duration: "w", midiValues: [45, 48, 51, 54] },
            // Bar 7 (Eb7/Bb: Bb-Eb-G-Db)
            { keys: ["bb/1", "eb/2", "g/2", "db/3"], duration: "w", midiValues: [34, 39, 43, 49] },
            // Bar 8 (Fm7 | Bb7)
            { keys: ["f/2", "ab/2", "c/3", "eb/3"], duration: "h", midiValues: [41, 44, 48, 51] },
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "h", midiValues: [34, 38, 41, 44] },

            // Bar 9 (Cm7b5: C-Eb-Gb-Bb | F7alt: F-A-Db-Eb)
            { keys: ["c/2", "eb/2", "gb/2", "bb/2"], duration: "h", midiValues: [36, 39, 42, 46] },
            { keys: ["f/1", "a/1", "db/2", "eb/2"], duration: "h", midiValues: [29, 33, 37, 39] }, // F7(b9#11)
            // Bar 10 (Bbm7 | Eb7alt: Eb-G-A-Db)
            { keys: ["bb/1", "db/2", "f/2", "ab/2"], duration: "h", midiValues: [34, 37, 41, 44] },
            { keys: ["eb/2", "g/2", "a/2", "db/3"], duration: "h", midiValues: [39, 43, 45, 49] }, // Eb7(#11,b9)
            // Bar 11 (Eb7 | G7alt: G-B-Db-F)
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "h", midiValues: [39, 43, 46, 49] },
            { keys: ["g/1", "b/1", "db/2", "f/2"], duration: "h", midiValues: [31, 35, 37, 41] },
            // Bar 12 (Cm7 | F7alt)
            { keys: ["c/2", "eb/2", "g/2", "bb/2"], duration: "h", midiValues: [36, 39, 43, 46] },
            { keys: ["f/1", "a/1", "db/2", "eb/2"], duration: "h", midiValues: [29, 33, 37, 39] }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio PH-C-6 - Fraseggio Blues Esteso (24 Battute in Do) ===
    // =====================================================================================
    // Tonalità: Do. Fraseggio blues integrato su una progressione di 24 battute.
    // Combina Blue Note, Bend b3->3, Targeting Chord Tones, e diverse scale.
    // Mano destra: Fraseggio esteso.
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-C-Extended24Bar",
        name: "Fraseggio Blues Esteso 24 Bar (Do)",
        category: "phrasing_harmony",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Fraseggio Esteso
            // === CHORUS 1 ===
            // Bar 1 (C7) - Bend Eb->E, poi blue note F#
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["e/4"], duration: "q.", midiValue: 64 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            // Bar 2 (C7) - Pentatonica minore
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 3 (F7) - Targeting 3(A) e b7(Eb) di F7
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 4 (F7) - Lick pentatonica minore di F
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["ab/4"], duration: "8", midiValue: 68 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["r/4"], duration: "q" }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 5 (C7) - Ritorno con blue note F#
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "h", midiValue: 64 },
            // Bar 6 (A7alt) - Frase su A7 (target C# e G)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, // C#
            { keys: ["g/4"], duration: "h", midiValue: 67 },
            // Bar 7 (Dm7) - Frase su Dm7 (target F e C)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            // Bar 8 (G7) - Bend Bb->B su G7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["bb/3"], duration: "8", midiValue: 58 },
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 },
            // Bar 9 (C7 | F7) - Passaggio rapido
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // Su C7
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Su F7
            // Bar 10 (C7 | G7) - Passaggio rapido
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // Su C7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, // Su G7
            // Bar 11 (C7 o Dm7) - Frase di chiusura chorus 1
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            // Bar 12 (G7) - Turnaround lick
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },


            // === CHORUS 2 ===
            // Bar 13 (C7) - Inizio Chorus 2, magari con Pentatonica Maggiore di C
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 14 (F#dim7) - Arpeggio F#dim7 (F#-A-C-Eb)
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["eb/5"], duration: "q", midiValue: 75 },
            // Bar 15 (F7 o Fm7) - Se Fm7, usare Ab. Se F7, usare A. Usiamo F7.
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["eb/5"], duration: "q", midiValue: 75 },
            // Bar 16 (Bb7) - Lick su Bb7 (target D e Ab)
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 },
            // Bar 17 (C7/E | A7alt) - Connessione
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su C7/E
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su A7alt (C# e G)
            // Bar 18 (Dm7 | G7sus4 - G7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Su Dm7
            { keys: ["c/5"], duration: "q", midiValue: 72 }, // Su G7sus4 (C è la sus4)
            { keys: ["b/4"], duration: "q", midiValue: 71 }, // Su G7 (B è la 3a)
            // Bar 19 (Cmaj7 | C#dim7) - Contrasto
            { keys: ["e/5"], duration: "h", midiValue: 76 }, // Su Cmaj7 (E è la 3a maggiore alta)
            { keys: ["db/5"], duration: "q", midiValue: 73 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su C#dim7
            // Bar 20 (Dm7 | Db7) - Db7 è sub tritonico di G7
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Su Dm7
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su Db7 (F# è 3a, F è b9)
            // Bar 21 (C7/G | F#m7b5)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // Su C7/G
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Su F#m7b5 (A è b3, C è b5)
            // Bar 22 (Fm6 | Em7 - Ebdim7) - Passaggi cromatici discendenti
            { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, // Su Fm6 (Ab è b3, D è 6)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, // Su Em7
            { keys: ["d/5"], duration: "q", midiValue: 74 }, // Su Ebdim7
            // Bar 23 (Dm7 | G7alt) - ii-V finale
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Su Dm7
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su G7alt (Db è b5, F è b7)
            // Bar 24 (C6/9) - Risoluzione finale
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["c/5"], duration: "h", midiValue: 72 }, // C6/9 (C-E-G-A-D)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della progressione estesa
            // Chorus 1
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 1 C7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 2 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 3 F7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 4 F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 5 C7
            { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "w", midiValues: [33,37,40,43] }, // Bar 6 A7alt (A-C#-E-G)
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "w", midiValues: [38,41,45,48] }, // Bar 7 Dm7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 8 G7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, // Bar 9 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, // F7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, // Bar 10 C7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "h", midiValues: [31,35,38,41] }, // G7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 11 C7
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "w", midiValues: [31,35,38,41] }, // Bar 12 G7

            // Chorus 2
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 13 C7
            { keys: ["gb/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [30,33,36,39] }, // Bar 14 F#dim7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 15 F7
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34,38,41,44] }, // Bar 16 Bb7
            { keys: ["e/2", "g/2", "bb/2", "c/3"], duration: "h", midiValues: [40,43,46,48] }, // Bar 17 C7/E (E G Bb C)
            { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "h", midiValues: [33,37,40,43] }, // A7alt
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "h", midiValues: [38,41,45,48] }, // Bar 18 Dm7
            { keys: ["g/1", "c/2", "d/2", "f/2"], duration: "q", midiValues: [31,36,38,41] }, // G7sus4 (G C D F)
            { keys: ["g/1", "b/1", "d/2", "f/2"], duration: "q", midiValues: [31,35,38,41] }, // G7
            { keys: ["c/2", "e/2", "g/2", "b/2"], duration: "h", midiValues: [36,40,43,47] }, // Bar 19 Cmaj7 (C E G B)
            { keys: ["db/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [37,40,43,46] }, // C#dim7
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "h", midiValues: [38,41,45,48] }, // Bar 20 Dm7
            { keys: ["db/2", "f/2", "ab/2", "b/2"], duration: "h", midiValues: [37,41,44,47] }, // Db7 (Db F Ab Cb(B))
            { keys: ["g/1", "c/2", "e/2", "bb/2"], duration: "h", midiValues: [31,36,40,46] }, // Bar 21 C7/G
            { keys: ["gb/1", "a/1", "c/2", "e/2"], duration: "h", midiValues: [30,33,36,40] }, // F#m7b5
            { keys: ["f/1", "ab/1", "c/2", "d/2"], duration: "q", midiValues: [29,32,36,38] }, // Bar 22 Fm6 (F Ab C D)
            { keys: ["e/1", "g/1", "bb/1", "d/2"], duration: "q", midiValues: [28,31,34,38] }, // Em7
            { keys: ["eb/1", "gb/1", "a/1", "c/2"], duration: "h", midiValues: [27,30,33,36] }, // Ebdim7
            { keys: ["d/2", "f/2", "a/2", "c/3"], duration: "h", midiValues: [38,41,45,48] }, // Bar 23 Dm7
            { keys: ["g/1", "b/1", "db/2", "f/2"], duration: "h", midiValues: [31,35,37,41] }, // G7alt
            { keys: ["c/2", "e/2", "g/2", "a/2", "d/3"], duration: "w", midiValues: [36,40,43,45,50] } // Bar 24 C6/9
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio PH-F-7 - Fraseggio Blues Integrato Esteso (24 Battute in Fa) ===
    // =====================================================================================
    // Tonalità: Fa. Fraseggio blues integrato su una progressione di 24 battute.
    // Combina Blue Note, Bend b3->3, Targeting Chord Tones, e diverse scale.
    // Mano destra: Fraseggio esteso.
    // Mano sinistra: Accordi della progressione.
    {
        id: "phrasing-F-Extended24Bar",
        name: "Fraseggio Blues Esteso 24 Bar (Fa)",
        category: "phrasing_harmony",
        staveLayout: "grand",
        keySignature: "F", // Un bemolle (Bb)
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Fraseggio Esteso
            // === CHORUS 1 ===
            // Su F7: b3=Ab, 3=A. Blue Note (#4/b5) = B nat.
            // Bar 1 (F7) - Bend Ab->A, poi blue note B
            { keys: ["ab/3"], duration: "8", midiValue: 56 }, { keys: ["a/3"], duration: "q.", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            // Su Bb7: b3=Db, 3=D. Blue Note (#4/b5) = E nat.
            // Bar 2 (Bb7) - Bend Db->D, poi blue note E
            { keys: ["db/4"], duration: "8", midiValue: 61 }, { keys: ["d/4"], duration: "q.", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 3 (F7) - Pentatonica minore di F
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["f/3"], duration: "h", midiValue: 53 },
            // Bar 4 (Cm7 | F7) - ii-V che porta a Bb7 (F7 è V di Bb7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Su Cm7
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Su F7 (A è 3a, Eb è b7)
            // Bar 5 (Bb7) - Lick su Bb7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["ab/4"], duration: "h", midiValue: 68 },
            // Bar 6 (Bdim7: B-D-F-Ab) - Arpeggio o frase sul diminuito
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["ab/4"], duration: "q", midiValue: 68 },
            // Bar 7 (F7/C) - Targeting 3(A) e b7(Eb)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["eb/4"], duration: "h", midiValue: 63 },
            // Bar 8 (D7alt) - Frase su D7alt (target F# e C)
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, // F#
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 9 (Gm7) - Frase su Gm7 (target Bb e F)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["f/4"], duration: "h", midiValue: 65 },
            // Bar 10 (C7) - Bend Eb->E su C7
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["eb/4"], duration: "8", midiValue: 63 },
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            // Bar 11 (F7 | A7alt) - Turnaround
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, // Su F7
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Su A7alt (Eb è b5, G è b7)
            // Bar 12 (Dm7 | G7alt) - Turnaround
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Su Dm7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, // Su G7alt (B è 3, F è b7)

            // === CHORUS 2 ===
            // Bar 13 (Fmaj7) - Inizio più melodico con Pentatonica Maggiore di F (F G A C D)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            // Bar 14 (Fm7 | Bb7) - ii-V
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, // Su Fm7
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, // Su Bb7
            // Bar 15 (Ebmaj7) - Frase su Ebmaj7 (Eb G Bb D)
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 16 (Ab7) - Lick su Ab7 (target C e Gb)
            { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["gb/3"], duration: "q", midiValue: 54 },
            // Bar 17 (F7/A | Dbm7) - Connessione cromatica
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Su F7/A
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["gb/4"], duration: "q", midiValue: 66 }, // Su Dbm7 (E è b3, Gb è b5)
            // Bar 18 (Gm7/C | C7alt)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su Gm7/C (C è basso)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, // Su C7alt (E è 3, Ab è #5)
            // Bar 19 (F6 | F#dim7) - Contrasto
            { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, // Su F6 (A è 3, D è 6)
            // { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Su F#dim7
            // Bar 20 (Gm7 | Gb7) - Gb7 è sub tritonico di C7
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // Su Gm7
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, // Su Gb7 (E è b7, Bb è 3)
            // Bar 21 (Fmaj7/C | Bbm6)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, // Su Fmaj7/C
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, // Su Bbm6 (Db è b3, G è 6)
            // Bar 22 (Am7 | Ab7alt)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Su Am7
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, // Su Ab7alt (B(Cb) è b3, F è b13)
            // Bar 23 (Gm7 | C7sus4 - C7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, // Su Gm7
            { keys: ["f/4"], duration: "q", midiValue: 65 }, // Su C7sus4 (F è sus4)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, // Su C7 (E è 3a)
            // Bar 24 (F6/9) - Risoluzione finale
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f/4"], duration: "h", midiValue: 65 }, // F6/9 (F-A-C-D-G)
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Accordi della progressione estesa in Fa
            // Chorus 1
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 1 F7
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34,38,41,44] }, // Bar 2 Bb7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "w", midiValues: [29,33,36,39] }, // Bar 3 F7
            { keys: ["c/2", "eb/2", "g/2", "bb/2"], duration: "h", midiValues: [36,39,43,46] }, // Bar 4 Cm7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, // F7
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [34,38,41,44] }, // Bar 5 Bb7
            { keys: ["b/1", "d/2", "f/2", "ab/2"], duration: "w", midiValues: [35,38,41,44] }, // Bar 6 Bdim7
            { keys: ["c/2", "f/2", "a/2", "eb/3"], duration: "w", midiValues: [36,41,45,51] }, // Bar 7 F7/C
            { keys: ["d/2", "gb/2", "ab/2", "c/3"], duration: "w", midiValues: [38,42,44,48] }, // Bar 8 D7alt
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "w", midiValues: [31,34,38,41] }, // Bar 9 Gm7
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "w", midiValues: [36,40,43,46] }, // Bar 10 C7
            { keys: ["f/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [29,33,36,39] }, // Bar 11 F7
            { keys: ["a/1", "db/2", "eb/2", "g/2"], duration: "h", midiValues: [33,37,39,43] }, // A7alt (A C# Eb G)
            { keys: ["d/2", "f/2", "ab/2", "c/3"], duration: "h", midiValues: [38,41,44,48] }, // Bar 12 Dm7 (o Dm7b5)
            { keys: ["g/1", "b/1", "db/2", "f/2"], duration: "h", midiValues: [31,35,37,41] }, // G7alt

            // Chorus 2
            { keys: ["f/1", "a/1", "c/2", "e/2"], duration: "w", midiValues: [29,33,36,40] }, // Bar 13 Fmaj7
            { keys: ["f/1", "ab/1", "c/2", "eb/2"], duration: "h", midiValues: [29,32,36,39] },// Bar 14 Fm7
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "h", midiValues: [34,38,41,44] },// Bb7
            { keys: ["eb/2", "g/2", "bb/2", "d/3"], duration: "w", midiValues: [39,43,46,50] }, // Bar 15 Ebmaj7
            { keys: ["ab/1", "c/2", "eb/2", "gb/2"], duration: "w", midiValues: [32,36,39,42] },// Bar 16 Ab7
            { keys: ["a/1", "f/2", "c/3", "eb/3"], duration: "h", midiValues: [33,41,48,51] }, // Bar 17 F7/A
            { keys: ["db/2", "e/2", "ab/2", "b/2"], duration: "h", midiValues: [37,40,44,47] }, // Dbm7 (Db E Ab Cb(B))
            { keys: ["c/2", "g/2", "bb/2", "d/3"], duration: "h", midiValues: [36,43,46,50] }, // Bar 18 Gm7/C (C G Bb D)
            { keys: ["c/2", "e/2", "ab/2", "bb/2"], duration: "h", midiValues: [36,40,44,46] }, // C7alt
            { keys: ["f/1", "a/1", "c/2", "d/2"], duration: "h", midiValues: [29,33,36,38] }, // Bar 19 F6
            { keys: ["gb/1", "a/1", "c/2", "eb/2"], duration: "h", midiValues: [30,33,36,39] },// F#dim7
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "h", midiValues: [31,34,38,41] }, // Bar 20 Gm7
            { keys: ["gb/1", "bb/1", "db/2", "e/2"], duration: "h", midiValues: [30,34,37,40] },// Gb7
            { keys: ["c/2", "f/2", "a/2", "e/3"], duration: "h", midiValues: [36,41,45,52] }, // Bar 21 Fmaj7/C
            { keys: ["bb/1", "db/2", "f/2", "g/2"], duration: "h", midiValues: [34,37,41,43] },// Bbm6
            { keys: ["a/1", "c/2", "e/2", "g/2"], duration: "h", midiValues: [33,36,40,43] }, // Bar 22 Am7
            { keys: ["ab/1", "b/1", "eb/2", "gb/2"], duration: "h", midiValues: [32,35,39,42] },// Ab7alt (Ab Cb(B) Eb Gb)
            { keys: ["g/1", "bb/1", "d/2", "f/2"], duration: "q", midiValues: [31,34,38,41] }, // Bar 23 Gm7
            { keys: ["c/2", "f/2", "g/2", "bb/2"], duration: "q", midiValues: [36,41,43,46] }, // C7sus4
            { keys: ["c/2", "e/2", "g/2", "bb/2"], duration: "h", midiValues: [36,40,43,46] }, // C7
            { keys: ["f/1", "a/1", "c/2", "d/2", "g/2"], duration: "w", midiValues: [29,33,36,38,43] } // Bar 24 F6/9
        ] // end notesBass
    },
        // =====================================================================================
    // === Esercizio WB-G-4 - Walking Bass Int-Adv in SOL (24 Battute Prog. Modulante) ===
    // =====================================================================================
    // Tonalità: Sol. Progressione armonica estesa a 24 battute con II-V e modulazioni.
    // Mano sinistra: Walking bass con fluidità melodica e ritmica per forma lunga.
    // Mano destra: Accordi.
    {
        id: "walkingBass-G-Advanced24Bar",
        name: "Walking Bass SOL (Adv 24 Bar - Prog. Mod.)",
        category: "walking_bass",
        staveLayout: "grand",
        keySignature: "G", // Un diesis (F#)
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Accordi per 24 battute
            // Chorus 1 (Battute 1-12)
            { keys: ["g/3", "b/3", "d/4", "gb/4"], duration: "w", midiValues: [55,59,62,66] }, // 1 Gmaj7
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "h", midiValues: [57,60,64,67] },   // 2 Am7
            { keys: ["d/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [50,54,57,60] },   // D7
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55,59,62,65] },   // 3 G7
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "w", midiValues: [48,52,55,58] },  // 4 C7
            { keys: ["c/3", "eb/3", "g/3", "bb/3"], duration: "h", midiValues: [48,51,55,58] },  // 5 Cm7
            { keys: ["f/2", "a/2", "c/3", "eb/3"], duration: "h", midiValues: [41,45,48,51] },   // F7
            { keys: ["b/1", "g/2", "d/3", "f/3"], duration: "h", midiValues: [35,43,50,53] },   // 6 G7/B
            { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "h", midiValues: [40,44,47,50] },   // E7alt
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "w", midiValues: [45,48,52,55] },  // 7 Am7
            { keys: ["d/3", "g/3", "a/3", "c/4"], duration: "h", midiValues: [50,55,57,60] },   // 8 D7sus4
            { keys: ["d/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [50,54,57,60] },   // D7
            { keys: ["g/3", "b/3", "d/4", "e/4"], duration: "w", midiValues: [55,59,62,64] },   // 9 G6
            { keys: ["eb/3", "g/3", "bb/3", "db/4"], duration: "w", midiValues: [51,55,58,61] }, // 10 Eb7
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "h", midiValues: [45,48,52,55] },   // 11 Am7
            { keys: ["d/3", "gb/3", "ab/3", "c/4"], duration: "h", midiValues: [50,54,56,60] },  // D7alt
            { keys: ["g/3", "b/3", "d/4", "gb/4"], duration: "w", midiValues: [55,59,62,66] }, // 12 Gmaj7 (o G7)

            // Chorus 2 (Battute 13-24)
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55,59,62,65] },   // 13 G7
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48,52,55,58] },  // 14 C7
            { keys: ["db/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [49,52,55,58] }, // C#dim7 (Db E G Bb)
            { keys: ["d/3", "g/3", "b/3", "f/4"], duration: "h", midiValues: [50,55,59,65] },   // 15 G7/D (D G B F)
            { keys: ["eb/2", "gb/2", "a/2", "c/3"], duration: "h", midiValues: [39,42,45,48] }, // Ebdim7 (Eb Gb A C)
            { keys: ["e/2", "g/2", "b/2", "d/3"], duration: "h", midiValues: [40,43,47,50] },   // 16 Em7
            { keys: ["a/1", "db/2", "e/2", "g/2"], duration: "h", midiValues: [33,37,40,43] },   // A7alt
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "h", midiValues: [45,48,52,55] },  // 17 Am7
            { keys: ["d/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [50,54,57,60] },   // D7
            { keys: ["g/3", "b/3", "d/4", "gb/4"], duration: "h", midiValues: [55,59,62,66] }, // 18 Gmaj7
            { keys: ["bb/2", "db/3", "f/3", "ab/3"], duration: "q", midiValues: [46,49,53,56] },// Bbm7
            { keys: ["eb/2", "g/2", "bb/2", "db/3"], duration: "q", midiValues: [39,43,46,49] },// Eb7
            { keys: ["ab/2", "c/3", "eb/3", "g/3"], duration: "h", midiValues: [44,48,51,55] }, // 19 Abmaj7
            { keys: ["d/3", "gb/3", "ab/3", "c/4"], duration: "h", midiValues: [50,54,56,60] },  // D7alt
            { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "h", midiValues: [55,59,62,65] },   // 20 G7
            { keys: ["c/3", "e/3", "g/3", "bb/3"], duration: "h", midiValues: [48,52,55,58] },  // C7
            { keys: ["b/1", "g/2", "d/3", "f/3"], duration: "h", midiValues: [35,43,50,53] },   // 21 G7/B
            { keys: ["bb/1", "d/2", "f/2", "ab/2"], duration: "h", midiValues: [34,38,41,44] }, // Bb7
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "h", midiValues: [45,48,52,55] },  // 22 Am7
            { keys: ["ab/1", "c/2", "eb/2", "gb/2"], duration: "h", midiValues: [32,36,39,42] },// Ab7
            { keys: ["g/3", "b/3", "d/4", "e/4"], duration: "h", midiValues: [55,59,62,64] },   // 23 G6
            { keys: ["e/2", "ab/2", "b/2", "d/3"], duration: "h", midiValues: [40,44,47,50] },   // E7alt
            { keys: ["a/2", "c/3", "e/3", "g/3"], duration: "h", midiValues: [45,48,52,55] },  // 24 Am7
            { keys: ["d/3", "gb/3", "a/3", "c/4"], duration: "h", midiValues: [50,54,57,60] }    // D7
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass Lines in G per 24 battute
            // Chorus 1 (Battute 1-12) - Linee simili a WB-G-3, con piccole variazioni per fluidità
            // Bar 1 (Gmaj7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Bar 2 (Am7 - D7)
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["g/2"], duration: "8", midiValue: 43 },
            { keys: ["gb/2"], duration: "8", midiValue: 42 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Bar 3 (G7)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Bar 4 (C7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "8", midiValue: 38 },
            { keys: ["eb/2"], duration: "8", midiValue: 39 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Bar 5 (Cm7 - F7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["bb/2"], duration: "q", midiValue: 46 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Bar 6 (G7/B | E7alt)
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, { keys: ["e/1"], duration: "q", midiValue: 28 },
            // Bar 7 (Am7)
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Manteniamo G per condurre a D7sus
            // Bar 8 (D7sus4 - D7)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["gb/2"], duration: "q", midiValue: 42 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Bar 9 (G6)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Bar 10 (Eb7)
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["db/2"], duration: "q", midiValue: 37 }, { keys: ["bb/1"], duration: "q", midiValue: 34 },
            // Bar 11 (Am7 | D7alt)
            { keys: ["a/1"], duration: "8", midiValue: 33 }, { keys: ["b/1"], duration: "8", midiValue: 35 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["ab/1"], duration: "q", midiValue: 32 },
            { keys: ["d/1"], duration: "q", midiValue: 26 },
            // Bar 12 (Gmaj7 o G7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // F per G7, conduce a G

            // Chorus 2 (Battute 13-24) - Nuove linee
            // Bar 13 (G7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Bar 14 (C7 | C#dim7)
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Su C7
            { keys: ["db/2"], duration: "q", midiValue: 37 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Su C#dim7 (Db e G)
            // Bar 15 (G7/D | Ebdim7)
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // Su G7/D
            { keys: ["eb/2"], duration: "q", midiValue: 39 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, // Su Ebdim7 (Eb e A)
            // Bar 16 (Em7 | A7alt)
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, // Su Em7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["db/2"], duration: "q", midiValue: 37 }, // Su A7alt (G è b7, Db è 3)
            // Bar 17 (Am7 | D7)
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["gb/2"], duration: "q", midiValue: 42 },
            // Bar 18 (Gmaj7 | Bbm7 - Eb7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, // Su Gmaj7
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },// Su Bbm7-Eb7
            // Bar 19 (Abmaj7 | D7alt)
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },// Su Abmaj7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["ab/1"], duration: "q", midiValue: 32 },// Su D7alt (D e Ab(G#))
            // Bar 20 (G7 | C7)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Bar 21 (G7/B | Bb7)
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, // Su G7/B
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["d/2"], duration: "q", midiValue: 38 },// Su Bb7
            // Bar 22 (Am7 | Ab7)
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Su Am7
            { keys: ["ab/1"], duration: "q", midiValue: 32 }, { keys: ["eb/2"], duration: "q", midiValue: 39 },// Su Ab7
            // Bar 23 (G6 | E7alt)
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["e/2"], duration: "q", midiValue: 40 }, // Su G6
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["ab/1"], duration: "q", midiValue: 32 },// Su E7alt (B è 5, Ab è 3)
            // Bar 24 (Am7 | D7)
            { keys: ["a/1"], duration: "q", midiValue: 33 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["gb/2"], duration: "q", midiValue: 42 }
        ] // end notesBass
    },
    // =====================================================================================
    // === Esercizio WB-G-4-HighOctave - Walking Bass (Registro Alto) in SOL (24 Battute) ===
    // =====================================================================================
    // Tonalità: Sol. Stessa progressione di WB-G-4, ma TUTTE LE NOTE (destra e sinistra)
    // sono TRASPOSTE DI DUE OTTAVE VERSO L'ALTO.
    // Mano sinistra suonerà in un registro molto più alto del normale walking bass.
    {
        id: "walkingBass-G-Advanced24Bar-HighOctave",
        name: "Walking Bass SOL (Adv 24 Bar - Ottave Alte)",
        category: "walking_bass", // O una nuova categoria "experimental_registers"
        staveLayout: "grand",
        keySignature: "G", // Un diesis (F#)
        timeSignature: "4/4",
        repetitions: 1,

        notesTreble: [ // Mano Destra: Accordi - TRASPOSTI DI DUE OTTAVE
            // Chorus 1 (Battute 1-12)
            { keys: ["g/5", "b/5", "d/6", "gb/6"], duration: "w", midiValues: [79,83,86,90] }, // 1 Gmaj7
            { keys: ["a/5", "c/6", "e/6", "g/6"], duration: "h", midiValues: [81,84,88,91] },   // 2 Am7
            { keys: ["d/5", "gb/5", "a/5", "c/6"], duration: "h", midiValues: [74,78,81,84] },   // D7
            { keys: ["g/5", "b/5", "d/6", "f/6"], duration: "w", midiValues: [79,83,86,89] },   // 3 G7
            { keys: ["c/5", "e/5", "g/5", "bb/5"], duration: "w", midiValues: [72,76,79,82] },  // 4 C7
            { keys: ["c/5", "eb/5", "g/5", "bb/5"], duration: "h", midiValues: [72,75,79,82] },  // 5 Cm7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "h", midiValues: [65,69,72,75] },   // F7
            { keys: ["b/3", "g/4", "d/5", "f/5"], duration: "h", midiValues: [59,67,74,77] },   // 6 G7/B
            { keys: ["e/4", "ab/4", "b/4", "d/5"], duration: "h", midiValues: [64,68,71,74] },   // E7alt
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69,72,76,79] },  // 7 Am7
            { keys: ["d/5", "g/5", "a/5", "c/6"], duration: "h", midiValues: [74,79,81,84] },   // 8 D7sus4
            { keys: ["d/5", "gb/5", "a/5", "c/6"], duration: "h", midiValues: [74,78,81,84] },   // D7
            { keys: ["g/5", "b/5", "d/6", "e/6"], duration: "w", midiValues: [79,83,86,88] },   // 9 G6
            { keys: ["eb/5", "g/5", "bb/5", "db/6"], duration: "w", midiValues: [75,79,82,85] }, // 10 Eb7
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69,72,76,79] },   // 11 Am7
            { keys: ["d/5", "gb/5", "ab/5", "c/6"], duration: "h", midiValues: [74,78,80,84] },  // D7alt
            { keys: ["g/5", "b/5", "d/6", "gb/6"], duration: "w", midiValues: [79,83,86,90] }, // 12 Gmaj7

            // Chorus 2 (Battute 13-24)
            { keys: ["g/5", "b/5", "d/6", "f/6"], duration: "w", midiValues: [79,83,86,89] },   // 13 G7
            { keys: ["c/5", "e/5", "g/5", "bb/5"], duration: "h", midiValues: [72,76,79,82] },  // 14 C7
            { keys: ["db/5", "e/5", "g/5", "bb/5"], duration: "h", midiValues: [73,76,79,82] }, // C#dim7
            { keys: ["d/5", "g/5", "b/5", "f/6"], duration: "h", midiValues: [74,79,83,89] },   // 15 G7/D
            { keys: ["eb/4", "gb/4", "a/4", "c/5"], duration: "h", midiValues: [63,66,69,72] }, // Ebdim7
            { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "h", midiValues: [64,67,71,74] },   // 16 Em7
            { keys: ["a/3", "db/4", "e/4", "g/4"], duration: "h", midiValues: [57,61,64,67] },   // A7alt
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69,72,76,79] },  // 17 Am7
            { keys: ["d/5", "gb/5", "a/5", "c/6"], duration: "h", midiValues: [74,78,81,84] },   // D7
            { keys: ["g/5", "b/5", "d/6", "gb/6"], duration: "h", midiValues: [79,83,86,90] }, // 18 Gmaj7
            { keys: ["bb/4", "db/5", "f/5", "ab/5"], duration: "q", midiValues: [70,73,77,80] },// Bbm7
            { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "q", midiValues: [63,67,70,73] },// Eb7
            { keys: ["ab/4", "c/5", "eb/5", "g/5"], duration: "h", midiValues: [68,72,75,79] }, // 19 Abmaj7
            { keys: ["d/5", "gb/5", "ab/5", "c/6"], duration: "h", midiValues: [74,78,80,84] },  // D7alt
            { keys: ["g/5", "b/5", "d/6", "f/6"], duration: "h", midiValues: [79,83,86,89] },   // 20 G7
            { keys: ["c/5", "e/5", "g/5", "bb/5"], duration: "h", midiValues: [72,76,79,82] },  // C7
            { keys: ["b/3", "g/4", "d/5", "f/5"], duration: "h", midiValues: [59,67,74,77] },   // 21 G7/B
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "h", midiValues: [58,62,65,68] }, // Bb7
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69,72,76,79] },  // 22 Am7
            { keys: ["ab/3", "c/4", "eb/4", "gb/4"], duration: "h", midiValues: [56,60,63,66] },// Ab7
            { keys: ["g/5", "b/5", "d/6", "e/6"], duration: "h", midiValues: [79,83,86,88] },   // 23 G6
            { keys: ["e/4", "ab/4", "b/4", "d/5"], duration: "h", midiValues: [64,68,71,74] },   // E7alt
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69,72,76,79] },  // 24 Am7
            { keys: ["d/5", "gb/5", "a/5", "c/6"], duration: "h", midiValues: [74,78,81,84] }    // D7
        ], // end notesTreble

        notesBass: [ // Mano Sinistra: Walking Bass Lines - TRASPOSTE DI DUE OTTAVE
            // Chorus 1 (Battute 1-12)
            // Bar 1 (Gmaj7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 2 (Am7 - D7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 3 (G7)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 4 (C7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 5 (Cm7 - F7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Bar 6 (G7/B | E7alt)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Bar 7 (Am7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 8 (D7sus4 - D7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 9 (G6)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 10 (Eb7)
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            // Bar 11 (Am7 | D7alt)
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["ab/3"], duration: "q", midiValue: 56 },
            { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Bar 12 (Gmaj7 o G7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },

            // Chorus 2 (Battute 13-24)
            // Bar 13 (G7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            // Bar 14 (C7 | C#dim7)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Bar 15 (G7/D | Ebdim7)
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Bar 16 (Em7 | A7alt)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["db/4"], duration: "q", midiValue: 61 },
            // Bar 17 (Am7 | D7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            // Bar 18 (Gmaj7 | Bbm7 - Eb7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 19 (Abmaj7 | D7alt)
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["ab/3"], duration: "q", midiValue: 56 },
            // Bar 20 (G7 | C7)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Bar 21 (G7/B | Bb7)
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            // Bar 22 (Am7 | Ab7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            // Bar 23 (G6 | E7alt)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["ab/3"], duration: "q", midiValue: 56 },
            // Bar 24 (Am7 | D7)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["gb/4"], duration: "q", midiValue: 66 }
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

// Esporta l'array degli esercizi per questa nuova categoria
if (window.exerciseData) {
    window.exerciseData.phrasing_harmony = bluesPhrasingHarmonyExercises; // Crea o sovrascrive
} else {
    window.exerciseData = {
        phrasing_harmony: bluesPhrasingHarmonyExercises
    };
}