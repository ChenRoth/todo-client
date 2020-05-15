import React from 'react';
import { ITodo } from '../../models/todo'
import './Todo.css';

export class Todo extends React.Component<ITodo> {
    render() {
        const { date, description } = this.props;
        return (
            <div className="todo">
                <h4>TODO</h4>
                <p>{description}</p>
                <p>{date.toString()}</p>
            </div>
        )
    }
}