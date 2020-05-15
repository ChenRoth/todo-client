import React from 'react';
import { ITodo } from '../../models/todo';
import { Todo } from '../Todo/Todo';
import { State } from '../../store';
import { connect } from 'react-redux';
import { createGetTodosAction } from '../../actions';

interface TodoListProps {
    todos: ITodo[];
    getTodos(): void;
    isLoading: boolean;
}

class _TodoList extends React.Component<TodoListProps> {
    componentDidMount() {
        const {getTodos} = this.props;
        getTodos();
    }

    render() {
        const { isLoading, todos } = this.props;
        if (isLoading) {
            return 'Getting TODO list...';
        }
        
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
    isLoading: state.isGettingTodos,
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
