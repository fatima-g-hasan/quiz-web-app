document.addEventListener("DOMContentLoaded", function () {
  const adminEmail = "admin@quiz.com";
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser || loggedInUser.email !== adminEmail) {
    alert("Access denied. Admins only.");
    window.location.href = "../index.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const scores = JSON.parse(localStorage.getItem("scores")) || {};

  const tableBody = document.getElementById("table-body");

  users.forEach(function (user) {
    const userEmail = user.email;
    const userScores = scores[userEmail] || {};
  });

  let htmlScore;
  if (userScores.html !== undefined) {
    htmlScore = userScores.html;
  } else {
    htmlScore = "-";
  }

  let cssScore;
  if (userScores.css !== undefined) {
    cssScore = userScores.css;
  } else {
    cssScore = "-";
  }

  let jsScore;
  if (userScores.js !== undefined) {
    jsScore = userScores.js;
  } else {
    jsScore = "-";
  }
});
