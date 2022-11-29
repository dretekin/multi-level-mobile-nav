const navBtn = document.querySelector(".nav-btn");
const nav = document.getElementById("nav");
const navItems = document.querySelector(".nav-items");
const subNavBtnOpen = document.querySelector(".sub-nav-btn_open");
const subNavBtnClose = document.querySelector(".sub-nav-btn_close");

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

subNavBtnOpen.addEventListener("click", openSubNav);
function openSubNav() {
	const subNav = this.nextElementSibling;

	subNav.classList.toggle("is--hidden");

	navItems.classList.toggle("is--hidden");

	subNav.classList.add("is--open");
}

subNavBtnClose.addEventListener("click", closeSubNav);
function closeSubNav() {
	const subNav = this.parentElement;

	subNav.classList.toggle("is--hidden");

	navItems.classList.toggle("is--hidden");

	subNav.classList.remove("is--open");
}
