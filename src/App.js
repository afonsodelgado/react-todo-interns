import React from 'react';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #FFCDB2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 98vh;
`;

class App extends React.Component {
  state = {
    todoItems: []
  }

  handleAddItem = todoItem => {
    const todoItems = [ ...this.state.todoItems, todoItem ];
    this.setState({ todoItems });
  }

  handleItemClick = itemIndex => {
    const todoItems = this.state.todoItems.map((item, index) => {
      if (index === itemIndex) {
        item.isDone = !item.isDone;
      }
      return item;
    })

    this.setState({ todoItems });
  }

  render() {
    return (
      <Container>
        <Title>NEW TODO</Title>
        <TodoInput onAddItem={this.handleAddItem}/>
        <TodoList>
          {this.state.todoItems.map((item, index) => (
            <TodoItem
              key={index}
              index={index}
              isDone={item.isDone}
              onItemClick={this.handleItemClick}
            >
              {item.name}
            </TodoItem>
          ))}
        </TodoList>
      </Container>
    )
  }
}

export default App;