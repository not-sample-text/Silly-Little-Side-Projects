import { publish } from "ntfy";

const TOPIC = "8tupw1yfzZULtNvp8i9TFrI902iM81";

function sendMessage(messageDetails) {
	messageDetails.topic = TOPIC;
	publish(messageDetails);
}

function scheduleMessage(specificHour, specificMinute, messageDetails) {
	let currentTime = new Date();
	let targetTime = new Date();

	// Set the target time for today
	targetTime.setHours(specificHour, specificMinute, 0, 0);

	// If the target time has already passed today, set it for tomorrow
	if (currentTime > targetTime) {
		targetTime.setDate(targetTime.getDate() + 1);
	}

	let timeUntilTarget = targetTime - currentTime;

	// Log the time left until the message is sent
	console.log(
		`Time left until message is sent: ${Math.floor(
			timeUntilTarget / 1000 / 60
		)} minutes`
	);

	setTimeout(() => sendMessage(messageDetails), timeUntilTarget);
}

// Schedule messages for 6:30 PM and 10:00 PM
scheduleMessage(18, 35, {
	message: "Du-te ma odata nu mai sta sa citesti",
	tags: ["cursing_face"],
	title: "Mars la lucru!"
});

scheduleMessage(22, 0, {
	message: "Amu fa curat si pleaca",
	tags: ["money_mouth_face"],
	title: "Gata cu facut de bani!"
});
