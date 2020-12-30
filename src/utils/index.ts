import { SUNDAY, SATURDAY } from "../constants";
import { SUNDAY_CLASS_NAME, SATURDAY_CLASS_NAME } from "../styles/Variables";


export const getWeekClass = (order: number) => {
  if (order === SUNDAY) return SUNDAY_CLASS_NAME;
  if (order === SATURDAY) return SATURDAY_CLASS_NAME;
  return "";
};
