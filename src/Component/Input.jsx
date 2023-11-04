import React from "react";

function Input({ todos, setTodos }) {
  return (
    <>
      <input
        value={todos}
        onChange={(e) => {
          setTodos(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
