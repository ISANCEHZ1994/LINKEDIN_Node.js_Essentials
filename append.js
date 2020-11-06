const fs = require('fs');
const colorData = require('./assets/colors.json');

colorData.colorList.forEach(c => {
                        // Note: created a file in storage-files - previouslu c.name hence undefined
    fs.appendFile("./storage-files/colors.md", `${c.color} : ${c.hex} \n`, err=>{
        if(err){
            throw err;
        };
    });

});