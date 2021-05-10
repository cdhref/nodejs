/*
설정 시 command (windows)
set SECRET_ID=test_Id 
set SECRET_CODE=test_code

설정 시 command (linux)
export SECRET_ID=test_Id 
export SECRET_CODE=test_code
*/ 

const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;
console.log(secretId);
console.log(secretCode);

/*
환경변수에 다음 값을 지정 할 경우 node모듈에서 참조 함 

//노드가 사용 할 메모리를 지정
NODE_OPTIONS=--max-old-space_size=8192

//thread pool 갯수 설정 
UV_THREADPOOL_SIZE=8

상세 내용은 다음 참조 
https://nodejs.org/docs/latest-v14.x/api/cli.html
*/