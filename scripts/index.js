const adminEmail = "admin@quiz.com";
const adminPassword = "admin123";

const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
});
