// console.log(process.pid); // to get the process ID
// console.log(process.version.node); // get the process object to see the current version of Node.js
// console.log(process.argv); brings back an array strings that show the path to the file

// const  [,,firstName, lastName] = process.argv

// console.log(`Your name is ${firstName} ${lastName}`) // returns 'Your name is Israel Sanchez'

const grab = (flag) => { // flag in this case is what we want to from the grab() functions below us ()
    let indexAfterFlag = process.argv.indexOf(flag) + 1; // since it is an array we can use the indexOf command - since we want the value of the array + 1
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`)

// to run this IN TERMINAL type: node globalProcess --user Israel --greeting "Hi"
//                                                  does not have to be in this order can be switched