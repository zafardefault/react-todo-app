import Todo from "./Todo";

const Todos = ({ todos, toggleCompleted, editTodo }) => {
  return (
    todos.length > 0 &&
    todos.map((todo) => (
      <Todo
        todo={todo}
        key={todo.id}
        toggleCompleted={toggleCompleted}
        editTodo={editTodo}
      />
    ))
  );
};

export default Todos;
