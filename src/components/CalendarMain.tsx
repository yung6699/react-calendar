import React, { useState, useEffect } from "react";
import CalendarDay from "./CalendarDay";
import styled from "styled-components";
import { getFirstDayIndexOfWeek } from "../utils";

const Row = styled.tr`
  display: flex;
`;

interface CalendarMainProps {
  currentYear: number;
  currentDay: number;
  currentMonth: number;
  endDays: number[];
  onClickDay: (day: number, dayOfWeek: number) => void;
}

const CalendarMain = ({ currentYear, currentDay, currentMonth, endDays, onClickDay }: CalendarMainProps) => {
  const [dayRows, setDayRows] = useState<number[][]>([]);

  useEffect(() => {
    const lastDay = endDays[currentMonth - 1];
    const result = getFirstDayIndexOfWeek(currentYear, currentMonth);
    const days = new Array(42).fill(null);

    let idx = result;
    for (let i = 0; i < lastDay; i++) {
      days[idx] = i + 1;
      idx++;
    }

    const arr: number[][] = [];
    for (let i = 0; i < 6; i++) {
      const start = i * 7;
      const end = start + 7;
      const list = days.slice(start, end);
      arr.push(list);
    }

    setDayRows(arr);
  }, [endDays, currentMonth]);

  const makeRow = (row: number[]) => {
    return row.map((day, idx) => {
      return <CalendarDay key={idx} day={day} currentDay={currentDay} onClick={onClickDay} currentDayOfWeek={idx} />;
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
