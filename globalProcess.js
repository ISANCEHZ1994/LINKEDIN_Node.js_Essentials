// console.log(process.pid); // to get the process ID
// console.log(process.version.node); // get the process object to see the current version of Node.js
// console.log(process.argv); brings back an array strings that show the path to the file

const  [,,firstName, lastName] = process.argv

console.log(`Your name is ${firstName} ${lastName}`) // returns 'Your name is Israel Sanchez'
