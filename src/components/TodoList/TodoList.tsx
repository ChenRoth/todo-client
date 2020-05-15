import React from 'react';
import { ITodo } from '../../models/todo';
import { Todo } from '../Todo/Todo';
import { State } from '../../store';
import { connect } from 'react-redux';
import { createGetTodosAction } from '../../actions';

interface TodoListProps {
    todos: ITodo[];
    getTodos(): void;
}

class _TodoList extends React.Component<TodoListProps> {
    componentDidMount() {
        const {getTodos} = this.props;
        getTodos();
    }

    render() {
        const { todos } = this.props;
        return (
            <div>
                {todos.map(todo =>
                    <Todo key={todo.id} {...todo} />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    getTodos: createGetTodosAction,    
}
/*
 what this object does is actually this:
  const mapDispatchToProps = (dispatch) => ({
    getTodos: () => dispatch(createGetTodosAction()),
  });
*/

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(_TodoList);
