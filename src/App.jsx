import React from "react";
import Form from "./Component/Form";
import List from "./Component/List";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="main">
      <h1>대빵이의 TodoList</h1>
      <Form todos={todo} setTodos={setTodo} />
      <span>해야할 일 🔥</span>
      <List todos={todo} setTodos={setTodo} isDone={false} />
      <span>완료한 일 🔥</span>
      <List todos={todo} setTodos={setTodo} isDone={true} />
    </div>
  );
}

export default App;
