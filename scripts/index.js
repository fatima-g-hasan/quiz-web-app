const adminEmail = "admin@quiz.com";
const adminPassword = "admin123";

const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(function (user) {
    return user.email === email;
  });

  if (userExists) {
    alert("User already registered!");
  } else {
    users.push({ email: email, password: password, scores: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Now log in.");
    registerForm.reset();
  }
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email === adminEmail && password === adminPassword) {
    localStorage.setItem("loggedInUser", JSON.stringify({ email: email }));
    window.location.href = "pages/dashboard.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (matchedUser) {
    localStorage.setItem("loggedInUser", JSON.stringify({ email: email }));
    window.location.href = "/pages/home.html";
  } else {
    alert("Invalid email or password");
  }
});
