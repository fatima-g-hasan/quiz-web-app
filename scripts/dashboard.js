document.addEventListener("DOMContentLoaded", function () {
  const adminEmail = "admin@quiz.com";
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser || loggedInUser.email !== adminEmail) {
    alert("Access denied. Admins only.");
    window.location.href = "../index.html";
    return;
  }
});
