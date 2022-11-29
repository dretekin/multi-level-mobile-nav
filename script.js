const navBtn = document.querySelector(".nav-btn");
const nav = document.getElementById("nav");
const navItems = document.querySelector(".nav-items");
const subNavOpenBtns = document.querySelectorAll(".sub-nav-btn_open");
const subNavCloseBtns = document.querySelectorAll(".sub-nav-btn_close");

let resetNavState = false;

navBtn.addEventListener("click", function () {
	if (nav.classList.contains("is--hidden")) {
		nav.classList.remove("is--hidden");
		return;
	}

	if (!nav.classList.contains("is--hidden")) {
		nav.classList.add("is--hidden");

		const subNavIsOpen = document.querySelector(".is--open");
		if (subNavIsOpen) {
			// reset opened sub nav to it default position
			if (resetNavState) subNavIsOpen.classList.add("is--hidden");

			setTimeout(function () {
				subNavIsOpen.classList.remove("is--open");
			}, 600);
			/////////////////
		}

		if (!subNavIsOpen || resetNavState) {
			navItems.classList.remove("is--hidden");
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
