import { createStore, createEffect } from 'effector';
import { fetchers } from '../../api';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const $todo = createStore<ITodo[]>([]);

export const addTodoFx = createEffect(async (title: string) => {
  const response = await fetchers.addTodo({
    title: title,
    completed: false,
    userId: 1,
  });
  return response.data;
});

export const getTodosFx = createEffect(async () => {
  const response = await fetchers.getTodos();
  return response.data;
});

$todo
  .on(addTodoFx.doneData, (_state, repos) => {
    return [..._state, repos];
  })
  .on(getTodosFx.doneData, (_, repos) => {
    return repos;
  });
