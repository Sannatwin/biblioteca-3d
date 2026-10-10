// ============================================================
//  Biblioteca 3D: catalogo
//  Modifica questo file per mettere i tuoi libri.
//  I dati qui sotto sono una DEMO con classici di pubblico dominio.
// ============================================================

// Titolo e sottotitolo della pagina
const LIBRARY = {
  title: "Biblioteca 3D",
  subtitle: "demo · due mobili, due lettori"
};

// Due mobili (o due lettori). Le chiavi "s" e "p" sono usate dal codice: cambia solo name e label.
const OWNERS = {
  s: { name: "Mobile A", label: "nel mobile A" },
  p: { name: "Mobile B", label: "nel mobile B" }
};

// Ripiani: id breve, mobile di appartenenza (o), nome mostrato nel catalogo
const SHELVES = [
  {id:"it", o:"s", name:"Classici italiani"},
  {id:"po", o:"s", name:"Poesia"},
  {id:"av", o:"s", name:"Avventura"},
  {id:"ra", o:"s", name:"Per ragazzi"},
  {id:"ro", o:"p", name:"Romanzi stranieri"},
  {id:"ru", o:"p", name:"Letteratura russa"},
  {id:"gi", o:"p", name:"Gialli e mistero"},
  {id:"sc", o:"p", name:"Scienza e filosofia"},
  {id:"ve", o:"p", name:"Collana: Viaggi straordinari"}
];

// B(ripiano, titolo, autore, opzioni)
// opzioni: ed = editore · n = numero volume · c = colore dorso · tc = colore testo
//          w = spessore · h = altezza · note = nota · series = 1 se fa parte di una collana
//          q = 1 se il titolo è da verificare (mostra "?")
const B = (s,t,a,o) => Object.assign({s,t,a},o||{});

