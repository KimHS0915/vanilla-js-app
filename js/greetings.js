const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const logoutBtn = document.querySelector("#logoutBtn");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  window.location.reload();
};

const onLogoutSubmit = () => {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
};

const paintGreetings = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const paintDisplay = () => {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
    logoutBtn.addEventListener("click", onLogoutSubmit);
  }
};

paintDisplay();
