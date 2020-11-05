// we created a lib FOLDER and now we want this collectAnswers in that file
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => { 
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
};
