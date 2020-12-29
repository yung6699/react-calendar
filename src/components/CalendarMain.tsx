import React, { useState, useEffect } from "react";
import CalendarDay from "./CalendarDay";
import styled from "styled-components";
import { CALENDAR_ITEM_HEIGHT } from "../styles/Variables";

const Row = styled.tr`
  display: flex;
  height: ${CALENDAR_ITEM_HEIGHT};
`;

const CalendarMain = () => {
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

    console.log(arr);
    setDayRows(arr);
  }, []);

  const makeRow = (row: number[]) => {
    return row.map((day, idx) => {
      return <CalendarDay key={idx} day={day} />;
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
