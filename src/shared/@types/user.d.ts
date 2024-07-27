declare namespace User {
  export interface BasicUserInfo {
    gender: 0 | 1; // "MALE" | "FEMALE"
    incomeBracket: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // 1-> 1분위
    familyNum: 1 | 2 | 3 | 4 | 5 | 6;
    MonthlyExpenses: 1 | 2 | 3 | 4 | 5 | 6 | 7; // 1 -> 100만원 이하, 7 -> 600만원 초과
  }
}
