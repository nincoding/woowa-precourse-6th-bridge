import { Console } from '@woowacourse/mission-utils';
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(result) {
    const topRow = [];
    const bottomRow = [];

    result.forEach((move) => {
      const [direction, status] = Object.entries(move)[0];
      const symbol = status === 'O' ? 'O' : 'X';

      if (direction === 'U') {
        topRow.push(symbol);
        bottomRow.push(' ');
      } else {
        topRow.push(' ');
        bottomRow.push(symbol);
      }
    });

    const topLine = `[ ${topRow.join(' | ')} ]`;
    const bottomLine = `[ ${bottomRow.join(' | ')} ]`;

    Console.print(`${topLine}\n${bottomLine}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, isNotClear, tryCount) {
    Console.print('최종 게임 결과');
    this.printMap(result);
    Console.print(`\n게임 성공 여부: ${isNotClear ? '실패' : '성공'}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

export default OutputView;
