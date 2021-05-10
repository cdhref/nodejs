const path = require('path');

// 자주 쓰는 기능
console.log(path.join(__dirname, 'test', 'abc.txt'));

/*
output

linux : currentPath/test/abc.txt
windows : currentPath\test\abc.txt

__dirname : currentPath
__filename : currentFilePath
*/

// api : https://nodejs.org/dist/latest-v16.x/docs/api/path.html