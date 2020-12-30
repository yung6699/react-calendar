import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import CalendarHead from "components/CalendarHead";
import CalendarMain from "components/CalendarMain";
import 'plugin/DatePlugin';

const CalendarWrapper = styled.table`
  width: 100%;
  background: #ddaf3b;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px 16px;
`;

interface CalendarProps {
  onGetDate? : (date:Dayjs) => void;
}

const Calendar = ({ onGetDate }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  useEffect(() => {
    onGetDate?.(selectedDate);
  }, [selectedDate]);

  const onIncrease = () => {
    const date = selectedDate.add(1, 'month');
    setSelectedDate(date);
  };

  const onDecrease = () => {
    const date = selectedDate.subtract(1, 'month');
    setSelectedDate(date);
  };

  const onClickDay = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return (
      <CalendarWrapper>
        <CalendarHead date={selectedDate} onDecrease={onDecrease} onIncrease={onIncrease}/>
        <CalendarMain selectedDate={selectedDate} onClickDay={onClickDay} />
      </CalendarWrapper>
  );
};

export default Calendar;
