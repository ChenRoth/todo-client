import { Actions, Action } from "./store"
import { Dispatch } from "redux";
import axios from 'axios';
import { ITodo } from "./models/todo";

// this is an action creator
// action creators are functions that return an action object
export const createGetTodosAction = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: Actions.GetTodosPending,
            payload: {},
        });
        // login/register are not implemented yet, so we get the token using POSTMAN
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNoZW4iLCJpYXQiOjE1ODk1MzMzMDZ9.fEERckCIQS5QHQHBmE5vM6eFJFgpv-83bnk2sYyTAFU';
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
