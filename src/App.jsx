import React from "react";
import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "개인과제 완성하기",
      isDone: false,
    },
    {
      id: 2,
      title: "알고리즘 공부하기",
      content: "프로그래머스 문제풀기",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // Todo 추가
  const clickAddButtonHandler = () => {
    if (title === "") {
      alert("제목을 입력해주세요!");
    } else if (content === "") {
      alert("내용을 입력해주세요!");
    } else {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        content: content,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  // Todo 삭제
  const clickRemoveButtonHandler = (id) => {
    const maintainTodo = todos.filter((todo) => todo.id !== id);
    setTodos(maintainTodo);
  };

  // Todo 토글
  const clickToggleButtonHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="layout">
      <div className="my-todo-list">
        <div className="header">My To Do List ✏️</div>
        <div className="todo-input">
          제목 &nbsp;
          <input
            className="title"
            value={title}
            onChange={titleChangeHandler}
          ></input>
          내용 &nbsp;
          <input
            className="content"
            value={content}
            onChange={contentChangeHandler}
          ></input>
          <button className="add-btn" onClick={clickAddButtonHandler}>
            등록
          </button>
        </div>
        <div className="working">Working...🔥</div>
        <div className="todo-list">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  clickRemoveButtonHandler={clickRemoveButtonHandler}
                  clickToggleButtonHandler={clickToggleButtonHandler}
                />
              );
            }
          })}
        </div>
        <div>
          <div className="complete">Done..! 🎉</div>
          <div className="done-list">
            {todos.map((todo) => {
              if (todo.isDone) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    clickRemoveButtonHandler={clickRemoveButtonHandler}
                    clickToggleButtonHandler={clickToggleButtonHandler}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
