// Readline is a module that we can use to build an application that would ask questions of a terminal user
// its an interface around readable and writable streams that allows us to easily write code that would prompt
// the user and collect their answers

const readline = require('readline');

const RL = readline.createInterface({ // we are creating a readline interface
    input: process.stdin,
    output: process.stdout
}) // we need to apply an object that tells readline what stream to use for input/output

RL.question('How do you like Node.js? ', (answer) => { // question is available to us from the interface
    console.log(`Your answer: ${answer}`)
}) 
// first argument should be a string what is asked ; second is an answer in this case a callback function