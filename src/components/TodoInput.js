import React from 'react'
import styled from '@emotion/styled';

const StyledInput = styled.input`
  width: 50%;
  padding: 8px;
  font-size: 48px;
  color: #6D6875;
`;

class TodoInput extends React.Component {
  state = {
    todoValue: ''
  }

  handleInputChange = event => {
    this.setState({ todoValue: event.target.value });
  }

  handleSubmit = event => {
    if (event.key === 'Enter') {
      console.log(this.state.todoValue);
      this.props.onAddItem({ name: this.state.todoValue, isDone: false })
    }
  }

  render() {
    return (
      <StyledInput
        value={this.state.todoValue}
        onChange={this.handleInputChange}
        onKeyPress={this.handleSubmit}
      />
    )
  }
}

export default TodoInput;
