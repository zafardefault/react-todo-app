import { useState } from "react";
import TodoInput from "./TodoInput";
import UncheckImg from "../assets/uncheck.png";
import CheckedImg from "../assets/checked.png";
import "../App.css";

const Todo = ({ todo, toggleCompleted, editTodo }) => {
  const [editable, setEditable] = useState(false);

  const confirmEdit = (value) => {
    editTodo(todo, value);
    setEditable(false);
  };

  return (
    <div className="todo" key={todo.id}>
      {editable ? (
        <TodoInput
          buttonText="OK"
          handleButtonPress={confirmEdit}
          value={todo.value}
        />
      ) : (
        <>
          <span
            className={`todo-value ${todo.isCompleted ? "completed" : ""}`}
            onDoubleClick={() => setEditable(true)}
          >
            {todo.value}
          </span>
          <img
            src={todo.isCompleted ? CheckedImg : UncheckImg}
            alt="uncheck"
            width="25"
            height="25"
            onClick={() => toggleCompleted(todo)}
          />
        </>
      )}
    </div>
  );
};

export default Todo;
