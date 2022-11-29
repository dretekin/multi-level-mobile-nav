const navBtn = document.querySelector(".nav-btn");
const nav = document.getElementById("nav");
const navItems = document.querySelector(".nav-items");

navBtn.addEventListener("click", function () {
	nav.classList.toggle("is--hidden");
});
