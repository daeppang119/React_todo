import React, { useState } from "react";
import Form from "./Component/Form";
import List from "./Component/List";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="main">
      <div className="header">
        <h1>대빵이의 TodoList</h1>
        <span>React</span>
      </div>
      <Form todos={todo} setTodos={setTodo} />
      <span>해야할 일 🔥</span>
      <List todos={todo} setTodos={setTodo} isDone={false} />
      <span>완료한 일 🔥</span>
      <List todos={todo} setTodos={setTodo} isDone={true} />
    </div>
  );
}

export default App;
