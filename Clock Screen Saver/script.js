function updateTime() {
	const now = new Date();
	const year = now.getFullYear();
	const month = (now.getMonth() + 1).toString().padStart(2, "0");
	const day = now.getDate().toString().padStart(2, "0");
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const seconds = now.getSeconds().toString().padStart(2, "0");

	const timeElement = document.getElementById("time");
	timeElement.textContent = `${hours}:${minutes}:${seconds}`;

	const dateElement = document.getElementById("date");
	dateElement.textContent = `${day} | ${month} . ${year}`;
}

setInterval(updateTime, 1000); // Call updateTime() every second
