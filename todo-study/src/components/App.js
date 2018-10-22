import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import Navigation from './Navigation';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import ModalTemplate from './ModalTemplate';
import TodoInput from './TodoInput';
import moment from 'moment';

class App extends Component {

    state = {
        input: '',
        todos: [
            {id:0, text: '티티 간식 주기', date: '2018-09-09 18:00 ~ 2018-09-09 19:00', done: true},
            {id:1, text: '둔둔이 챱챱', date: '2018-09-08 20:00 ~ 2018-09-09 18:00', done: false}
        ],
        show: false,
        filter: 'all',
        keyword: ''
    };

    id = 1
    
    getId = () => {
        return ++this.id;
    }
    
    getDate = (date) => {
        const today = moment().format('YYYY-MM-DD');
        return `${today} ~ ${date}`;
    }

    handleFilter = (state) => {
        this.setState({
            filter: state
        })
    }

    handleSort = () => {
        const sortedTodos = this.state.todos.sort((a, b) => {
            return 1;
        });
        this.setState({
            todos: sortedTodos
        })
    }

    handleChangeKeyword = (e) => {
        const { value } = e.target;
        this.setState({
            keyword: value
        });
    }

    handleRemove = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [
            ...todos.slice(0, index),
            ...todos.slice(index+1, todos.length)
            ]
        });
    }

    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        this.setState({
            todos: [
                ...todos.slice(0,index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        });
    }

    handleInsert = (date) => {
        const { todos, input } = this.state;

        const newTodo = {
            text: input,
            done: false,
            date: this.getDate(date),
            id: this.getId()
        };

        this.setState({
            todos: [newTodo, ...todos],
            input: ''
        });
    }


    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    handleOpenModal = () => {
        console.log('handleOpenModal');
        this.setState({
            show: true,
        });
        
    }
    handleCloseModal = (e) => {
        console.log('handleCloseModal');
        this.setState({
            show: false,
        })
    }

    render() {
        const { input, show, todos, filter, keyword } = this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove,
            handleFilter,
            handleSort,
            handleChangeKeyword,
            handleOpenModal,
            handleCloseModal
        } = this;

        return (
            <PageTemplate>
                <Navigation onFilter={handleFilter} onSort={handleSort}/>
                <TodoSearch onChange={handleChangeKeyword} value={keyword}/>
                <TodoList todos={todos} keyword={keyword} filter={filter} onToggle={handleToggle} onRemove={handleRemove} />
                <ModalTemplate modal={show} onOpenModal={handleOpenModal}
                     onCloseModal={handleCloseModal}>
                    <TodoInput onInsert={handleInsert} onChange={handleChange} value={input} onCloseModal={handleCloseModal} />
                </ModalTemplate>
            </PageTemplate>
        );
    }
}

export default App;