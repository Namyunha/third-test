import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
  padding: 2%;
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
`;

const TodoItem = styled.div`
  border: 1px solid black;
  padding: 0 1% 3% 1%;
  border: 1px solid green;
  border-radius: 5px;
`;

const TodoListdDiv = styled.div`
  display: flex;
  gap: 1%;
`

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "테스트",
    },
    {
      id: 2,
      title: "테스트2",
    },
  ]);
  const [todoTitle, setTodoTitle] = useState('');

  const insertTodo = (event) => {
    setTodoTitle(event.target.value);
  };

  const addTodo = () => {
    if (todoTitle.trim() === '') {
      return; // Prevent adding empty todos
    }

    let newTodo = { id: todoList.length + 1, title: todoTitle };
    let newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoTitle('');
  };

  return (
    <Wrapper>
      <CenteredDiv>
        <Input type="text" onChange={insertTodo} placeholder="자바스크립트를 배워봅시다" value={todoTitle} />
        <button onClick={addTodo}>추가하기</button>
      </CenteredDiv>
      <CenteredDiv>
        <h1>Todo List</h1>
      </CenteredDiv>
      <TodoListdDiv>
        {todoList.map((todo) => (
          <TodoItem key={todo.id}>{todo.title}</TodoItem>
        ))}
      </TodoListdDiv>
    </Wrapper>
  );
}

export default App;
