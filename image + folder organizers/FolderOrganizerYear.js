const fs = require("fs");
const path = require("path");

function organizeFoldersByYear() {
	const currentFolderPath = __dirname; // Assumes the script is located in the target folder

	fs.readdir(currentFolderPath, (err, files) => {
		if (err) {
			console.error(`Error reading folder: ${currentFolderPath}`);
			return;
		}

		const yearFolders = {};

		files.forEach((file) => {
			const filePath = path.join(currentFolderPath, file);

			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error(`Error getting file stats: ${filePath}`);
					return;
				}

				if (stats.isDirectory()) {
					const year = file.substr(0, 4);

					if (!isNaN(year)) {
						if (!(year in yearFolders)) {
							const yearFolderPath = path.join(currentFolderPath, year);
							fs.mkdirSync(yearFolderPath);
							yearFolders[year] = yearFolderPath;
						}

						const destinationPath = path.join(yearFolders[year], file);

						fs.rename(filePath, destinationPath, (err) => {
							if (err) {
								console.error(`Error moving folder: ${filePath}`);
							} else {
								console.log(`Moved folder: ${filePath} -> ${destinationPath}`);
							}
						});
					}
				}
			});
		});
	});
}

organizeFoldersByYear();
