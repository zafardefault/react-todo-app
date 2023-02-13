const CompletedButton = ({ todos, onClick }) => {
  return (
    todos.length > 0 && (
      <button type="button" className="completed-button" onClick={onClick}>
        Clear Completed
      </button>
    )
  );
};

export default CompletedButton;
