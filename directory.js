const fs = require('fs');

if(fs.existsSync("storage-files")){ // This is to check if the directory already exist
    console.log("Already Exists!")
}else{
    fs.mkdir("storage-files", err => {
    if(err){
        throw err
    }
    console.log("directory created");
    });
};



// NOTE: If the directory is ALREADY created then it will throw and error
