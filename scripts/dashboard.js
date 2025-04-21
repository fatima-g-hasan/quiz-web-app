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

  let total = 0;
  if (typeof htmlScore === "number") {
    total += htmlScore;
  } else {
    total += 0;
  }

  if (typeof cssScore === "number") {
    total += cssScore;
  } else {
    total += 0;
  }

  if (typeof jsScore === "number") {
    total += jsScore;
  } else {
    total += 0;
  }

  let totalScore;
  if (total > 0) {
    totalScore = total;
  } else {
    totalScore = "-";
  }

  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${userEmail}<td>
  <td>${htmlScore}<td>
  <td>${cssScore}<td>
  <td>${jsScore}<td>
  <td>${totalScore}<td>`;

  tableBody.appendChild(row);
});
