import React from "react";
import styled from "styled-components";
import { DAY_OF_WEEK } from "../constants/enums";
import { Dayjs } from "dayjs";

interface CalendarSideProps {
  date?: Dayjs;
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

const TodoList = ({ date }: CalendarSideProps) => {
  return (
    <SideContent>
      <div className={"dayOfWeek"}>{date && DAY_OF_WEEK[date.day()]}</div>
      <div className={"day"}>{date?.date()}</div>
    </SideContent>
  );
};

export default TodoList;
