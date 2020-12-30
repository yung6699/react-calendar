import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { Dayjs } from "dayjs";
import { connect } from "react-redux";
import { todosActions, InsertType, ITodosState, ITodo } from "store/todos"
import { bindActionCreators, Dispatch } from 'redux';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 24px;
  overflow: hidden;
  max-width: 800px;
  min-height: 500px;
`;

interface TodoListPageProps {
  todos: ITodo[];
  insert: (data:InsertType) => void;
  remove: (id:number) => void;
  toggle: (id:number) => void;
}

const TodoListPage = ({ todos, insert, remove, toggle}: TodoListPageProps) => {
  const [date, setDate] = useState<Dayjs>();

  const onGetDate = (date:Dayjs) => {
    setDate(date)
  };

  const onInsert = (value:any) => {
    if (!date || !value) return;
    const data: InsertType = { date, value };
    insert(data);
  };

  const onRemove = (id:number) => remove(id);
  const onToggle = (id: number) => toggle(id);

  return (
    <Container>
      <TodoList date={date} todos={todos} onInsert={onInsert} onRemove={onRemove} onToggle={onToggle}/>
      <Calendar onGetDate={onGetDate}/>
    </Container>
  );
};


export default connect(
  ({ todos }:any) => ({
    todos: todos.todos
  }),
  (dispatch:Dispatch) => bindActionCreators(todosActions, dispatch)
)(TodoListPage);
