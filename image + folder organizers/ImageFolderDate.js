const fs = require("fs");
const path = require("path");

const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".xcf"]; // Add more extensions if needed

function isImageFile(file) {
	const extension = path.extname(file).toLowerCase();
	return imageExtensions.includes(extension);
}

function getCreationDate(file) {
	const { birthtime } = fs.statSync(file);
	const year = birthtime.getFullYear();
	const month = String(birthtime.getMonth() + 1).padStart(2, "0");
	const day = String(birthtime.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function moveFoldersToSibling(sourceFolderPath) {
	fs.readdir(sourceFolderPath, (err, files) => {
		if (err) {
			console.error(`Error reading folder: ${sourceFolderPath}`);
			return;
		}

		files.forEach((file) => {
			const filePath = path.join(sourceFolderPath, file);

			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error(`Error getting file stats: ${filePath}`);
					return;
				}

				if (stats.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(file)) {
					const destinationPath = path.join(
						path.dirname(sourceFolderPath),
						file
					);

					fs.rename(filePath, destinationPath, (err) => {
						if (err) {
							console.error(`Error moving folder: ${filePath}`);
						} else {
							console.log(`Moved folder: ${filePath} -> ${destinationPath}`);
						}
					});
				}
			});
		});
	});
}

function scanFolder(folderPath) {
	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(`Error reading folder: ${folderPath}`);
			return;
		}

		files.forEach((file) => {
			const filePath = path.join(folderPath, file);

			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error(`Error getting file stats: ${filePath}`);
					return;
				}

				if (stats.isDirectory()) {
					// Recursively scan subfolders
					scanFolder(filePath);
				} else if (stats.isFile() && isImageFile(file)) {
					const creationDate = getCreationDate(filePath);
					const destinationFolder = path.join(folderPath, creationDate);

					if (!fs.existsSync(destinationFolder)) {
						fs.mkdirSync(destinationFolder, { recursive: true });
					}

					const destinationPath = path.join(destinationFolder, file);

					fs.rename(filePath, destinationPath, (err) => {
						if (err) {
							console.error(`Error moving file: ${filePath}`);
						} else {
							console.log(`Moved file: ${filePath} -> ${destinationPath}`);
						}
					});
				}
			});
		});

		moveFoldersToSibling(folderPath);
	});
}

const currentFolderPath = __dirname; // Assumes the script is located in the target folder
scanFolder(currentFolderPath);
