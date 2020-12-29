import React, { useState } from "react";
import { FIRST_MONTH, LAST_MONTH } from "../constants";
import styled from "styled-components";
import dayjs from "dayjs";

import CalendarHead from "./CalendarHead";
import CalendarMain from "./CalendarMain";

const CalendarBlock = styled.table`
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  margin: 0 auto;
`;

const CalendarTemplate = () => {
  const date = dayjs();
  const [year, setYear] = useState<number>(date.year());
  const [month, setMonth] = useState<number>(date.month() + 1);
  const [day, setDay] = useState<number>(date.date());

  const onIncrease = () => {
    if (month === LAST_MONTH) {
      setMonth(FIRST_MONTH);
      setYear(year + 1);
      return;
    }

    setMonth(month + 1);
  };

  const onDecrease = () => {
    if (month === FIRST_MONTH) {
      setMonth(LAST_MONTH);
      setYear(year - 1);
      return;
    }

    setMonth(month - 1);
  };

  const onClickDay = (day: number) => {
    setDay(day);
  };

  return (
    <CalendarBlock>
      <CalendarHead year={year} month={month} onIncrease={onIncrease} onDecrease={onDecrease} />
      <CalendarMain currentDay={day} onClickDay={onClickDay} />
    </CalendarBlock>
  );
};

export default CalendarTemplate;
