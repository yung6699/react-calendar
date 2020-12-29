import React from "react";
import styled from "styled-components";

import CalendarHead from "./CalendarHead";
import CalendarMain from "./CalendarMain";

const CalendarBlock = styled.table`
  max-width: 500px;
  width: 100%;
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
