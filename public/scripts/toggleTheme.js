const systemTheme =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: light").matches;
const themeToggleButton = document.getElementById("theme-toggle-button");

const body = document.body;
const lightMode = systemTheme === true;
const defaultTheme = "dark";
let selectedTheme = localStorage.getItem("theme");

if (!selectedTheme) {
	localStorage.setItem("theme", lightMode ? "light" : "dark");
}

if (body) {
	body.setAttribute("data-theme", selectedTheme ?? defaultTheme);
	themeToggleButton.setAttribute("data-theme", selectedTheme ?? defaultTheme);
	themeToggleButton.addEventListener("click", toggleTheme);
}

function toggleTheme() {
	selectedTheme = localStorage.getItem("theme");

	if (selectedTheme === "light") {
		localStorage.setItem("theme", "dark");
		body.setAttribute("data-theme", "dark");
		themeToggleButton.setAttribute("data-theme", "dark");
		return;
	}

	localStorage.setItem("theme", "light");
	body.setAttribute("data-theme", "light");
	themeToggleButton.setAttribute("data-theme", "light");
}
