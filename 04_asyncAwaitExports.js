let fs = require('fs');
let path = require('path');

let read = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '/sample.txt'), 'utf8', function(err, result){
            if(err) reject(err);
            else {
                console.log("읽기 : " + result);
                resolve(result);
            }
        });
    });
};
// exports.read = read;
module.exports.read = read;

exports.write = (buf) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, '/sample.txt'), buf, function(err) {
            if (err) reject(err);
            else {
                console.log('쓰기 완료');
                resolve();
            }
        });
    });
};