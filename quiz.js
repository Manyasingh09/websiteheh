/* ===================================================================
   THORNBOUND — Compatibility Quiz logic
   Reads THORNBOUND_QUIZ from data/quiz-data.js.
   Scores two axes per answer: route (main result) and discipline
   (used only to unlock the hidden Dorian result).
   =================================================================== */

(function () {
  const quizData = window.THORNBOUND_QUIZ;
  if (!quizData) return;

  const state = {
    current: 0,
    routeScores: {},
    disciplineScores: { wardcraft: 0, alchemy: 0, illusion: 0, statecraft: 0 }
  };

  const els = {
    stage: document.getElementById("quizStage"),
    progressFill: document.getElementById("progressFill"),
    progressLabel: document.getElementById("progressLabel")
  };

  function recordAnswer(answer) {
    state.routeScores[answer.route] = (state.routeScores[answer.route] || 0) + 1;
    state.disciplineScores[answer.discipline] += 1;
  }

  function topRoute() {
    let best = null, bestScore = -1;
    for (const route in state.routeScores) {
      if (state.routeScores[route] > bestScore) {
        best = route;
        bestScore = state.routeScores[route];
      }
    }
    return best;
  }

  /* Dorian unlocks only when Illusion is the clear dominant discipline
     (strictly ahead of every other discipline) — a deliberate high bar
     so he stays a rare result, per the "secret route" framing. */
  function checkHiddenRoute() {
    const d = state.disciplineScores;
    const illusion = d.illusion;
    const others = [d.wardcraft, d.alchemy, d.statecraft];
    const clearLead = others.every(score => illusion - score >= 3);
    return clearLead ? "dorian" : null;
  }

  function renderQuestion(index) {
    const q = quizData.questions[index];
    const pct = Math.round((index / quizData.questions.length) * 100);
    els.progressFill.style.width = pct + "%";
    els.progressLabel.textContent = "Entry " + (index + 1) + " of " + quizData.questions.length;

    const answersHtml = q.answers.map((a, i) => (
      '<button class="quiz-answer" data-index="' + i + '">' +
        '<span class="quiz-answer__seal" aria-hidden="true"></span>' +
        '<span>' + a.text + '</span>' +
      '</button>'
    )).join("");

    els.stage.innerHTML =
      '<p class="eyebrow">Compatibility reading</p>' +
      '<h2 class="quiz-question">' + q.text + '</h2>' +
      '<div class="quiz-answers">' + answersHtml + '</div>';

    els.stage.querySelectorAll(".quiz-answer").forEach(btn => {
      btn.addEventListener("click", function () {
        const answer = q.answers[Number(this.dataset.index)];
        recordAnswer(answer);
        state.current += 1;
        if (state.current < quizData.questions.length) {
          renderQuestion(state.current);
        } else {
          renderResult();
        }
      });
    });
  }

  function renderResult() {
    els.progressFill.style.width = "100%";
    els.progressLabel.textContent = "Reading complete";

    const hidden = checkHiddenRoute();
    const routeKey = hidden || topRoute();
    const result = quizData.results[routeKey];

    els.stage.innerHTML =
      '<p class="eyebrow">' + (result.hidden ? "An unlisted entry" : "Your compatibility reading") + '</p>' +
      '<h2 class="quiz-result__name">' + result.name + '</h2>' +
      '<p class="quiz-result__house">' + result.house + ' — ' + result.sigil + '</p>' +
      '<p class="quiz-result__tagline">' + result.tagline + '</p>' +
      '<div class="quiz-result__actions">' +
        '<button class="seal-button" id="retakeBtn">Retake the reading</button>' +
        '<a class="seal-button seal-button--ghost" href="houses.html">See the Houses</a>' +
      '</div>';

    document.getElementById("retakeBtn").addEventListener("click", resetQuiz);
  }

  function resetQuiz() {
    state.current = 0;
    state.routeScores = {};
    state.disciplineScores = { wardcraft: 0, alchemy: 0, illusion: 0, statecraft: 0 };
    renderQuestion(0);
  }

  resetQuiz();
})();
