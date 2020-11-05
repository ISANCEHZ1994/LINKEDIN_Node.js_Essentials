// also view ask.js - the clean version is on collectAnswers.js file

const collectAnswers = require('./lib/collectAnswers');

const questions = [ // we want a varibale that can hold our questions
    'whats your name?',
    'where are you from?',
    'who do you like?'
]; 

collectAnswers(questions, (answers) => { // sends an array of questions and a callback to handle all the answers
    console.log('thank you for your answers!');
    console.log(answers)
    process.exit(); // stops program
})

// <----------- When we run node questions.js this program still works

// NOTE: This WAS the original BEFORE we changed and moved it to module.export in collectAnswers file

// const collectAnswers = (questions, done) => { 
//     const answers = [];
//     const [ firstQuestion ] = questions // destructing 

//     const questionAnswered = answer => {
//         answers.push(answer);
//         if(answers.length < questions.length){
//             rl.question(questions[answers.length], questionAnswered)
//         }else{
//             done(answers)
//         }
//     }
//     rl.question(firstQuestion, questionAnswered) 
// }

// we created a lib FOLDER and now we want this collectAnswers function in that file
