# 서버로서의 node

- node에서 제공하는 server구성 관련 모듈을 사용하여 server역할을 수행 하도록 할 수 있음

## node서버의 장단점

|장점|단점|
|:---|---:|
|multi-thread에 비해 컴퓨터 리소스를 적게 사용|single-thread이기 때문에 cpu코어를 하나만 사용|
|I/O작업이 많은 서버로 적합|CPU작업이 많은 서버로는 부적합(image resizing, 암호화 등)|
|single-thread이므로 구현 난이도 낮음|single-thread이므로 문제가 생길 경우 처리를 멈추기 때문에 정밀한 테스트 필요|
|웹 서버가 내장되어 있음|서버 규모가 커지면 관리하기 어려움|
|Java-Script언어이기 때문에 프론트 개발자가 접근하기 쉬움|애매한 성능|
|JSON형식과 호환이 쉬움||