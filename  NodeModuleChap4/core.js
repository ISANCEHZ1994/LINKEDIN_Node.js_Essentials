// Reminder: The require function is available globally and is used to load modules
// There are many modules that are really helpfully

const path = require('path'); // we are using path module here!
const util = require('util');
const v8 = require('v8');

// NOTE THAT ALL OF THE FUNCTIONS CAN BE DESTRUCTURED OUT OF THEIR MODULES
// Example: 
// Line 5 can change to => const { log } = require('util') 
// it would be the same for path, v8 and others

const dirNameFiles = path.join(__dirname, 'www', 'files','uploads');
                // this will give us the full path to the current directory 
// console.log(dirNameFiles) // full path to where we want to go!

// util.log( path.basename(__filename) );

// util.log(" ^ The Name of the current file ");

// the console should have something like this:

// the day and timestamp - file or string that is logged
// 2 Sep 15:52:21 - core.js
// 2 Sep 15:52:21 - ^ The Name of the current file

util.log(v8.getHeapStatistics()); //getHeapCodeStatistics/ - is a function is available using the v8 module
// getHeapCodeStatistics helps us look at the memory usage and statistics
// the console should have something like this( NOTE THIS IS FOR getHeapCodeStatistics() ):

// 2 Sep 16:05:13 - { 
//     code_and_metadata_size: 215880,
//     bytecode_and_metadata_size: 184520,
//     external_script_source_size: 864393
//   }

// this is when you use getHeapStatistics():

// 2 Sep 16:06:05 - {
//     total_heap_size: 4644864,
//     total_heap_size_executable: 524288,
//     total_physical_size: 3701184,
//     total_available_size: 2194382160,
//     used_heap_size: 2665112,
//     heap_size_limit: 2197815296,
//     malloced_memory: 8192,
//     peak_malloced_memory: 123200,
//     does_zap_garbage: 0,
//     number_of_native_contexts: 1,
//     number_of_detached_contexts: 0
//   }

// total heap size of our menu, physical side