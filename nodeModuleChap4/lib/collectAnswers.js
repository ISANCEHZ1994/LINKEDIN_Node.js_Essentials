// we created a lib FOLDER and now we want this collectAnswers in that file
// NOTE now that we learned about EventEmitter we can make improvements to our code!

const readline = require('readline');
const { EventEmitter } = require('events');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => { 
    const answers = [];
    const [ firstQuestion ] = questions // destructing 
    const emitter = new EventEmitter(); // using emitter to raise events when certain things happen

    const questionAnswered = answer => {
        emitter.emit("answer", answer); // we want to raise an event every time the user answered a question
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        }else{
            emitter.emit("complete", answers); // emitting a complete event
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered) // this asks the first question every other is on line 21

    return emitter;
};
