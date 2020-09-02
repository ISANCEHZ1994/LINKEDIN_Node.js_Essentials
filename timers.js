// const waitTime = 5000; // 1000 miliseconds is 1 second
// const waitInterval = 500; // half a second
// let currentTime = 0; //

// const incTime = () => {
//     currentTime += waitInterval;
//     const p = Math.floor((currentTime / waitTime) * 100);
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`waiting ... ${p}%`)
//     // console.log(`waiting time: ${currentTime/1000} seconds`);
// }

// console.log(`setting a ${waitTime/1000} second delay`);

// const timerFinished = () => {
//     clearInterval(interval)
//     console.log("done")
// };

// const interval = setTimeout(incTime, waitInterval);
// setTimeout(timerFinished, waitTime);


const waitTime = 5000; // 1000 miliseconds is 1 second
const waitInterval = 500; // half a second
let currentTime = 0; 

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};

const interval = setInterval(incTime, waitInterval); // incTime gets called every half-second 
// every half second it'll add to the current time then calcute the percentage
setTimeout(timerFinished, waitTime);

// Note to self: for some reason my code was not working like his and I can find out why - downloaded and copied the work 