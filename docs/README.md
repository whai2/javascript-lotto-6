# 로또

## 기능 목록
### 사용자 입력과 출력 관련
- [ ] 로또 구입 금액 입력, 구입 금액에 해당하는 만큼 로또 발행한다.
  - [x] 로또 구입 금액을 입력한다.
  - [x] 구입 금액에 해당하는 로또의 수를 파악한다.
  - [ ] 해당 수의 로또를 발행한다.
  - [ ] 로또 1장의 가격은 1000원이다.
  - [ ] 1000원으로 나눠지지 않을 경우, 예외 처리
  - [ ] 숫자가 아닐 경우, 예외 처리

- [ ] 발행한 로또 수량을 출력한다.
- [ ] 발행한 로또 번호를 출력한다.
  - [ ] 로또 번호는 오름차순으로 정렬하여 보여준다.

- [ ] 당첨 번호와 보너스 번호를 입력 받는다.
  - [ ] 당첨 번호를 입력한다.
    - [ ] 중복되지 않는 숫자 6개를 입력한다.
  - [ ] 번호는 쉼표로 구분한다.
  - [ ] 보너스 번호를 입력한다.
    - [ ] 보너스 번호는 중복 가능할까?

- [ ] 당첨 내역을 출력한다. 당첨은 1등부터 5등까지 있다.
  - [ ] 1등: 6개 번호 일치/ 2억원
    - [ ] 보너스 번호는 상관 없다.
  - [ ] 2등 5개 + 보너스 번호/ 5천만원
  - [ ] 3등 5개 번호 일치 + 보너스 번호 불일치/ 150만원
  - [ ] 4등 4개 번호 일치 / 5만원
  - [ ] 5등 3개 번호 일치/ 5천원
    - [ ] 4등 5등은 보너스 번호와 관련 없다.

- [ ] 당첨 내역을 출력한다.

- [ ] 수익률을 출력한다.
  - [ ] 수익률은 소수점 둘째 자리에서 반올림

- [ ] 게임을 종료한다.

- [ ] 예외 상황 시 에러 문구를 출력해야 한다. 에러 문구는 "[ERROR]"로 시작해야 한다.

### 도메인 관련
- [ ] 1개의 로또를 발행할 때, 중복되지 않는 6개의 숫자를 뽑는다.
  - [ ] 로또 번호의 숫자 범위는 1~45까지다.
  - [ ] 중복되지 않는 6개의 숫자를 뽑는다.
    - [ ] 만약, 중복될 경우, 예외 처리
  - [ ] 1개의 로또를 발행한다.

- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교한다.

## 기능별 테스트 목록