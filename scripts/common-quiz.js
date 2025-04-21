document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form");
  const scoreDisplay = document.getElementById("score-output");

  const answersKey = {
    html: ["a", "b", "a", "c", "a"],
    css: ["a", "a", "b", "a", "a"],
    js: ["c", "a", "b", "b", "b"],
  };

  const pageTitle = document.title.toLowerCase();
  let currentQuiz = "html";
  if (pageTitle.includes("css")) {
    currentQuiz = "css";
  } else if (pageTitle.includes("js")) {
    currentQuiz = "js";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;
    const correctAnswers = answersKey[currentQuiz];

    for (let i = 1; i <= 5; i++) {
      const selectedOption = document.querySelector(
        `input[name="q${i}"]:checked`
      );
      if (selectedOption && selectedOption.value === correctAnswers[i - 1]) {
        score++;
      }
    }

    scoreDisplay.textContent = `You scored ${score}/5`;

    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      const allScores = JSON.parse(localStorage.getItem("scores")) || {};
      if (!allScores[user.email]) {
        allScores[user.email] = {};
      }

      allScores[user.email][currentQuiz] = score;

      localStorage.setItem("scores", JSON.stringify(allScores));
    }
  });
});
