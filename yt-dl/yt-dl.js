const ytdl = require("ytdl-core-discord");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const fs = require("fs");

// List of YouTube video URLs or YouTube playlist URL
const inputUrls = ["https://www.youtube.com/shorts/bZwDCjYPP7A"];

ffmpeg.setFfmpegPath(ffmpegStatic);

const downloadMedia = async (url, mediaType) => {
	try {
		const info = await ytdl.getInfo(url);
		let format;
		let extension;

		if (mediaType === "audio") {
			format = ytdl.chooseFormat(info.formats, {
				filter: "audioonly",
				quality: "highestaudio"
			});
			extension = "mp3";
		} else if (mediaType === "video") {
			format = ytdl.chooseFormat(info.formats, {
				filter: "videoonly",
				quality: "highestvideo"
			});
			extension = format.container;
		} else {
			throw new Error(
				"Invalid media type specified. Must be 'audio' or 'video'."
			);
		}

		const videoTitle = info.videoDetails.title;
		const sanitizedTitle = videoTitle.replace(/[<>:"/\\|?*]+/g, "-"); // Remove illegal characters for filenames
		const outputFilename = `${sanitizedTitle}.${extension}`;

		return new Promise((resolve, reject) => {
			ffmpeg()
				.input(format.url)
				.format(extension)
				.output(outputFilename)
				.on("end", () => {
					console.log(`Media saved as ${outputFilename}`);
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
		const readline = require("readline");
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		rl.question(
			"Enter 'audio' or 'video' to choose the media type to download: ",
			async (mediaType) => {
				rl.close();

				await downloadMedia(url, mediaType);
			}
		);
	}
})();
