let burgerIcon = document.querySelector("#burgerIcon");
let closeBurger = document.querySelector("#closeIcon");
let burgerMenu = document.querySelector("#burgerMenu");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
})