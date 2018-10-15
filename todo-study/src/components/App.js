import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import Navigation from './Navigation';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import ModalTemplate from './ModalTemplate';
import TodoInput from './TodoInput';

class App extends Component {

    state = {
        show: false
    };

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
        return (
            <PageTemplate>
                <Navigation />
                <TodoSearch />
                <TodoList />
                <ModalTemplate modal={this.state.show} onOpenModal={this.handleOpenModal}
                     onCloseModal={this.handleCloseModal}>
                    <TodoInput />
                </ModalTemplate>
            </PageTemplate>
        );
    }
}

export default App;