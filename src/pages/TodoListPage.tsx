import React, { useState } from "react";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { Dayjs } from "dayjs";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px auto;
  box-sizing: border-box;
  border-radius: 24px;
  overflow: hidden;
  max-width: 800px;
`;

const TodoListPage = () => {
  const [date, setDate] = useState<Dayjs>();
  const onGetDate = (date:Dayjs) => {
    setDate(date)
  };

  return (
    <Container>
      <TodoList date={date}/>
      <Calendar onGetDate={onGetDate}/>
    </Container>
  );
};

export default TodoListPage;
