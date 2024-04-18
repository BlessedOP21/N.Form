const wrapper = document.querySelector(".wrapper");
const register = document.querySelector(".Register-form");
const login = document.querySelector(".Login-form");
const logeen = document.querySelector(".login");

register.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

logeen.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
