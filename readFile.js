const fs = require('fs');

fs.readFile("./assets/Readme.md", "utf-8", (err,text) => {

    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
    
});

// NOTE: If you remove utf-8 you will recive binary code in the terminal

