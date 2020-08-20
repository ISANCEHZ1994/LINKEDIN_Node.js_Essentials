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