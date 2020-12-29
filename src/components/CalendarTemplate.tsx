import React from "react";
import styled from "styled-components";

import CalendarHead from "./CalendarHead";
import CalendarMain from "./CalendarMain";

const CalendarBlock = styled.table`
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  margin: 0 auto;
`;

const CalendarTemplate = () => {
  return (
    <CalendarBlock>
      <CalendarHead />
      <CalendarMain />
    </CalendarBlock>
  );
};

export default CalendarTemplate;
