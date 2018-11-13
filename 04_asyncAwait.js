const lib = require('./lib/promise');

async function testD() {

    let buf = '테스트';
    const writeResult = await lib.write(buf);
    console.log(writeResult);
    await lib.read();
    console.log('종료');
}

testD();