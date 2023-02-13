import { useState, useEffect } from "react";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";
import CompletedButton from "./components/CompletedButton";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoValues = localStorage.getItem("todos");
    if (todoValues) {
      setTodos(JSON.parse(todoValues));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (value) => {
    const todoData = {
      id: Math.random().toString(36).slice(2),
      value: value,
      isCompleted: false,
    };
    setTodos((todo) => [...todo, todoData]);
  };

  const toggleCompleted = (value) => {
    const index = todos.findIndex((todo) => value.id === todo.id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const editTodo = (todo, value) => {
    const index = todos.findIndex((val) => todo.id === val.id);
    const newTodos = [...todos];
    newTodos[index].value = value;
    setTodos(newTodos);
  };

  const removeCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(filteredTodos);
    if (filteredTodos.length === 0) {
      localStorage.removeItem("todos");
    }
  };

  return (
    <div className="App">
      <span>Add a todo</span>
      <TodoInput
        handleButtonPress={addTodo}
        buttonText="Add"
        placeholder="Work/Study/Eat"
      />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        editTodo={editTodo}
      />
      <CompletedButton todos={todos} onClick={removeCompleted} />
    </div>
  );
};

export default App;
