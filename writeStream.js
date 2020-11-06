const fs = require('fs');

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8");
// writeStream.write("hello");
// writeStream.write(" world!\n");

// Created new file in assets folder with the text "hello world!"

// readStream.on("data", data => {
//     writeStream.write(data);
// });


readStream.pipe(writeStream) // this will write it to the myFile.txt file
