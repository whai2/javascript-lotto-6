import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const lottoCounts = await inputMoney();
    lottoCountPrinter(lottoCounts);
    const winningNumbers = await inputWinningNumber();
    console.log(winningNumbers);
  }
}

export default App;

const PURCASE_COMMENT = "구입금액을 입력해 주세요."
const WINNING_NUMBER_COMMENT = "당첨 번호를 입력해 주세요.";
const BONUS_NUMBER_COMMENT = "보너스 번호를 입력해 주세요.";
const LOTTO_PRICE = 1000;

async function inputMoney() {
  let comment = PURCASE_COMMENT;
  MissionUtils.Console.print(comment);
  const totalMoney = await MissionUtils.Console.readLineAsync('');
  const counter = new Counter(totalMoney);
  const lottoCounts = counter.lottoCounter();
  //console.log(counter.lottoCounter())
  return lottoCounts;
}

async function inputWinningNumber() {
  let comment = WINNING_NUMBER_COMMENT;
  MissionUtils.Console.print("");
  MissionUtils.Console.print(comment);
  const winningNumber = await MissionUtils.Console.readLineAsync('');
  const winningSplitNumber = winningNumberSpliter(winningNumber);
  const winning = new Winning(winningSplitNumber);
  return winning.winningNumbers();
}

async function inputBonusNumber() {
  let comment = BONUS_NUMBER_COMMENT;
  MissionUtils.Console.print(comment);
  const bonusNumber = await MissionUtils.Console.readLineAsync('');
  return bonusNumber;
}

function lottoCountPrinter(counts) {
  MissionUtils.Console.print("");
  MissionUtils.Console.print(`${counts}개를 구매했습니다.`);
}

export function winningNumberSpliter(input) {
  const winningNumberSplit = input.split(',');
  return winningNumberSplit;
}

export async function bonusNumberDuplicateValidater(winning, bonus) {
  for (let i = 0; i < winning.length; i++) {
    if (winning[i] === bonus) {
      throw new Error("[ERROR] 보너스 번호가 중복되었습니다.")
    }
  }
}

export class Counter {
  #money;

  constructor(money) {
    this.#inputMoneyValidater(money);
    this.#inputMoneyDivideValidater(money);
    this.#money = money;
  }

  #inputMoneyValidater(money) {
    if (/^[+]?[1-9]\d*$/.test(money)) {
      return Number(money);
    } 
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #inputMoneyDivideValidater(money) {
    let price = LOTTO_PRICE;
    if (money%price !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력 가능합니다.");
    }
  }

  lottoCounter() {
    let price = LOTTO_PRICE;
    const lottocounts = this.#money/price;
    return lottocounts
  }
}

export class Winning {
  #numbers

  constructor(numbers) {
    this.#winnningNumberValidater(numbers);
    this.#winnningNumberDuplicateValidater(numbers);
    this.#winnningNumberRangeValidater(numbers);
    this.#numbers = numbers;
  };

  #winnningNumberValidater(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.#winnningEachNumberValidater(numbers[i]);
    }
  }

  #winnningEachNumberValidater(number) {
    if (/^[+]?[1-9]\d*$/.test(number)) {
      return true;
    } 
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #winnningNumberDuplicateValidater(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
      if (numbers[i] === numbers[i+1]) {
        throw new Error("[ERROR] 로또 번호가 중복되었습니다.")
      }
    }
  }

  #winnningNumberRangeValidater(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.#winnningEachNumberRangeValidater(numbers[i]);
    }
  }

  #winnningEachNumberRangeValidater(number) {
    if (number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }

  winningNumbers() {
    return this.#numbers
  }
}