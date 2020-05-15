import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface State {
}

const initialState: State = {
 
}

interface Action {
    type: string;
    payload: Record<string, any>;    
}

export enum Actions {
 
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export function createReduxStore() {
    const logger = createLogger();
    const middleware = composeWithDevTools(applyMiddleware(logger));
    return createStore(reducer, middleware);
}