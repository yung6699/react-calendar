import React from "react";
import styled from "styled-components";
import { CALENDAR_ITEM_WIDTH } from "../styles/Variables";

type DayProps = {
  day: number;
};

const Item = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CALENDAR_ITEM_WIDTH};
  height: 100%;
`;

const CalendarDay = ({ day }: DayProps) => {
  return <Item>{day}</Item>;
};

export default CalendarDay;
