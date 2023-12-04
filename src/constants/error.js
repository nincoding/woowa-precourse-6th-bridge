const PREFIX = '[ERROR]';

const INPUT = Object.freeze({
  invalidEmpty: '사용자 입력값이 존재하지 않습니다.',
  invalidInteger: '숫자는 정수만 입력 가능합니다.',
  invalidMoving: 'U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력해야 합니다.',
  invalidGameCommand: 'R(재시도)와 Q(종료) 중 하나의 문자를 입력해야 합니다.',
});

const SIZE = Object.freeze({
  invalidRange: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
});

export { PREFIX, INPUT, SIZE };
