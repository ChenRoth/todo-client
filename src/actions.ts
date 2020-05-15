import { Actions, Action } from "./store"
import { Dispatch } from "redux";
import axios from 'axios';
import { ITodo } from "./models/todo";
import { RegisterResult } from "./models/registerResult";

// this is an action creator
// action creators are functions that return an action object
export const createGetTodosAction = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: Actions.GetTodosPending,
            payload: {},
        });
        
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get<ITodo[]>('http://localhost:3001/todos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const todos = response.data;

            dispatch({
                type: Actions.GetTodosSuccess,
                payload: {
                    todos,
                }
            });
        }
        catch {
            dispatch({
                type: Actions.GetTodosFail,
                payload: {},
            });
        }
    }
}

export const registerAction = (id: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        const {data: result} = await axios.post<RegisterResult>('http://localhost:3001/users/register', {
            id,
            password,
        });

        if (result.success) {
            dispatch({
                type: Actions.Register,
                payload: {}
            });
            localStorage.setItem('token', result.token);
        }
    }
}