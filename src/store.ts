import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { User } from './models/user';
import { ITodo } from './models/todo';

export interface State {
    user: User | null;
    todos: ITodo[];
}

const initialState: State = {
    user: null,
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
    GetTodos = 'GET_TODOS',
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.GetTodos: {
            const { todos } = action.payload;
            return {
                ...state,
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