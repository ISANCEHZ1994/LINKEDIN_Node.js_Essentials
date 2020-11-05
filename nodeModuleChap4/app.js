// const name = require('./myModule'); // exporting (name) custom modules(refer to file myModule.js)
const counter = require('./myModule'); // now we are getting the couter from myModule.js

// const { inc, getCount } = require('./myModule'); // we can also destructure to get only what we need
// when we destructure we can just use the functions like this => inc()

// we can now use functions from myModule.js file
counter.inc()
counter.inc()
counter.inc()

console.log(counter.getCount())

