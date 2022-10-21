interface IApi {
    USERS_LIST: string;
    TODOS_LIST: string;
};

export const BASE_URL: string = 'http://localhost:8081/api/';

export const API: IApi = {
    USERS_LIST: 'users',
    TODOS_LIST: 'todos',
};

export const URL_PARAM_VALUES = {
    CHANGESIDEBAR: 'changesidebar',
    NEWLIST: 'newlist'
};
