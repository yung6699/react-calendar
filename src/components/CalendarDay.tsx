import React from "react";
import styled from "styled-components";
import { CALENDAR_ITEM_WIDTH, SELECTED_CLASS_NAME } from "../styles/Variables";
import { getWeekClass } from "../utils";
import { Dayjs } from "dayjs";

interface DayProps {
  date: Dayjs;
  isGrayed: Boolean;
  isSelected: Boolean;
  onClick: (date:Dayjs) => void;
}

const DayElement = styled.td<{isSelected: Boolean, isGrayed: Boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CALENDAR_ITEM_WIDTH};
  font-size: 24px;
  font-weight: 500;
  color: #0c050b;
  cursor: pointer;
 
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  
  ${({isSelected})=>{
    return isSelected && `
      position: relative;
      color: #fff;
      background: #0c050b;
      border-radius: 50%;
    `
  }}
  
  ${({isGrayed})=>{
    return isGrayed && `color: gray !important; `
}}
`;

const CalendarDay = ({ date, isGrayed, isSelected, onClick }: DayProps) => {
  return (
    <DayElement isGrayed={isGrayed} isSelected={isSelected} onClick={() => onClick(date)} className={getWeekClass(date.day())}>
      { date.date() }
    </DayElement>
  );
};

export default CalendarDay;
