const fs = require('fs');

const fileName = 'target.txt';
//fs.watch(fileName, () => console.log('file changed'));
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(error);
    }

    console.log(data);
});

console.log(
    'node.js is asynchronous, single threaded, non blocking event loop'
);
