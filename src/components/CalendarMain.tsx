import React, { useState, useEffect } from "react";
import CalendarDay from "./CalendarDay";
import styled from "styled-components";
import { getDayRows } from "../utils";

const Row = styled.tr`
  display: flex;
`;

interface CalendarMainProps {
  selectedYear: number;
  selectedDay: number;
  selectedMonth: number;
  endDays: number[];
  onClickDay: (day: number, dayOfWeek: number) => void;
}

const CalendarMain = ({ selectedYear, selectedDay, selectedMonth, endDays, onClickDay }: CalendarMainProps) => {
  const [dayRows, setDayRows] = useState<number[][]>([]);

  useEffect(() => {
    const dayRows = getDayRows(selectedYear, selectedMonth);
    setDayRows(dayRows);
  }, [endDays, selectedMonth]);

  const makeRow = (row: number[]) => {
    return row.map((day, idx) => {
      return <CalendarDay key={idx} day={day} dayOfWeek={idx} selectedDay={selectedDay} onClick={onClickDay} />;
    });
  };

  const makeCalendar = () => {
    return dayRows.map((row, idx) => {
      return <Row key={idx}>{makeRow(row)}</Row>;
    });
  };

  return <tbody>{makeCalendar()}</tbody>;
};

export default CalendarMain;
