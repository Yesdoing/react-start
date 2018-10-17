import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {


    render() {
        const { todos, filter, keyword, onToggle, onRemove } = this.props;
        const searchedTodos = todos.filter(x => x.text.includes(keyword));
        const todoList = searchedTodos.map(
            todo => {
                if(filter === 'done' && todo.done === false) return false;
                if(filter === 'todo' && todo.done === true) return false;
                return ( <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={() => onToggle(todo.id)}
                    onRemove={() => onRemove(todo.id)}>
                    {
                        {
                            text: todo.text,
                            date: todo.date
                        }
                    }
                </TodoItem>
                )
            }
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;