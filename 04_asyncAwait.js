let read = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '/sample.txt'), 'utf8', function(err, result){
            if(err) reject(err);
            else {
                console.log("읽기 : " + result);
                resolve();
            }
        });
    });
};

let write = (buf) => {
    return new Promise((resolve, rejct) => {
        fs.writeFile(path.join(__dirname, '/sample.txt'), buf, function(err) {
            if (err) reject(err);
            else {
                console.log('쓰기 완료');
                resolve();
            }
        });
    });
};

let fs = require('fs');
let path = require('path');

async function testD() {

    let buf = '테스트';
    await write(buf);
    await read();
    console.log('완료');
}

testD();