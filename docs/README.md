## 기능 구현 목록

### 도메인

- [] BridgeGame 클래스

### 모델

- [x] BridgeMaker 객체

  - [x] 다리의 길이(size)를 입력 받아서 다리를 생성해주는 역할을 한다.
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

- [] 유효성 검증 객체

  - [] 정수: 정수인지 검증
  - [] 빈값: 빈 값과 공백은 아닌지 검증
  - [] 범위: 범위에 해당하는지 검증
  - [] 일치: 두개의 문자중 하나와 일치하는지 검증

  - [] 유효성을 검사한 후 예외일 경우 throw를 사용해 해당 에러메세지와 예외를 발생시킨다.
    - 다리 길이 (정수, 빈값, 범위)
    - 이동할 칸 (빈값, 일치)
    - 사용자 명령어 (빈값, 일치)

### 뷰

- [x] 입력뷰

  - 파일 경로 이동 가능, 메서드 인자 변경 가능, 메서드 추가 가능
  - [x] 자동으로 생성할 다리 길이를 입력받는다.
    - 정수인지
    - 3이상 20이하의 범위에 해당하는지
  - [x] 라운드마다 이동할 칸을 입력받는다.
    - 빈 값과 공백은 아닌지
    - U 또는 D 중 하나의 문자인지
  - [x] 게임 재시작/종료 여부를 입력받는다.
    - 빈 값과 공백은 아닌지
    - U 또는 D 중 하나의 문자인지
  - [x] 각 조건이 올바른 값이 아니면 예외 처리한다. (입출력 요구사항에 기재된 내용)

- [] 출력뷰
  - 파일 경로 이동 가능, 메서드 이름 변경 불가능, 메서드 추가 가능, 메서드 인자 추가 및 변경 가능
  - []
