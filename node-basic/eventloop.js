const fs = require('fs');

const fileName = 'target.txt';
//fs.watch(fileName, () => console.log('file changed'));

// sync
// const data = fs.readFileSync(fileName);
// console.log(data.toString());

// async
fs.readFile(fileName, (err, data) => {
    if (err) handleError(err);

    handleData(data);
});

const handleError = (err) => console.log(err);
const handleData = (data) => console.log(data.toString());

console.log('node.js is asynchronous, single threaded, non blocking event loop');

/** Secrets of understanding node js
 *  - JavaScript environment browser vs server
 *  - Understanding functions and callback functions
 *  - event loop
 *  - asynchronous (non-blocking) vs synchronous (blocking)
 */
