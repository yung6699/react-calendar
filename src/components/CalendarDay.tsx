import React from "react";
import styled from "styled-components";
import { CALENDAR_ITEM_WIDTH } from "styles/Variables";
import { getWeekClass } from "utils";
import { Dayjs } from "dayjs";

interface DayProps {
  date: Dayjs;
  isGrayed: Boolean;
  isSelected: Boolean;
  isMarked?: Boolean;
  onClick: (date:Dayjs) => void;
}

interface DayElementProps {
  isSelected: Boolean;
  isGrayed: Boolean;
  isMarked: Boolean
}

const DayElement = styled.td<DayElementProps>`
  position: relative;
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
  
  ${({isMarked}) => {
    return isMarked && `
      &:before {
        position: absolute;
        right: 6px;
        top: 8px;
        content: "";
        width: 8px;
        height: 8px;
        background: red;
        border-radius: 50%;
      }
    `
  }}
`;

const CalendarDay = ({ date, isGrayed, isSelected, isMarked = false, onClick }: DayProps) => {
  return (
    <DayElement isGrayed={isGrayed} isSelected={isSelected} isMarked={isMarked} onClick={() => onClick(date)} className={getWeekClass(date.day())}>
      { date.date() }
    </DayElement>
  );
};

export default CalendarDay;
