const colorThemes = document.querySelectorAll('[name="theme"]');

// Store Theme
const storeTheme = theme => localStorage.setItem('theme', theme);

// Get Theme
const getTheme = () => localStorage.getItem('theme');

colorThemes.forEach(radioBtn => {
	radioBtn.addEventListener('change', () => {
		if (radioBtn.checked) {
			storeTheme(radioBtn.id);
		}
	});
});

// On Load
document.addEventListener('DOMContentLoaded', () => {
	const theme = getTheme();

	if (theme) {
		document.getElementById(theme).checked = true;
	}

	// Fallback for no :has() support
	document.documentElement.classList.add(theme);
});
