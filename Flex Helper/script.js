// Select all the radio button groups
const flexDirectionRadios = document.querySelectorAll(
	'input[name="flex-direction"]'
);
const alignItemsRadios = document.querySelectorAll('input[name="align-items"]');
const justifyContentRadios = document.querySelectorAll(
	'input[name="justify-content"]'
);

// Select the square element
const square = document.querySelector(".square-parent");

// Set up event listeners for each radio button group
flexDirectionRadios.forEach((radio) => {
	radio.addEventListener("click", () => {
		if (radio.id === "flex-row") {
			square.style.flexDirection = "row";
		} else if (radio.id === "flex-col") {
			square.style.flexDirection = "column";
		}
	});
});

alignItemsRadios.forEach((radio) => {
	radio.addEventListener("click", () => {
		if (radio.id === "align-flex-start") {
			square.style.alignItems = "flex-start";
		} else if (radio.id === "align-center") {
			square.style.alignItems = "center";
		} else if (radio.id === "align-flex-end") {
			square.style.alignItems = "flex-end";
		}
	});
});

justifyContentRadios.forEach((radio) => {
	radio.addEventListener("click", () => {
		if (radio.id === "space-around") {
			square.style.justifyContent = "space-around";
		} else if (radio.id === "space-between") {
			square.style.justifyContent = "space-between";
		} else if (radio.id === "space-evenly") {
			square.style.justifyContent = "space-evenly";
		} else if (radio.id === "center") {
			square.style.justifyContent = "center";
		}
	});
});
