import React from "react";

function List({ todos, setTodos, isDone }) {
  const deletBtn = function (id) {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const filterTodos = todos.filter((todo) => {
    return todo.isDone === isDone;
  });

  // 완료를 버튼을 누르면 (조건문) 1. 완료문구가 취소버튼으로 바뀐다 2. done으로 내려간다
  // newTodo라는 객체의 isDone의 value값이 true이면 완료문구가 취소버튼, done으로 내려간다.(재렌더링 무엇으로? => setTodo에 새롭게 넣어준다)
  // newTodo라는 객체의 isDone의 value값이 false이면 취소문구가 완료버튼, working으로 올라간다.
  const stateBtn = function (element) {
    const newArr = [
      ...todos.filter((todo) => {
        return todo.id !== element.id;
      }),
      {
        ...element,
        isDone: element.isDone ? false : true,
      },
    ];
    console.log(newArr);
    setTodos(newArr);
  };

  return (
    <>
      <ul>
        {filterTodos.map(function (element) {
          return (
            <>
              <li key={element.id}>
                {element.title}
                {element.detail}
              </li>
              <button onClick={() => deletBtn(element.id)}>삭제</button>
              <button onClick={() => stateBtn(element)}>
                {element.isDone ? "취소" : "완료"}
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default List;
