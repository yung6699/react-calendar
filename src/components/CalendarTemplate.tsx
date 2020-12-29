import React from "react";
import styled from "styled-components";

import CalendarHead from "./CalendarHead";

const CalendarBlock = styled.table`
  max-width: 500px;
  width: 100%;
`;

const CalendarTemplate = () => {
  return (
    <CalendarBlock>
      <CalendarHead />
    </CalendarBlock>
  );
};

export default CalendarTemplate;
