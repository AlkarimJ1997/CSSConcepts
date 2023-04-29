const root = document.documentElement;
const heading = document.querySelector('h1');

const setCharacters = () => {
	const characters = heading.textContent.split('');

	root.style.setProperty('--typewriterCharacters', characters.length);
};

setCharacters();
