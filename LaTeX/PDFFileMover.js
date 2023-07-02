const fs = require("fs");
const path = require("path");

const sourceFolder = __dirname; // Current folder
const destinationFolder = path.join(__dirname, "PDFs"); // Destination folder for PDF files

function searchAndMovePDFs(folder) {
	// Read the contents of the folder
	fs.readdir(folder, (err, files) => {
		if (err) {
			console.error(`Error reading folder ${folder}:`, err);
			return;
		}

		// Iterate over each file
		files.forEach((file) => {
			const filePath = path.join(folder, file);

			// Check if it's a directory
			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error(`Error stating file ${filePath}:`, err);
					return;
				}

				if (stats.isDirectory()) {
					// Recursive call for subdirectories
					searchAndMovePDFs(filePath);
				} else if (path.extname(file).toLowerCase() === ".pdf") {
					// Move the PDF file to the destination folder
					const destinationPath = path.join(destinationFolder, file);

					fs.rename(filePath, destinationPath, (err) => {
						if (err) {
							console.error(`Error moving file ${filePath}:`, err);
							return;
						}

						console.log(`Moved ${filePath} to ${destinationPath}`);
					});
				}
			});
		});
	});
}

// Create the destination folder if it doesn't exist
if (!fs.existsSync(destinationFolder)) {
	fs.mkdirSync(destinationFolder);
}

// Start searching and moving PDF files
searchAndMovePDFs(sourceFolder);
