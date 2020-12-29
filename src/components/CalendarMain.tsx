import React, { useState, useEffect } from "react";
import CalendarDay from "./CalendarDay";
import styled from "styled-components";

const Row = styled.tr`
  display: flex;
`;

interface CalendarMainProps {
  currentDay: number;
  onClickDay: (day: number) => void;
}

const CalendarMain = ({ currentDay, onClickDay }: CalendarMainProps) => {
  const [dayRows, setDayRows] = useState<number[][]>([]);

  useEffect(() => {
    const arr: number[][] = [];
    for (let i = 0; i < 6; i++) {
      arr.push([]);
      for (let j = i * 7; j < i * 7 + 7; j++) {
        if (j < 31) {
          arr[i].push(j + 1);
        }
      }
    }

    setDayRows(arr);
  }, []);

  const makeRow = (row: number[]) => {
    return row.map((day, idx) => {
      return <CalendarDay key={idx} day={day} currentDay={currentDay} onClick={onClickDay} />;
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
