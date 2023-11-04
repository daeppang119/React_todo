import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const submit = function (e) {
    e.preventDefault();
    // console.log(title, detail);
    const Number = Date.now();
    const newTodo = { title: title, detail: detail, id: Number, isDone: false };

    setTodos([...todos, newTodo]);
  };

  return (
    <form onSubmit={submit}>
      제목 :
      <Input todos={title} setTodos={setTitle} />
      내용 :
      <Input todos={detail} setTodos={setDetail} />
      <Button />
    </form>
  );
}

export default Form;
