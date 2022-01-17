document.addEventListener('pointerdown', function (event) {
	let ballElement = event.target.closest('.ball');

	if (!ballElement) return;

	let coords = ballElement.getBoundingClientRect();

	let shiftX = event.clientX - coords.left;
	let shiftY = event.clientY - coords.top;

	function ballMove(clientX, clientY) {
		let newX = clientX - shiftX;
		let newY = clientY - shiftY;

		ballElement.style.margin = 0;

		ballElement.style.left = newX + 'px';
		ballElement.style.top = newY + 'px';
	}

	ballMove(event.clientX, event.clientY);

	function onBallMove(event) {
		ballMove(event.clientX, event.clientY);
	}

	document.addEventListener('pointermove', onBallMove);
	document.addEventListener('pointerup', onPointerUp);

	function onPointerUp() {
		document.removeEventListener('pointermove', onBallMove);
	}

	event.preventDefault();

	document.ondragstart = function () {
		return false;
	}
})












