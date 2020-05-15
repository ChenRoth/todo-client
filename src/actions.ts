import { Actions, Action } from "./store"
import { ITodo } from "./models/todo"
import { Dispatch } from "redux";

// this is an action creator
// action creators are functions that return an action object
export const createGetTodosAction = () => {
    // call server API

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: Actions.GetTodosPending,
            payload: {},
        });
        try {


            const action = await new Promise<Action>(resolve => {
                setTimeout(() => {
                    const action = {
                        type: Actions.GetTodosSuccess,
                        payload: {
                            todos: [
                                {
                                    id: '1',
                                    description: 'buy milk',
                                    date: new Date(2020, 6, 1),
                                },
                                {
                                    id: '2',
                                    description: 'clean the house',
                                    date: new Date(2020, 6, 2),
                                },
                                {
                                    id: '3',
                                    description: 'sell the car',
                                    date: new Date(2020, 8, 5),
                                },
                            ] as ITodo[],
                        }
                    };
                    resolve(action);
                }, 2000);
            });

            dispatch(action);
        }
        catch {
            dispatch({
                type: Actions.GetTodosFail,
                payload: {},
            });
        }
    }
}