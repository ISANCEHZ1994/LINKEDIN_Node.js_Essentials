const fs = require('fs');

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8") // first agrument is a path to file that should be read

let fileText = ""

console.log("type something...");
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileText += data 
});

readStream.once("data", data => {
    console.log(data);
})

readStream.on("end", () => {
    console.log("finsihed the program!")
    console.log(`In total I read ${fileText.length - 1} characters of text!`)
})