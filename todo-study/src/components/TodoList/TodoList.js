import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const children = [
            {
                content: '티티 간식 주기',
                date: '2018-09-09 18:00 ~ 2018-09-09 19:00'
            },
            {
                content: '둔둔이 챱챱',
                date: '2018-09-08 20:00 ~ 2018-09-09 18:00'
            }
        ];

        return (
            <div>
                <TodoItem>{children[0]}</TodoItem>
                <TodoItem done>{children[1]}</TodoItem>
            </div>
        );
    }
}

export default TodoList;