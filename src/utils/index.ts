import { END_DAYS, SUNDAY, SATURDAY } from "../constants";

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

export const getWeekClass = (order: number) => {
  if (order === SUNDAY) return "sun";
  if (order === SATURDAY) return "sat";
  return "";
};
