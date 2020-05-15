import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { User } from './models/user';
import { ITodo } from './models/todo';

export interface State {
    isLoggedIn: boolean;
    user: User | null;
    isGettingTodos: boolean;
    todos: ITodo[];
}

const initialState: State = {
    isLoggedIn: false,
    user: null,
    isGettingTodos: false,
    todos: [],
}

export interface Action {
    type: string;
    payload: Record<string, any>;    
}

export enum Actions {
    Login = 'LOGIN',
    Register = 'REGISTER',
    CreateTodo = 'CREATE_TODO',
    GetTodosPending = 'GET_TODOS_PENDING',
    GetTodosSuccess = 'GET_TODOS_SUCCESS',
    GetTodosFail = 'GET_TODOS_FAIL',
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.Register: {
            return {
                ...state,
                isLoggedIn: true,
            }
        }

        case Actions.GetTodosPending: {
            return {
                ...state,
                isGettingTodos: true,
            }
        }

        case Actions.GetTodosFail: {
            return {
                ...state,
                isGettingTodos: false,
            }
        }

        case Actions.GetTodosSuccess: {
            const { todos } = action.payload;
            return {
                ...state,
                isGettingTodos: false,
                todos,
            }
        }

        default: {
            return state;
        }
    }
}

export function createReduxStore() {
    const logger = createLogger();
    const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
    return createStore(reducer, middleware);
}