import React from "react";
import styled from "styled-components";
import { DAY_OF_THE_WEEK } from "../constants";
import { CALENDAR_ITEM_WIDTH, CALENDAR_ITEM_HEIGHT } from "../styles/Variables";

const MainTitle = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  color: #916aff;
  font-size: 24px;
  font-weight: bold;

  .calendar__prev,
  .calendar__next {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
  }

  .calendar__title {
    display: flex;
    justify-content: center;
    align-items: center;

    .calendar__title__year {
      margin-right: 16px;
    }
  }
`;

const DayOfWeek = styled.tr`
  width: 100%;
  display: flex;

  td {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${CALENDAR_ITEM_WIDTH};
    height: ${CALENDAR_ITEM_HEIGHT};
    font-weight: bold;
  }
`;

interface CalendarHeadProps {
  year: number;
  month: number;
}

const CalendarHead = ({ year, month }: CalendarHeadProps) => {
  return (
    <thead>
      <MainTitle>
        <td className={"calendar__prev"}>&#60;</td>
        <td className={"calendar__title"}>
          <div className={"calendar__title__year"}>{year}년</div>
          <div className={"calendar__title__month"}>{month}월</div>
        </td>
        <td className={"calendar__next"}>&#62;</td>
      </MainTitle>
      <DayOfWeek>
        {DAY_OF_THE_WEEK.map((item: string, index: number) => {
          return <td key={index}>{item}</td>;
        })}
      </DayOfWeek>
    </thead>
  );
};

export default CalendarHead;
