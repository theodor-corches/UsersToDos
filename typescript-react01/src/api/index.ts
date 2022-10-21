import axios from 'axios';
import { API, BASE_URL } from '../constants';
import { ITodo } from '../interfaces/ITodo';
import { IUser } from '../interfaces/IUser';

interface IUsersListResponse {
    data: IUser[]
  };

interface ITodosListResponse {
  data: ITodo[]
};

export const getUsersList = (): Promise<IUsersListResponse> =>
    axios.get(`${BASE_URL}${API.USERS_LIST}`);

export const getTodosList = (): Promise<ITodosListResponse> =>
    axios.get(`${BASE_URL}${API.TODOS_LIST}`);
