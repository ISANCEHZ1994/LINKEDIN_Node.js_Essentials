const path = require('path') // require() lets us use loaded modules - path is shipped with and when Node.js is downloaded

// console.log(__dirname); // directory name
// console.log(__filename); // full name and path to the file
console.log(`The file name is called ${path.basename(__filename)}`); // .basename plucks the filename
