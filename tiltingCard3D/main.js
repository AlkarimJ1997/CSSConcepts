const pre = document.querySelector('pre');

const rotateElement = (e, element) => {
	const { clientX: x, clientY: y } = e;
	const middleX = window.innerWidth / 2;
	const middleY = window.innerHeight / 2;

	const offsetX = ((x - middleX) / middleX) * 100;
	const offsetY = ((y - middleY) / middleY) * 100 * -1;

	// Have to flip the values because in CSS, you rotate the opposite direction
	element.style.setProperty('--rotateX', `${offsetY}deg`);
	element.style.setProperty('--rotateY', `${offsetX}deg`);
};

document.addEventListener('mousemove', e => rotateElement(e, pre));
