import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import Navigation from './Navigation';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import ModalTemplate from './ModalTemplate';
import TodoInput from './TodoInput';

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
    
    getDate = () => {
        const today = new Date();
        const dd = today.getDate() < 10 ? '0'+ today.getDate() : today.getDate();
        const mm = today.getMonth() + 1 < 10 ? '0'+today.getMonth() : (today.getMonth() + 1);
        const yyyy = today.getFullYear();
        const hour = today.getHours();
        const min = today.getMinutes();

        return `${yyyy}-${mm}-${dd} ${hour}:${min} ~ ${yyyy}-${mm}-${dd} ${hour}:${min}`;
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

    handleSearch = (searchValue) => {
        this.setState({
            keyword: searchValue
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

    handleInsert = () => {
        const { todos, input } = this.state;

        const newTodo = {
            text: input,
            done: false,
            date: this.getDate(),
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
            handleSearch,
            handleOpenModal,
            handleCloseModal
        } = this;

        return (
            <PageTemplate>
                <Navigation onFilter={handleFilter} onSort={handleSort}/>
                <TodoSearch onSearch={handleSearch} />
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