const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const fs = require("fs");

// List of YouTube video URLs or YouTube playlist URL
const inputUrls = [
	"https://www.youtube.com/watch?v=2bKB_oe9wmA",
	"https://www.youtube.com/watch?v=mJ_zobQC9fY"
];

ffmpeg.setFfmpegPath(ffmpegStatic);

const downloadAudio = async (url) => {
	try {
		const info = await ytdl.getInfo(url);
		const audioFormat = ytdl.chooseFormat(info.formats, {
			filter: "audioonly",
			quality: "highestaudio"
		});
		const videoTitle = info.videoDetails.title;
		const sanitizedTitle = videoTitle.replace(/[<>:"/\\|?*]+/g, "-"); // Remove illegal characters for filenames
		const outputFilename = `${sanitizedTitle}.mp3`;

		return new Promise((resolve, reject) => {
			ffmpeg()
				.input(audioFormat.url)
				.format("mp3")
				.output(outputFilename)
				.on("end", () => {
					console.log(`Audio saved as ${outputFilename}`);
					resolve();
				})
				.on("error", (error) => {
					console.error("An error occurred:", error);
					reject(error);
				})
				.run();
		});
	} catch (error) {
		console.error("An error occurred:", error);
	}
};

(async () => {
	for (const url of inputUrls) {
		await downloadAudio(url);
	}
})();
