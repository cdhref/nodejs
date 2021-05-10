const odd = '홀수입니다.';
const even = '짝수입니다.';

// es6문법, key와 value의 변수명이 동일 한 경우 [:변수명] 생략 가능.
module.exports = {
    odd,
    even,
};

/*
//다음과 같은 형태의 export도 가능
exports.odd = odd;
exports.even = even;

//주의점
위와 같은 형태로 export한 이후에 module.exports에 객체를 대입 할 경우
ex > module.exports = { ... };
module.exports의 주소값이 변경 되므로 전에 실행 한 
exports.odd = odd;
exports.even = even;
코드가 적용 되지 않는 현상이 발생 함
*/