import { useState } from "react";
import "../App.css";

const TodoInput = ({ buttonText, handleButtonPress, value, ...props }) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [inputError, setInputError] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      handleButtonPress(inputValue);
      setInputValue("");
      setInputError("");
    } else {
      setInputError("Todo value cannot be empty!");
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="name"
          value={inputValue}
          className="todo-input"
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
        ></input>
        {inputError && <span className="error-message">{inputError}</span>}
      </div>
      <button type="button" onClick={handleSubmit}>
        {buttonText}
      </button>
    </div>
  );
};

export default TodoInput;
