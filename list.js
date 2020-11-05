const fs = require("fs");

console.log('started reading files');
// const files = fs.readdirSync("./assets"); // this function is running synchronously meaning
// that means that its blocking - meaning that JS is going to stop everything its doing until 
// the files within the directory are read before processing any more lines of code
// this is how we list the contents of a variable

// CONFIRMED IN TERMINAL FOR REEADDIRSYNC():
// started reading files
// complete
// [ 'Readme.md', 'alex.jpg', 'colors.json' ]

// Instead of using readdirSync() - because its blocking 
// To make Asynchronous switch to readdir() however it CANNOT BE A VARIABLE
fs.readdir("./assets",(err, files) => {

    if(err){
        throw err
    }

    console.log("complete");
    console.log(files);

});

