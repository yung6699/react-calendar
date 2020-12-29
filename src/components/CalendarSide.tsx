import React from "react";
import styled from "styled-components";
import { DAY_OF_THE_WEEK } from "../constants";

interface CalendarSideProps {
  day: number;
  dayOfWeek: number;
}

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #0b070a;
  color: #ddaf3b;

  .dayOfWeek {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 28px;
  }

  .day {
    font-size: 120px;
    font-weight: bold;
  }
`;

const CalendarSide = ({ day, dayOfWeek }: CalendarSideProps) => {
  return (
    <SideContent>
      <div className={"dayOfWeek"}>{DAY_OF_THE_WEEK[dayOfWeek]}</div>
      <div className={"day"}>{day}</div>
    </SideContent>
  );
};

export default CalendarSide;
