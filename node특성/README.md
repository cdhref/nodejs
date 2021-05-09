## node.js의 특징

1. 이벤트 기반

2. non blocking
- 처리 비용이 큰 함수를 백그라운드로 보내서 다음 코드를 먼저 실행하게 함  
- 대부분 비동기처리(non blocking), 동기처리(blocking)의 형태로 구현
> non blocking의 경우 실행 순서가 보장 되지 않음

3. processes / thread
- node.js의 프로세스는 multi thread이나 핸들링 가능한 thread는 1개이므로 single thread라고 표현 함
- node.js에서는 multi thread보다 multi processes를 활용 함
- multi thread방식은 node.js 14버전부터 지원