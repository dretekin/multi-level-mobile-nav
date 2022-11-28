const easing = BezierEasing(0.42, 0, 0.58, 1);

const container = document.querySelector(".container");
const box = document.querySelector(".box");

let distance =
		container.getBoundingClientRect().width - box.getBoundingClientRect().width,
	start,
	runtime,
	relDistProg = 0,
	duration = 1000,
	count = 0,
	direction = 0;

function forward(timestamp) {
	if (!start) {
		start = timestamp;
	}

	runtime = timestamp - start;

	let relTimeProg = runtime / duration;

	let relEaseProg = easing(relTimeProg);

	relDistProg = distance * Math.min(relEaseProg, 1);

	box.style.transform = `translateX(${relDistProg}px)`;

	if (runtime < duration) {
		requestAnimationFrame(forward);
	} else {
		start = undefined;
		requestAnimationFrame(reverse);
	}
}

function reverse(timestamp) {
	if (!start) {
		start = timestamp;
	}

	runtime = timestamp - start;

	let relTimeProg = runtime / duration;

	let relEaseProg = easing(relTimeProg);

	relDistProg = distance - distance * Math.min(relEaseProg, 1);

	box.style.transform = `translateX(${relDistProg}px)`;

	if (runtime < duration) {
		requestAnimationFrame(reverse);
	} else {
		start = undefined;

		requestAnimationFrame(forward);
	}
}

requestAnimationFrame(forward);
