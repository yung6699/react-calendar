import React from "react";
import styled, { css } from "styled-components";
import { CALENDAR_ITEM_WIDTH } from "../styles/Variables";

interface DayProps {
  day: number;
  currentDay: number;
  onClick: (day: number) => void;
}

const Item = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CALENDAR_ITEM_WIDTH};
  font-size: 24px;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &.active {
    position: relative;
    color: #fff;
    background: #2ae1ad;
    border-radius: 50%;
  }
`;

const CalendarDay = ({ day, currentDay, onClick }: DayProps) => {
  const isActive = currentDay === day;
  return (
    <Item className={isActive ? "active" : ""} onClick={() => onClick(day)}>
      {day}
    </Item>
  );
};

export default CalendarDay;
