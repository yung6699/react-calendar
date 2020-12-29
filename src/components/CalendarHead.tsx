import React from "react";
import styled from "styled-components";

const TableHead = styled.thead`
  display: flex;
  justify-content: space-between;
  height: 50px;
  color: #916aff;
  font-size: 24px;
  font-weight: bold;

  .calendar__prev,
  .calendar__next {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
  }

  .calendar__title {
    display: flex;
    justify-content: center;
    align-items: center;

    .calendar__title__month {
      margin-right: 16px;
    }
  }
`;

const CalendarHead = () => {
  return (
    <TableHead>
      <td className={"calendar__prev"}>&#60;</td>
      <td className={"calendar__title"}>
        <div className={"calendar__title__month"}>JULY</div>
        <div className={"calendar__title__year"}>2020</div>
      </td>
      <td className={"calendar__next"}>&#62;</td>
    </TableHead>
  );
};

export default CalendarHead;
