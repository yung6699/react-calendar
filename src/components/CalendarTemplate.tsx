import React, { useState, useEffect } from "react";
import { FIRST_MONTH, LAST_MONTH } from "../constants";
import { getEndDays } from "../utils";
import styled from "styled-components";
import dayjs from "dayjs";

import CalendarHead from "./CalendarHead";
import CalendarMain from "./CalendarMain";
import CalendarSide from "./CalendarSide";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px auto;
  box-sizing: border-box;
  border-radius: 24px;
  overflow: hidden;
  max-width: 800px;
`;

const CalendarTable = styled.div`
  width: 100%;
  background: #ddaf3b;
  display: flex;
  justify-content: center;
  padding: 24px 16px;

  table {
    width: 100%;
  }
`;

const CalendarTemplate = () => {
  const date = dayjs();
  const [currentYear, setCurrentYear] = useState<number>(date.year());
  const [currentMonth, setCurrentMonth] = useState<number>(date.month() + 1);
  const [currentDay, setCurrentDay] = useState<number>(date.date());
  const [currentDayOfWeek, setDayOfWeek] = useState<number>(date.day());
  const [endDays, setEndDays] = useState<number[]>([]);

  useEffect(() => {
    setCurrentYear(date.year());
  }, []);

  useEffect(() => {
    const endDays = getEndDays(currentYear);
    setEndDays([...endDays]);
  }, [currentYear]);

  const onIncrease = () => {
    if (currentMonth === LAST_MONTH) {
      setCurrentMonth(FIRST_MONTH);
      setCurrentYear(currentYear + 1);
      return;
    }

    setCurrentMonth(currentMonth + 1);
  };

  const onDecrease = () => {
    if (currentMonth === FIRST_MONTH) {
      setCurrentMonth(LAST_MONTH);
      setCurrentYear(currentYear - 1);
      return;
    }

    setCurrentMonth(currentMonth - 1);
  };

  const onClickDay = (day: number, dayOfWeek: number) => {
    setCurrentDay(day); // 선택 날짜
    setDayOfWeek(dayOfWeek); // 선택 날짜의 요일
  };

  return (
    <CalendarContainer>
      <CalendarSide day={currentDay} dayOfWeek={currentDayOfWeek} />
      <CalendarTable>
        <table>
          <CalendarHead year={currentYear} month={currentMonth} onIncrease={onIncrease} onDecrease={onDecrease} />
          <CalendarMain
            currentYear={currentYear}
            currentDay={currentDay}
            currentMonth={currentMonth}
            endDays={endDays}
            onClickDay={onClickDay}
          />
        </table>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default CalendarTemplate;
