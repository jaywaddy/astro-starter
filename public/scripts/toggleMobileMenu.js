const menuToggleButton = document.getElementById("menu-toggle-button");
const body = document.body;

if (body) {
	menuToggleButton.addEventListener("click", toggleMenu);
}

function toggleMenu() {
	if (menuToggleButton.dataset.isChecked === "true") {
		menuToggleButton.setAttribute("data-is-checked", "false");
		return;
	}

	menuToggleButton.setAttribute("data-is-checked", "true");
}
