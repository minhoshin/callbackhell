let asy = require('async');
let fs = require('fs');
let path = require('path');

function testB() {
    let buf = '테스트';

    asy.waterfall([
        function(cb) {
            fs.writeFile(path.join(__dirname, '/sample.txt'), buf, function(err) {
                if (err) throw err;
                else {
                    console.log('쓰기 완료');
                    cb(null);
                }
            });
        },
        function(cb) {
            fs.readFile(path.join(__dirname, '/sample.txt'), 'utf8', function(err, result){
                if(err) throw err;
                else {
                    console.log("읽기 : " + result);
                    cb(null);
                }
            });
        }
    ],
    function(err, result){
        console.log("완료");
    });
}

testB();