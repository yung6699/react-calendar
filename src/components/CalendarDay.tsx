import React from "react";
import styled from "styled-components";
import { CALENDAR_ITEM_WIDTH } from "../styles/Variables";
import { getWeekClass } from "../utils";

interface DayProps {
  day: number | null;
  selectedDay: number;
  dayOfWeek: number;
  onClick: (day: number, dayOfWeek: number) => void;
}

const Item = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CALENDAR_ITEM_WIDTH};
  font-size: 24px;
  font-weight: 500;
  color: #0c050b;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &.active {
    position: relative;
    color: #fff;
    background: #0c050b;
    border-radius: 50%;
  }
`;

const CalendarDay = ({ day, dayOfWeek, selectedDay, onClick }: DayProps) => {
  const getActiveClass = (selectedDay: number) => {
    const isActive = selectedDay === day;
    return isActive ? "active" : "";
  };

  return (
    <Item
      className={[getActiveClass(selectedDay), getWeekClass(dayOfWeek)].join(" ")}
      onClick={() => day && onClick(day, dayOfWeek)}>
      {day}
    </Item>
  );
};

export default CalendarDay;
