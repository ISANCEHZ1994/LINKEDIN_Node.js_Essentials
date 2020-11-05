// Event Emitter is Node.js implementation of the Pub-Sub design pattern

const events = require('events');
const { emit } = require('process');

// we created an instance of the EventEmmitter
const emitter = new events.EventEmitter();

// the power of the Event Emitter is we can raise, in our code, events whereever we like

emitter.on("customEvent", (message, user) => { 
    // first argument is the SECOND argument of the emit
    // the second arg would be the THRID arg of the emit
    console.log(`${user}: ${message}`);
})

// NOTE: Code below still works!!

// The idea behind this is we are making the computer say "Hello World"
// emitter.emit("customEvent", "Hello World", "Computer"); // (first) we can call our events (the string) whatever we like but it should make sense to user
// // the next set of arguments represents data that we want to pass to the handler
// emitter.emit("customEvent", "That's pretty cool broski", "Alex");

// CONFRIM IN TERMINAL :
// Computer: Hello World
// Alex: That's pretty cool broski

// Event Emitter is asynchronus

process.stdin.on('data', data => {

    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent","Goodbye!","process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal")

});

// CONFIRM IN TERMINAL: it waits for user to type in terminal and it response whatever is typed

// we are waiting 
// terminal: we are waiting
// what is up?
// terminal: what is up?
// how are you?
// terminal: how are you?
// exit  
// process: Goodbye!