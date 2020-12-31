import { Dayjs } from "dayjs";
import { createAction, handleActions } from "redux-actions";
import { getKey } from "../utils";

let id = 0; // 임시 ID 값

const INSERT = "todo/INSERT";
const REMOVE = "todo/REMOVE";
const TOGGLE = "todo/TOGGLE";

export interface InsertType {
  date: Dayjs;
  value: string;
}

export interface UpdateType {
  date: Dayjs;
  id: number;
}

export interface ITodo {
  id: number;
  text: any;
  done: boolean;
}

export interface ITodosState {
  [key: string]: ITodo[];
}

export const todosActions = {
  toggle: createAction<UpdateType, UpdateType>(TOGGLE, ({ date, id}) => ({ date, id })),
  remove: createAction<UpdateType, UpdateType>(REMOVE, ({ date, id}) => ({ date, id })),
  insert: createAction<{ date:Dayjs, todo: ITodo }, InsertType>(INSERT, ({ date, value }) => {
    return {
      date,
      todo: {
        id: ++id,
        text: value,
        done: false,
      }
    };
  }),
};

const initialState: ITodosState = {};
type InsertAction = ReturnType<typeof todosActions.insert>;
type RemoveAction = ReturnType<typeof todosActions.remove>;
type ToggleAction = ReturnType<typeof todosActions.toggle>;

const reducer = handleActions<ITodosState, any>(
  {
    [TOGGLE]: (state: ITodosState, action:ToggleAction) => {
      const { payload } = action;
      const { date, id } = payload;
      const key = getKey(date);
      const updateTodos = state[key].map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
      return {
        ...state,
        [key]: updateTodos
      }
    },
    [REMOVE]: (state:ITodosState, action:RemoveAction) => {
      const { payload } = action;
      const { date, id } = payload;
      const key = getKey(date);
      const removedTodos = state[key].filter(todo => todo.id !== id);
      return {
        ...state,
        [key]: removedTodos
      };
    },
    [INSERT]: (state:ITodosState, action: InsertAction) => {
      const { payload } = action;
      const { date, todo } = payload;
      const key = getKey(date);
      const list = state[key] || [];
      list.push(todo);
      return {
        ...state,
        [key]: list
      };
    },
  }, initialState);


export default reducer;
