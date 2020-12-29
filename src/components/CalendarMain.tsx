import React, { useState, useEffect } from "react";
import CalendarDay from "./CalendarDay";
import styled from "styled-components";
import { getFirstDayIndexOfWeek } from "../utils";
import { DAY_BOX_COUNT, LINE_COUNT } from "../constants";

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
    const lastDay = endDays[selectedMonth - 1];
    const firstDayIndexOfWeek = getFirstDayIndexOfWeek(selectedYear, selectedMonth); // 선택된 달의 1일의 요일을 찾는다.
    const days = new Array(DAY_BOX_COUNT).fill(null);
    for (let i = firstDayIndexOfWeek; i < lastDay + firstDayIndexOfWeek; i++) {
      days[i] = i - firstDayIndexOfWeek + 1;
    }

    const rows: number[][] = [];
    for (let i = 0; i < LINE_COUNT; i++) {
      const start = i * 7;
      const end = start + 7;
      const row = days.slice(start, end);
      rows.push(row);
    }

    setDayRows(rows);
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
