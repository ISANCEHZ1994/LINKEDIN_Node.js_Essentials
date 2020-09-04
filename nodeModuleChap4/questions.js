// also view ask.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [ // we want a varibale that can hold our questions
    'whats your name?',
    'where are you from?',
    'who do you like?'
]; 

const collectAnswers = (questions, done) => {
    const answers = [];
    const [ firstQuestion ] = questions // destructing 

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        }else{
            done(answers)
        }
    }

    rl.question(firstQuestion, questionAnswered) // this asks the first question every other is on line 21
}

collectAnswers(questions, (answers) => { // sends an array of questions and a callback to handle all the answers
    console.log('thank you for your answers!');
    console.log(answers)
    process.exit(); // stops program
})


