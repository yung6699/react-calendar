import React, { useState, useEffect } from "react";
import { FIRST_MONTH, LAST_MONTH } from "../constants";
import { getEndDays, getFirstDayIndexOfWeek } from "../utils";
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
  const [selectedYear, setSelectedYear] = useState<number>(date.year());
  const [selectedMonth, setSelectedMonth] = useState<number>(date.month() + 1);
  const [selectedDay, setSelectedDay] = useState<number>(date.date());
  const [selectedCurrentDayOfWeek, setSelectedDayOfWeek] = useState<number>(date.day());
  const [endDays, setEndDays] = useState<number[]>([]);

  useEffect(() => {
    const endDays = getEndDays(selectedYear);
    setEndDays([...endDays]);
  }, [selectedYear]);

  const setDate = (year: number, month: number, dayOfWeek: number) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDayOfWeek(dayOfWeek);
  };

  const onIncrease = () => {
    const newMonth = (selectedMonth + 1) % 12 || LAST_MONTH;
    const newYear = newMonth === FIRST_MONTH ? selectedYear + 1 : selectedYear;
    const newDayOfWeek = (getFirstDayIndexOfWeek(newYear, newMonth) + selectedDay) % 7;
    setDate(newYear, newMonth, newDayOfWeek);
  };

  const onDecrease = () => {
    const newMonth = selectedMonth - 1 || LAST_MONTH;
    const newYear = newMonth === LAST_MONTH ? selectedYear - 1 : selectedYear;
    const newDayOfWeek = (getFirstDayIndexOfWeek(newYear, newMonth) + selectedDay) % 7;
    setDate(newYear, newMonth, newDayOfWeek);
  };

  const onClickDay = (day: number, dayOfWeek: number) => {
    setSelectedDay(day); // 선택 날짜
    setSelectedDayOfWeek(dayOfWeek); // 선택 날짜의 요일
  };

  return (
    <CalendarContainer>
      <CalendarSide day={selectedDay} dayOfWeek={selectedCurrentDayOfWeek} />
      <CalendarTable>
        <table>
          <CalendarHead year={selectedYear} month={selectedMonth} onIncrease={onIncrease} onDecrease={onDecrease} />
          <CalendarMain
            selectedYear={selectedYear}
            selectedDay={selectedDay}
            selectedMonth={selectedMonth}
            endDays={endDays}
            onClickDay={onClickDay}
          />
        </table>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default CalendarTemplate;
