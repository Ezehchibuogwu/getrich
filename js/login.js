const login = document.querySelector(".loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

login.addEventListener("submit", loginValidation);

username.addEventListener("blur", usernameValidation, true);
password.addEventListener("blur", passwordValidation, true);

function loginValidation(e) {
  usernameValidation();
  passwordValidation();
  if (username.value === "" || password.value === "") {
    window.location = "login.html";
  } else {
    window.location = "dashboard.html";
  }
  e.preventDefault();
}

function usernameValidation() {
  const message = document.querySelector(".messageName");
  if (username.value === "") {
    message.textContent = "Username is required";
    message.style.color = "red";
    username.style.border = "1px solid red";
    username.focus();
    return false;
  } else {
    username.style.border = "1px solid green";
    message.textContent = "";
    return true;
  }
}

function passwordValidation() {
  const message = document.querySelector(".message");
  if (password.value === "") {
    message.textContent = "Password is required";
    message.style.color = "red";
    password.style.border = "1px solid red";
    password.focus();
    return false;
  } else {
    password.style.border = "1px solid green";
    message.textContent = "";
    return true;
  }
}
