import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
  border-radius: 16px;
  background-color: white;
`;

const TodoName = styled.span`
  ${({ isDone }) => css`
    color: ${isDone ? '#ccc' : '#6D6875'};
    font-size: 32px;
    text-decoration: ${isDone ? 'line-through' : 'none'};
    font-style: ${isDone ? 'italic' : 'none'};
  `}
`;

const TodoItem = ({ children, isDone, onItemClick, index }) => (
  <Container onClick={() => onItemClick(index)}>
    <TodoName isDone={isDone}>{children}</TodoName>
  </Container>
);

export default React.memo(TodoItem);