const BOOKS = [
  // ---- Mobile A: classici italiani
  B("it","La Divina Commedia","Dante Alighieri",{c:"#5b2330",tc:"#e2c27a",w:.70,h:2.3}),
  B("it","I promessi sposi","Alessandro Manzoni",{c:"#1d2a4d",tc:"#e2c27a",w:.66,h:2.25}),
  B("it","Decameron","Giovanni Boccaccio",{c:"#6b3a1f",tc:"#f1e3c4",w:.72,h:2.25}),
  B("it","Il Principe","Niccolò Machiavelli",{c:"#1f2024",tc:"#d8443a",w:.26,h:2.0}),
  B("it","I Malavoglia","Giovanni Verga",{c:"#2f4a2c",tc:"#ecdfc6",w:.44,h:2.15}),
  B("it","Il fu Mattia Pascal","Luigi Pirandello",{c:"#e9e4d6",tc:"#2a2a2a",w:.40,h:2.1}),
  B("it","La coscienza di Zeno","Italo Svevo",{c:"#3b3560",tc:"#ecdfc6",w:.52,h:2.15}),
  B("it","Il piacere","Gabriele D'Annunzio",{c:"#7a1f22",tc:"#f3ece2",w:.46,h:2.15}),

  // ---- Mobile A: poesia
  B("po","Canti","Giacomo Leopardi",{c:"#23384f",tc:"#d9b45b",w:.34,h:2.1}),
  B("po","Canzoniere","Francesco Petrarca",{c:"#4a2a45",tc:"#e8c27a",w:.40,h:2.15}),
  B("po","Myricae","Giovanni Pascoli",{c:"#e8eef4",tc:"#2b4a8a",w:.28,h:2.0}),
  B("po","Alcyone","Gabriele D'Annunzio",{c:"#b9672c",tc:"#f3cd3c",w:.30,h:2.05}),

  // ---- Mobile A: avventura
  B("av","Il Corsaro Nero","Emilio Salgari",{c:"#1f2024",tc:"#d9b45b",w:.48,h:2.1}),
  B("av","Le tigri di Mompracem","Emilio Salgari",{c:"#a3392a",tc:"#f3ece2",w:.46,h:2.1}),
  B("av","L'isola del tesoro","Robert Louis Stevenson",{c:"#14363d",tc:"#e8c27a",w:.42,h:2.05}),
  B("av","Moby Dick","Herman Melville",{c:"#1c2d3f",tc:"#eef0f6",w:.66,h:2.2}),
  B("av","Le avventure di Tom Sawyer","Mark Twain",{c:"#e2d6b4",tc:"#1f3d6a",w:.38,h:2.05}),

  // ---- Mobile A: per ragazzi
  B("ra","Le avventure di Pinocchio","Carlo Collodi",{c:"#c8203e",tc:"#ffffff",w:.34,h:2.0}),
  B("ra","Cuore","Edmondo De Amicis",{c:"#2d3a40",tc:"#f1f1ee",w:.40,h:2.05}),
  B("ra","Alice nel paese delle meraviglie","Lewis Carroll",{c:"#6fb3d6",tc:"#1f3550",w:.30,h:2.0}),
  B("ra","Il libro della giungla","Rudyard Kipling",{c:"#3b4150",tc:"#d8e04a",w:.36,h:2.05,q:1}),

  // ---- Mobile B: romanzi stranieri
  B("ro","Orgoglio e pregiudizio","Jane Austen",{c:"#f2efe8",tc:"#2a2a2a",w:.46,h:2.1}),
  B("ro","Jane Eyre","Charlotte Brontë",{c:"#5a1a12",tc:"#e8c27a",w:.52,h:2.15}),
  B("ro","Cime tempestose","Emily Brontë",{c:"#29453b",tc:"#ecdfc6",w:.46,h:2.1}),
  B("ro","Grandi speranze","Charles Dickens",{c:"#3a1715",tc:"#d9b45b",w:.56,h:2.15}),
  B("ro","I miserabili","Victor Hugo",{c:"#1d1d1f",tc:"#f2f2f2",w:.80,h:2.25}),
  B("ro","Frankenstein","Mary Shelley",{c:"#1e2740",tc:"#d8e04a",w:.38,h:2.05}),
  B("ro","Il ritratto di Dorian Gray","Oscar Wilde",{c:"#e9e6dc",tc:"#7a1f22",w:.36,h:2.05}),
  B("ro","La metamorfosi","Franz Kafka",{c:"#6a2a7a",tc:"#f1c94a",w:.24,h:1.95}),

  // ---- Mobile B: letteratura russa
  B("ru","Guerra e pace","Lev Tolstoj",{c:"#7a2a1d",tc:"#f1e3c4",w:.90,h:2.3}),
  B("ru","Anna Karenina","Lev Tolstoj",{c:"#23384f",tc:"#e2c27a",w:.72,h:2.25}),
  B("ru","Delitto e castigo","Fëdor Dostoevskij",{c:"#2b2622",tc:"#d8443a",w:.62,h:2.2}),
  B("ru","I fratelli Karamazov","Fëdor Dostoevskij",{c:"#4e5054",tc:"#f1f1ee",w:.80,h:2.25}),
  B("ru","Le anime morte","Nikolaj Gogol'",{c:"#a8643a",tc:"#5a1a1a",w:.50,h:2.15}),

  // ---- Mobile B: gialli e mistero
  B("gi","Uno studio in rosso","Arthur Conan Doyle",{c:"#7a1a22",tc:"#d9b45b",w:.30,h:2.0}),
  B("gi","Il mastino dei Baskerville","Arthur Conan Doyle",{c:"#1f2b22",tc:"#d8e04a",w:.34,h:2.05}),
  B("gi","La pietra di luna","Wilkie Collins",{c:"#e7dcc0",tc:"#2a2015",w:.50,h:2.15}),
  B("gi","I delitti della Rue Morgue","Edgar Allan Poe",{c:"#1c2440",tc:"#f2f2f2",w:.26,h:2.0}),

  // ---- Mobile B: scienza e filosofia
  B("sc","L'origine delle specie","Charles Darwin",{c:"#ece6d2",tc:"#1a1a1a",w:.56,h:2.2}),
  B("sc","Dialogo sopra i due massimi sistemi","Galileo Galilei",{c:"#5a1a1e",tc:"#d9b45b",w:.50,h:2.2}),
  B("sc","Così parlò Zarathustra","Friedrich Nietzsche",{c:"#e8722e",tc:"#1f1f1f",w:.40,h:2.1}),
  B("sc","Meditazioni metafisiche","René Descartes",{c:"#b9bcc0",tc:"#7a1f22",w:.30,h:2.05}),

  // ---- Mobile B: una collana (mostrata in una riga sola nel catalogo)
  ...[
    "Cinque settimane in pallone",
    "Viaggio al centro della Terra",
    "Dalla Terra alla Luna",
    "Ventimila leghe sotto i mari",
    "Il giro del mondo in 80 giorni",
    "L'isola misteriosa",
    "Michele Strogoff",
    "Il raggio verde"
  ].map((t,k)=>B("ve","Viaggi straordinari","Jules Verne",{note:t,n:k+1,c:"#1f3d8a",tc:"#eef0f6",w:.40,h:2.2,series:1}))
];
