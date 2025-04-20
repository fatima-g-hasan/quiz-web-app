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
});
