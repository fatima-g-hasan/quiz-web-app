const quizzes = {
  html: {
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        answer: "a",
      },
      {
        question: "Which tag is used to create a numbered list in HTML?",
        options: ["<ul>", "<ol>", "<li>"],
        answer: "b",
      },
      {
        question: "What does the <a> tag in HTML define?",
        options: [
          "An anchor (link to another page or section)",
          "A bold text element",
          "An image placeholder",
        ],
        answer: "a",
      },
      {
        question: "Which HTML tag is used to define a table row?",
        options: ["<td>", "<th>", "<tr>"],
        answer: "c",
      },
      {
        question: "What is a semantic HTML element?",
        options: [
          "An element that describes its content meaningfully",
          "An element that only provides layout styling",
          "An element that has no content and is just used for layout",
        ],
        answer: "a",
      },
    ],
  },
  css: {
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
        ],
        answer: "a",
      },
      {
        question:
          "Which property is used to change the background color in CSS?",
        options: ["background-color", "color", "background-image"],
        answer: "a",
      },
      {
        question: "How do you make a list appear horizontally in CSS?",
        options: [
          "display: block;",
          "display: inline;",
          "list-style-type: none;",
        ],
        answer: "b",
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style"],
        answer: "a",
      },
      {
        question: "Which CSS property is used to add space between elements?",
        options: ["margin", "padding", "border"],
        answer: "a",
      },
    ],
  },
  js: {
    questions: [
      {
        question: "What is JavaScript used for in web development?",
        options: [
          "Styling web pages",
          "Structuring content",
          "Making web pages interactive",
        ],
        answer: "c",
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["let", "define", "create"],
        answer: "a",
      },
      {
        question: "What will console.log(2 + '2') output?",
        options: ["4", '"22"', "NaN"],
        answer: "b",
      },
      {
        question: "What does document.getElementById() do?",
        options: [
          "Creates a new element",
          "Finds an element by its ID",
          "Deletes an element",
        ],
        answer: "b",
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["#", "//", "<!-- -->"],
        answer: "b",
      },
    ],
  },
};

localStorage.setItem("quizzes", JSON.stringify(quizzes));

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form");
  const scoreDisplay = document.getElementById("score-output");

  const storedQuizzes = JSON.parse(localStorage.getItem("quizzes"));

  if (!storedQuizzes) {
    alert("No quizzes found. Please add quizzes to localStorage.");
    return;
  }

  let quizType = "html";
  const title = document.title.toLowerCase();
  if (title.includes("css")) {
    quizType = "css";
  } else if (title.includes("js")) {
    quizType = "js";
  }

  const currentQuiz = storedQuizzes[quizType];
  if (!currentQuiz) {
    alert("Quiz not found!");
    return;
  }

  form.innerHTML = "";

  for (let i = 0; i < currentQuiz.questions.length; i++) {
    const q = currentQuiz.questions[i];

    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionText = document.createElement("p");
    questionText.textContent = i + 1 + ". " + q.question;
    questionDiv.appendChild(questionText);

    const optionLetters = ["a", "b", "c"];
    for (let j = 0; j < q.options.length; j++) {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + (i + 1);
      input.value = optionLetters[j];

      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + q.options[j]));

      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement("br"));
    }

    form.appendChild(questionDiv);
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let score = 0;

    for (let i = 0; i < currentQuiz.questions.length; i++) {
      const selected = document.querySelector(
        'input[name="q' + (i + 1) + '"]:checked'
      );
      if (selected && selected.value === currentQuiz.questions[i].answer) {
        score++;
      }
    }

    scoreDisplay.textContent = "You scored " + score + "/5";

    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      const allScores = JSON.parse(localStorage.getItem("scores")) || {};
      if (!allScores[user.email]) {
        allScores[user.email] = {};
      }
      allScores[user.email][quizType] = score;
      localStorage.setItem("scores", JSON.stringify(allScores));
    }
  });
});
