import React, { useState, useEffect } from "react";
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
  const [month, setMonth] = useState<number>(date.month());

  return (
    <CalendarBlock>
      <CalendarHead year={year} month={month} />
      <CalendarMain />
    </CalendarBlock>
  );
};

export default CalendarTemplate;
