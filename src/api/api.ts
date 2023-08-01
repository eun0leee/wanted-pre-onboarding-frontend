import { defaultInstance, authInstance } from './axios';

export const signup = async (email: string, password: string) => {
  const data = defaultInstance.post('/auth/signup', {
    email,
    password,
  });
  return data;
};

export const signin = async (email: string, password: string) => {
  const res = defaultInstance.post('/auth/signin', { email, password });
  return res;
};

export const createTodo = async (todo: string) => {
  authInstance.post('/todos', { todo });
};

export const getTodos = async () => {
  authInstance.post('/todos');
};

export const update = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  authInstance.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id: number) => {
  authInstance.delete(`/todos/${id}`);
};
