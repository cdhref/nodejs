# nodejs 설치
https://nodejs.org/
> es6문법의 경우 node에서 설정 가능하도록 되어있는 항목 외에는 사용이 불가능 하므로 버전에 따라 사용 못하는 문법이 있을 수 있음

# nodejs API
https://nodejs.org/dist/latest-v16.x/docs/api/

# nodejs 정의
> chrome V8 Javascript engine으로 빌드 된 Javascript Runtime  

## 기존 javascript실행 구조의 문제점
html에서 링크한 script파일을 브라우저가 확인 후 브라우저에 존재하는 javascript runtime이 해당 스크립트를 실행하는 구조로 html파일/브라우저에 종속성을 갖고 있어서 단독 실행 불가. 해당 문제를 해결하기 위해 node.js를 사용 함

# Node.js로 개발하면 좋은 환경
- 간단한 로직의 프로그램
- 동시에 다수의 reqeust를 처리해야 하는 프로그램
- 빠른 개발 요구
- 비동기 방식에 어울리는 서비스(network streaming, chatting service 등)

# node.js가 필요한 이유
- javascript파일을 단독실행 가능하도록 환경을 제공 함
- 자바스크립트를 동일하게 사용해서 서버단 로직을 처리할 수 있다는게 가장 큰 장점
> 새로운 언어를 습득하지 않고도 자바스크립트를 활용해 서버기술을 빨리 향상시킬 수 있다  

- 이벤트 기반 비동기방식이라 서버 무리가 적다
- npm(node package manager)을 통한 다양한 모듈(패키지) 제공. 
> npm을 이용해 자신이 필요한 라이브러리와 패키지를 검색해서 설치하고 사용할 수 있기 때문에 효율성이 좋다  

# node.js를 쓰지 않아야 하는 경우
- 이벤트 기반 비동기방식이라 서버단 로직이 복잡한 경우 가독성이 떨어지고 구현 난이도가 높다
- 단일 쓰레드(Single Thread)이기 때문에 하나의 작업 자체가 많이 걸리는 웹서비스에는 비효율적이다
- 코드가 수행되어야 코드에 에러가 있는지 알 수 있으며, 에러가 날 경우 프로세스가 내려가기 때문에 테스트가 엄청 중요하다. 반드시 모든 케이스에 대해 소스코드를 검증해야 하므로 해당 부분에 대해 발생할 비용도 고려해야 한다

# node.js option
node.js실행 시 환경설정에 관한 값을 환경 변수에 지정하여 설정 할 수 있는 값들이 존재한다. 해당 내용에 관한 자세한 설명은 다음 링크 참조  

https://nodejs.org/docs/latest-v14.x/api/cli.html