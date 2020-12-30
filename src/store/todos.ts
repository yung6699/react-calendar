import { Dayjs } from "dayjs";
import { createAction, handleActions } from "redux-actions";
import { getKey } from "../utils";

let id = 0; // 임시 ID 값

const INSERT = "todo/INSERT";
const REMOVE = "todo/REMOVE";
const TOGGLE = "todo/TOGGLE";

export interface InsertType {
  date: Dayjs;
  value: any;
}

export interface ITodo {
  id: number;
  text: any;
  done: boolean;
  date: string;
}

export interface ITodosState {
  todos: ITodo[];
}

export const todosActions = {
  toggle: createAction<number, number>(TOGGLE, id => id),
  remove: createAction<number, number>(REMOVE, id => id),
  insert: createAction<ITodo, InsertType>(INSERT, ({ date, value }) => {
    const todoInfo: ITodo = {
      id,
      text: value,
      done: false,
      date: getKey(date),
    };
    id++;
    return todoInfo;
  }),
};

const initialState: ITodosState = {
  todos: []
};

type InsertAction = ReturnType<typeof todosActions.insert>;
type RemoveAction = ReturnType<typeof todosActions.remove>;
type ToggleAction = ReturnType<typeof todosActions.toggle>;

const reducer = handleActions<ITodosState, any>(
  {
    [TOGGLE]: (state: ITodosState, action:ToggleAction) => {
      const { payload: id } = action;
      const updateTodos = state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
      console.log('updateTodos', updateTodos);
      return {
        ...state,
       todos: updateTodos
      }
    },
    [REMOVE]: (state:ITodosState, action:RemoveAction) => {
      const { payload: id } = action;
      const filteredTodos = state.todos.filter(todo => todo.id !== id);
      return {
        ...state,
        todos: filteredTodos
      };
    },
    [INSERT]: (state:ITodosState, action: InsertAction) => {
      const { payload: todo } = action;
      state.todos.push(todo);
      return {
        ...state
      };
    },
  }, initialState);


export default reducer;
