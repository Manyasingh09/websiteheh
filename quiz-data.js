/* ===================================================================
   THORNBOUND — Compatibility Quiz data
   ✎ CUSTOMIZE: edit question text and answer labels freely here.
   Each answer has a "route" tag (which love interest it points to)
   and a "discipline" tag (Wardcraft / Alchemy / Illusion / Statecraft).
   The quiz scores both — route decides your main result, discipline
   is used only to unlock Dorian's hidden result (see js/quiz.js).
   =================================================================== */

const THORNBOUND_QUIZ = {

  questions: [
    {
      id: "q1",
      text: "Someone at court says something cutting about your family, in front of witnesses. What's your first instinct?",
      answers: [
        { text: "Meet it head-on — say exactly what you think, consequences later.", route: "voss", discipline: "alchemy" },
        { text: "Deflect with charm until you can address it privately.", route: "dorian", discipline: "illusion" },
        { text: "File it away. You'll settle this on your own terms, later.", route: "rennmark", discipline: "statecraft" },
        { text: "Step between them and whoever they insulted.", route: "rhien", discipline: "wardcraft" }
      ]
    },
    {
      id: "q2",
      text: "What's more unbearable: being misunderstood, or being predictable?",
      answers: [
        { text: "Misunderstood. I'd rather be unpredictable and honest than easy to read wrong.", route: "cassian", discipline: "statecraft" },
        { text: "Predictable. If people can map you, they can use you.", route: "dorian", discipline: "illusion" },
        { text: "Neither — I've made peace with being underestimated on purpose.", route: "voss", discipline: "alchemy" },
        { text: "Being unable to protect the people who trust me.", route: "rhien", discipline: "wardcraft" }
      ]
    },
    {
      id: "q3",
      text: "Pick the kind of tension you'd actually want in a relationship:",
      answers: [
        { text: "Slow burn — years of almost, undone by one honest conversation.", route: "cassian", discipline: "statecraft" },
        { text: "Forbidden — the stakes make every small choice matter.", route: "rhien", discipline: "wardcraft" },
        { text: "Built on trust first, romance a very close second.", route: "liora", discipline: "illusion" },
        { text: "Quiet pursuit — someone more controlled than me, finally choosing to want something.", route: "rennmark", discipline: "statecraft" }
      ]
    },
    {
      id: "q4",
      text: "A friend asks you to cover for a mistake that isn't fully their fault. You:",
      answers: [
        { text: "Cover for them without hesitation — loyalty first, explanations later.", route: "liora", discipline: "wardcraft" },
        { text: "Ask exactly what happened before deciding anything.", route: "voss", discipline: "alchemy" },
        { text: "Handle it quietly, through channels no one else notices.", route: "dorian", discipline: "illusion" },
        { text: "Calculate the political cost of covering versus not.", route: "rennmark", discipline: "statecraft" }
      ]
    },
    {
      id: "q5",
      text: "Which do you trust more: a person's words, or their tailoring?",
      answers: [
        { text: "Tailoring. People lie; the details they can't help revealing don't.", route: "dorian", discipline: "illusion" },
        { text: "Words — but only the ones they didn't mean to say out loud.", route: "cassian", discipline: "statecraft" },
        { text: "Neither. Watch what they protect when they think no one's looking.", route: "rhien", discipline: "wardcraft" },
        { text: "Results. Everything else is decoration.", route: "voss", discipline: "alchemy" }
      ]
    },
    {
      id: "q6",
      text: "Someone finally, unexpectedly, lets their guard down around you. Your reaction?",
      answers: [
        { text: "Treat it as the rare thing it is — don't push, just stay steady.", route: "rennmark", discipline: "wardcraft" },
        { text: "Match it immediately — vulnerability deserves vulnerability.", route: "liora", discipline: "illusion" },
        { text: "Feel oddly moved that they chose you specifically, and say so.", route: "rhien", discipline: "wardcraft" },
        { text: "Notice everything and say nothing — not yet.", route: "dorian", discipline: "illusion" }
      ]
    },
    {
      id: "q7",
      text: "Which Ambition speaks to you most, if you're honest?",
      answers: [
        { text: "Restoration — fix what's broken, even if it takes years.", route: "cassian", discipline: "statecraft" },
        { text: "The Throne — real power, not the appearance of it.", route: "rennmark", discipline: "statecraft" },
        { text: "Reckoning — someone has to answer for this.", route: "voss", discipline: "alchemy" },
        { text: "Departure — I want out, on my own terms.", route: "rhien", discipline: "wardcraft" }
      ]
    },
    {
      id: "q8",
      text: "Last one — what unsettles you more: a stranger who's too easy to read, or one you can't read at all?",
      answers: [
        { text: "Too easy to read. Nobody's actually that simple.", route: "dorian", discipline: "illusion" },
        { text: "Unreadable. I need to know what I'm dealing with.", route: "voss", discipline: "alchemy" },
        { text: "Neither unsettles me — I just adjust and watch.", route: "liora", discipline: "wardcraft" },
        { text: "Unreadable, but I find I want to solve it anyway.", route: "cassian", discipline: "statecraft" }
      ]
    }
  ],

  /* ✎ CUSTOMIZE: result copy per route. Keep "hidden: true" on dorian —
     the quiz logic (js/quiz.js) only shows him if illusion-leaning
     answers cross a threshold, regardless of his route score. */
  results: {
    cassian: {
      name: "Crown Prince Cassian Aldreth",
      house: "House Aldreth",
      tagline: "Enemies to lovers, built on an old misunderstanding neither of you has corrected yet.",
      sigil: "A white stag beneath a crown"
    },
    rhien: {
      name: "Captain Rhien Kastel",
      house: "House Kastel",
      tagline: "Scandalous, taboo, and entirely his idea of honor is what makes it dangerous.",
      sigil: "Minor gentry — no formal sigil"
    },
    voss: {
      name: "Professor Ilyren Voss",
      house: "House Voss (untitled)",
      tagline: "Blunt, unglamorous, and refreshingly uninterested in playing court games.",
      sigil: "An open book and a flame (defunct)"
    },
    liora: {
      name: "Liora Dansworth",
      house: "House Dansworth",
      tagline: "Friends first — trust built long before either of you calls it anything else.",
      sigil: "A rising sun over open water"
    },
    rennmark: {
      name: "Duke Aldous Rennmark",
      house: "House Rennmark",
      tagline: "Quiet, controlled, and — rarest of all — the one doing the pursuing.",
      sigil: "A closed ledger and a key"
    },
    dorian: {
      name: "??? ",
      house: "House Aldreth (unbound)",
      tagline: "You read rooms other people don't even know are being read. Some things aren't meant to surface on a first pass.",
      sigil: "Unbound — no public sigil",
      hidden: true
    }
  }
};
