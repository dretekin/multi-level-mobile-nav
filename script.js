const navBtn = document.querySelector(".nav-btn");
const nav = document.getElementById("nav");
const navItems = document.querySelector(".nav-items");
const subNavOpenBtns = document.querySelectorAll(".sub-nav-btn_open");
const subNavCloseBtns = document.querySelectorAll(".sub-nav-btn_close");

navBtn.addEventListener("click", function () {
	nav.classList.toggle("is--hidden");

	if (nav.classList.contains("is--hidden")) {
		navItems.classList.remove("is--hidden");

		const openedSubNav = document.querySelector(".is--open");
		if (openedSubNav) {
			console.log(openedSubNav);

			openedSubNav.classList.add("is--hidden");

			setTimeout(function () {
				openedSubNav.classList.remove("is--open");
			}, 600);
		}
	}
});

subNavOpenBtns.forEach(function (subNavOpenBtn) {
	subNavOpenBtn.addEventListener("click", openSubNav);
});

function openSubNav() {
	const subNav = this.nextElementSibling;

	subNav.classList.remove("is--hidden");

	navItems.classList.add("is--hidden");

	subNav.classList.add("is--open");
}

subNavCloseBtns.forEach(function (subNavCloseBtn) {
	subNavCloseBtn.addEventListener("click", closeSubNav);
});

function closeSubNav() {
	const subNav = this.parentElement;

	subNav.classList.add("is--hidden");

	navItems.classList.remove("is--hidden");

	subNav.classList.remove("is--open");
}
