import { END_DAYS, SUNDAY, SATURDAY, DAY_BOX_COUNT, LINE_COUNT, MONTH_LIST } from "../constants";
import { SUNDAY_CLASS_NAME, SATURDAY_CLASS_NAME } from "../styles/Variables";

export const isLeapYear = (year: number) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

export const getEndDays = (currentYear: number) => {
  const copiedMonths = [...END_DAYS];
  if (isLeapYear(currentYear)) copiedMonths[1] = 29;
  return [...copiedMonths];
};

export const getFirstDayIndexOfWeek = (year: number, month: number) => {
  const endDays = getEndDays(year);
  const prevYear = year - 1;
  let days = prevYear * 365 + Math.floor(prevYear / 4) - Math.floor(prevYear / 100) + Math.floor(prevYear / 400);

  for (let i = 0; i < month - 1; i++) days += endDays[i];
  days += 1;

  return days % 7;
};

export const getMonthName = (month: number) => {
  return MONTH_LIST[month].substring(0, 3).toUpperCase();
};

export const getDayRows = (year: number, month: number) => {
  const endDays = getEndDays(year);
  const lastDay = endDays[month - 1];
  const firstDayIndexOfWeek = getFirstDayIndexOfWeek(year, month); // 선택된 달의 1일의 요일을 찾는다.
  const days = new Array(DAY_BOX_COUNT).fill(null);

  for (let i = firstDayIndexOfWeek; i < lastDay + firstDayIndexOfWeek; i++) {
    days[i] = i - firstDayIndexOfWeek + 1;
  }

  const rows: number[][] = [];
  for (let i = 0; i < LINE_COUNT; i++) {
    const start = i * 7;
    const end = start + 7;
    const row = days.slice(start, end);
    rows.push(row);
  }

  return rows;
};

export const getWeekClass = (order: number) => {
  if (order === SUNDAY) return SUNDAY_CLASS_NAME;
  if (order === SATURDAY) return SATURDAY_CLASS_NAME;
  return "";
};
