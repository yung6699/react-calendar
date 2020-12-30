import React, { useState } from "react";
import styled from "styled-components";
import { DAY_OF_WEEK } from "constants/enums";
import { Dayjs } from "dayjs";
import Input from "components/Input";
import useInput from "hooks/useInputs";
import { ITodo } from "store/todos"
import { getKey } from "../utils";


interface CalendarSideProps {
  date?: Dayjs;
  todos?: ITodo[];
  onInsert?: (value:any) => any;
  onRemove?: (id:number) => any;
  onToggle?: (id:number) => any;
}

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #0b070a;
  color: #ddaf3b;
`;

const DayOfWeek = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 16px;
`;

const Day = styled.div`
    font-size: 120px;
    font-weight: bold;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
`;

const SaveButton = styled.button`
   width: 60px;
   outline: none;
   margin-left: 4px;
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  margin-top: 10px;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding: 12px;
  box-sizing: border-box;
`;

const ListItemText = styled.div<{ done: Boolean }>`
  width: 100%;
  max-width: 270px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
    ${({ done })=>{
      return done && `
        text-decoration: line-through
      `
    }}
`;


const TodoList = ({ date, todos, onInsert, onRemove, onToggle }: CalendarSideProps) => {
  const { onChange, value, onReset } = useInput('');

  const makeTodoList = (todos: ITodo[], date: Dayjs) => {
    const filterdTodo:ITodo[] = todos.filter(todo => todo.date === getKey(date));
    return filterdTodo.map((item: ITodo) => {
      return (
          <ListItem key={item.id}>
            <input type="checkbox" onChange={() => onToggle?.(item.id)} checked={item.done}/>
            <ListItemText done={item.done}>{item.id} : {item.text}</ListItemText>
            <button onClick={() => onRemove?.(item.id)}>삭제</button>
          </ListItem>
      )
    });
  };

  const onSave = (value:any) => {
    if (!value) return;
    onInsert?.(value);
    onReset();
  };

  return (
    <SideContent>
      <DateWrapper>
        <DayOfWeek className={"dayOfWeek"}>{date && DAY_OF_WEEK[date.day()]}</DayOfWeek>
        <Day className={"day"}>{date?.date()}</Day>
      </DateWrapper>
      <InputWrapper>
        <Input onChange={onChange} value={value}/>
        <SaveButton onClick={() => onSave(value)}>저장</SaveButton>
      </InputWrapper>
      <List>
        { todos && date && makeTodoList(todos, date) }
      </List>
    </SideContent>
  );
};

export default TodoList;
