import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveStatus) {
    const { topRow, bottomRow } = this.formatDividBirdge(moveStatus);

    const topFormat = this.formatBridgeMap(topRow);
    const bottomFormat = this.formatBridgeMap(bottomRow);

    Console.print(`${topFormat}\n${bottomFormat}`);
  },

  formatDividBirdge(moveStatus) {
    const topRow = [];
    const bottomRow = [];

    moveStatus.forEach((move) => {
      const [direction, status] = Object.entries(move)[0];

      topRow.push(direction === 'U' ? status : ' ');
      bottomRow.push(direction === 'D' ? status : ' ');
    });

    return { topRow, bottomRow };
  },

  formatBridgeMap(bridge) {
    return `[ ${bridge.join(' | ')} ]`;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moveStatus, isClear, tryCount) {
    Console.print('\n최종 게임 결과');
    this.printMap(moveStatus);
    Console.print(`게임 성공 여부: ${isClear ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
