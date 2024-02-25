/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: Days): boolean {
  {
    if (day === Days.Sunday || day === Days.Saturday) return true;
  }
  return false;
}
