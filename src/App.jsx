import React, { useState } from "react";
import "./App.css";
function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  function handleNumberClick(number) {
    if (displayValue === "0" || waitingForSecondValue) {
      setDisplayValue(number);
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue + number);
    }
  }

  function handleOperatorClick(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const currentValue = firstValue || 0;
      const newValue = operate(currentValue, inputValue, operator);
      setFirstValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  }

  function handleEqualsClick() {
    const inputValue = parseFloat(displayValue);

    if (operator && firstValue !== null) {
      const currentValue = firstValue || 0;
      const newValue = operate(currentValue, inputValue, operator);
      setDisplayValue(String(newValue));
      setFirstValue(newValue);
    }

    setWaitingForSecondValue(true);
  }

  function handleClearClick() {
    setDisplayValue("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  }

  function operate(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return null;
    }
  }

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <button className="clear-button" onClick={handleClearClick}>
          AC
        </button>
        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button
          className="operator-button"
          onClick={() => handleOperatorClick("/")}
        >
          ÷
        </button>
        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button
          className="operator-button"
          onClick={() => handleOperatorClick("*")}
        >
          ×
        </button>
        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button
          className="operator-button"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button className="zero-button" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button onClick={() => handleNumberClick(".")}>.</button>
        <button
          className="operator-button"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
        <button className="equals-button" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
