let fs = require('fs');
let path = require('path');

function testA() {

    let buf = '테스트';

    fs.writeFile(path.join(__dirname, '/sample.txt'), buf, function(err) {
        if(err) throw err;
        console.log('쓰기 완료');

        // 콜벡 안에 또 콜벡
        fs.readFile(path.join(__dirname, '/sample.txt'), 'utf8', function(err, result){
            if(err) throw err;
            console.log("읽기 : " + result);
        });
    });
}

testA();