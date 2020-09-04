// Also view app.js file - 

let count = 0;

const inc = () => ++count; // add & read thats what the plus signs on the left mean - if count++ => add on NEXT read
const dec = () => --count; 

const getCount = () => count;

// module.exports = 'Alex';
// when we run node app.js on the terminal we get the name Alex back

module.exports = {
    inc,
    dec,
    getCount
};