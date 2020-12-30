import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getWeekClass } from "../utils";
import { CALENDAR_ITEM_WIDTH } from "../styles/Variables";
import { Dayjs } from "dayjs";
import CalendarDay from "./CalendarDay";

const Row = styled.tr`
  display: flex;
`;

const DayOfWeek = styled.tr`
  display: flex;
  width: 100%;
  font-size: 20px;
  color: #2ae1ae;

  td {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0c050b;

    width: ${CALENDAR_ITEM_WIDTH};
    height: 50px;
    font-weight: bold;
  }
`;

interface CalendarMainProps {
  selectedDate: Dayjs;
  onClickDay: (date: Dayjs) => void;
}
const DAY_OF_THE_WEEK: string[] = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const CalendarMain = ({ selectedDate, onClickDay }: CalendarMainProps) => {
  const [calendar, setCalendar] = useState<Dayjs[][]>([]);

  useEffect(() => {
    const startDay:Dayjs = selectedDate.startOf('month').startOf('week');
    const endDay:Dayjs = selectedDate.endOf('month').endOf('week');
    const startWeek = startDay.week();
    const endWeek = endDay.week() === 1 ? 53 : endDay.week();
    const calendar:Dayjs[][] = [];

    for(let week = startWeek; week <= endWeek; week++){
      calendar.push(
        Array(7).fill(0).map(( _, idx) => {
          return startDay.week(week).add(idx, 'day')
        })
      )
    }

    setCalendar(calendar);
  }, [selectedDate.month()]);

  const makeRow = (row: Dayjs[]) => {
    return row.map((date:Dayjs) => {
      const key = date.format();
      const isGrayed = selectedDate.month() !== date.month();
      const isSelected = selectedDate.date() === date.date() && !isGrayed;
      return <CalendarDay key={key} date={date} isSelected={isSelected} isGrayed={isGrayed} onClick={onClickDay}/>;
    });
  };

  const makeCalendar = (calendar: Dayjs[][]) => {
    return calendar.map((row, idx) => {
      return <Row key={idx}>{ makeRow(row) }</Row>;
    });
  };

  const getDayOfWeekRow = () => {
    return [...DAY_OF_THE_WEEK].map((item: string, index: number) => {
      return (
        <td key={index} className={getWeekClass(index)}>
          {item.substring(0, 3)}
        </td>
      );
    });
  };

  return (
    <tbody>
      <DayOfWeek>{ getDayOfWeekRow() }</DayOfWeek>
      { makeCalendar(calendar) }
    </tbody>);
};

export default CalendarMain;
