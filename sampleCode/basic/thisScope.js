console.log(this); // {}
console.log(this === module.exports); // true

function tempFunc(){
    console.log(this === global); //true
}

tempFunc();


/*
다음 내용으로 인해 유추 할 수 있는 내용
>>> this === module.exports

다음 두 명령은 같은 결과
exports.tempFunc = tempFunc;
this.tempFunc = tempFunc;
*/