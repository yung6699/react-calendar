import React from "react";
import styled from "styled-components";
import { Dayjs } from "dayjs";
import { MONTH_LIST } from "constants/enums";

const MainTitle = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: #0c050b;
  font-size: 24px;
  font-weight: bold;

  .calendar__prev,
  .calendar__next {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
  }

  .calendar__title {
    display: flex;
    justify-content: center;
    align-items: center;

    .calendar__title__year {
      margin-left: 16px;
    }
  }
`;

interface CalendarHeadProps {
  date: Dayjs;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CalendarHead = ({ date, onIncrease, onDecrease }: CalendarHeadProps) => {
  const getMonth = (date: Dayjs) => {
    const month = date.month() + 1;
    return MONTH_LIST[month].substring(0, 3).toUpperCase();
  };

  return (
    <thead>
      <MainTitle>
        <td className={"calendar__prev"} onClick={onDecrease}>
          &#60;
        </td>
        <td className={"calendar__title"}>
          <b className={"calendar__title__month"}>{ getMonth(date) }</b>
          <b className={"calendar__title__year"}>{ date.year() }</b>
        </td>
        <td className={"calendar__next"} onClick={onIncrease}>
          &#62;
        </td>
      </MainTitle>
    </thead>
  );
};

export default CalendarHead;
