## 기능 구현 목록

### 도메인

- [] BridgeGame 클래스

### 모델

- [] BridgeMaker 객체

  - [] 다리의 길이(size)를 입력 받아서 다리를 생성해주는 역할을 한다.
    - 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
    - 사이즈 만큼 다리의 각 칸을 U또는 D로 생성한다.
    - generateRandomNumber함수가 반환하는 랜덤 값을 토대로, 1이면 U를, 0이면 D를 생성해야한다.
  - 파일 경로는 변경할 수 없다.
    - 'src/BridgeMaker.js'
  - 프로퍼티를 추가할 수 없다.
    - `makeBridge(size, generateRandomNumber)`단독 프로퍼티
  - 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
    - size, generateRandomNumber
    - 인자 타입:`{number}` size 다리의 길이
    - 인자 타입:`{function(): number}` generateRandomNumber 무작위 값을 생성해주는 함수
    - 반환 타입:`{string[]}` 입력받은 길이에 해당하는 다리 모양.

- [x] BridgeRandomNumberGenerator 객체

  - 코드는 변경할 수 없다.
  - 랜덤값을 추출하기 위해선 `BridgeRandomNumberGenerator.generate()`를 활용한다.
  - `BridgeMaker.makeBridge()`에 두번째 인자 generateRandomNumber로 `BridgeRandomNumberGenerator.generate`함수를 전달해야 한다.
