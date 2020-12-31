import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { Dayjs } from "dayjs";
import { connect } from "react-redux";
import { todosActions, InsertType, ITodosState, ITodo, UpdateType } from "store/todos";
import { bindActionCreators, Dispatch } from 'redux';
import { getKey } from "../utils";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #e7ebec;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  width: 80%;
  border-radius: 16px;

  min-height: 600px;
  max-width: 800px;
  max-height: 800px;
`;

interface TodoListPageProps {
  allTodos: ITodosState;
  insert: (data:InsertType) => void;
  remove: (data:UpdateType) => void;
  toggle: (data:UpdateType) => void;
}

const TodoListPage = ({ allTodos, insert, remove, toggle}: TodoListPageProps) => {
  const [date, setDate] = useState<Dayjs>();
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [markingList, setMarkingList] = useState<string[]>();

  useEffect(() => {
    if (!date) return;
    const key = getKey(date);
    setTodos(allTodos[key]);
  }, [date, allTodos]);

  useEffect(() => {
    if (!date) return;
    const markingList = [];
    for (let key in allTodos) {
      if (allTodos[key].length > 0) markingList.push(key);
    }
    setMarkingList(markingList)
  }, [allTodos]);

  const onGetDate = (date:Dayjs) => setDate(date);

  const onInsert = (date:Dayjs, value:string) => {
    if (!date || !value) return;
    insert({ date, value });
  };

  const onRemove = (date:Dayjs, id:number) => remove({ date, id });
  const onToggle = (date:Dayjs, id: number) => toggle({ date, id });

  return (
    <Wrapper>
      <Container>
        <TodoList date={date} todos={todos} onInsert={onInsert} onRemove={onRemove} onToggle={onToggle}/>
        <Calendar onGetDate={onGetDate} markingList={markingList}/>
      </Container>
    </Wrapper>
  );
};


export default connect(
  ({ todos }: any) => ({
    allTodos: todos
  }),
  (dispatch:Dispatch) => bindActionCreators(todosActions, dispatch)
)(TodoListPage);
