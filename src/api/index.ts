import axios from 'axios';
import { ITodo } from '../models/todo';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const fetchers = {
  // Todos
  getTodos: async () => axios.get('/todos'),
  addTodo: async (data: Omit<ITodo, 'id'>) => axios.post('/todos', data),
};
