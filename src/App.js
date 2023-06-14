import { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "React", content: "오늘도 화이팅!" },
  ]);

  // Todo 입력
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
    const newtodo = {
      id: todos.length + 1,
      title: title,
      content: content,
    };
    setTodos([...todos, newtodo]);
    setTitle("");
    setContent("");
  };

  // Todo 삭제
  const clickRemoveButtonHandler = (id) => {
    const maintainTodos = todos.filter((todo) => todo.id !== id);
    setTodos(maintainTodos);
  };

  return (
    <div>
      <div className="header">My To Do List</div>
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
          추가하기
        </button>
      </div>
      <div className="working">Working...🔥</div>
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
      <div>
        <div className="done">Done..! 🎉</div>
      </div>
    </div>
  );
};

// Todo 컴포넌트 분리
const Todo = ({ todo, clickRemoveButtonHandler }) => {
  return (
    <div key={todo.id} className="todo">
      <div className="todo-title">{todo.title}</div>
      <div className="todo-content">{todo.content}</div>
      <div className="button">
        <button
          className="remove-btn"
          onClick={() => clickRemoveButtonHandler(todo.id)}
        >
          삭제
        </button>
        <button className="done-btn">완료</button>
      </div>
    </div>
  );
};

export default App;
