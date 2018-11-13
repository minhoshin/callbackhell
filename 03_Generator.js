const co = require('co');
const lib = require('./lib/promise');

function testC() {
    let buf = '테스트';

    co(function *(){
        yield lib.write(buf);
        const readResult = yield lib.read();
        console.log(readResult);
    }).then((result) => {
        console.log('완료');
    });
}

testC();