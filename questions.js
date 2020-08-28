// Standard Output or stdout
// process.stdout // is a writeable string and it implements a write method
// we can use this write method to send data out of our program

process.stdout.write("Hello "); 
process.stdout.write("World \n\n\n"); // adding new lines at the end
// when running this in terminal, this should be output:
// Hello World <-----
// (empty space)
// (empty space)
// (empty space)
// Note: this gives us more controll of our strings, unlike console.log() both write arguments are in the same line <-----

const questions = [
    "How old are you?",
    "Where do you live?",
    "What's your SS#?",
    "Don't ask, just give it to me!"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `); // user prompt so that he can anwser back
} 

ask(); // invoke our ask() function

const answers = []; // Now that we are answering questions, we want to put them someplace hence an empty array

// Standard Input or stdin
process.stdin.on('data', data => { // to listen for answers
    // process.stdout.write(`\n\n\n\ ${data.toString().trim()} \n\n`); // trim() cuts out any leading or trimming spaces or commands
    // so right now the program returns whatever we type (echos back) in the terminal WITHOUT stopping the program (because we haven't told it too yet)
    // process.exit(); // BOOM - now it'll exit

    answers.push(data.toString().trim()); // we are replacing the above fucntion so that the questions and answers run smoothly
    if( answers.length < questions.length){
        ask(answers.length); // we are making it so that it asks the next question in the questions array
    } else{ // If there are no more questions to ask - exit program
        process.exit(); // BOOM - now it'll exit
    }
})

process.on('exit', () => { // Here is another listener 
    
    const [ age, location, ss, anyReply ] = answers; // this is known as array destructuring
    console.log(`
    That's all the questions. Thanks for the answers! 
    You are: ${age}, live in: ${location}, your response to SS#: ${ss}, whatever you said to the random question: ${anyReply}
    `)
})