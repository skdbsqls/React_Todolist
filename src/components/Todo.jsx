const Todo = ({ todo, clickRemoveButtonHandler, clickToggleButtonHandler }) => {
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
        <button
          className="toggle-btn"
          onClick={() => clickToggleButtonHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
