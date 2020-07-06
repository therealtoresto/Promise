'use strict';

const fs = require('fs');

const readFile = filename => fs.promises.readFile(filename, 'utf8');

readFile('file1-.txt')
    .then(
        data => {
            console.dir({ file1: data });
            return readFile('file2.txt');
        },
        reason => {
            console.log('Cannot read file1.txt');
            console.log(reason);
        }
    )
    .then(data => {
        console.dir({ file2: data });
        return readFile('file3.txt');
    })
    .catch(reason => {
        console.log('Cannot read file2.txt');
        console.log(reason);
    })
    .then(data => {
        console.dir({ file3: data });
    })
    .catch(reason => {
        console.log('Cannot read file');
        console.log(reason);
    }); 