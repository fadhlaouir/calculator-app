/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                            Calculator Component                            */
/* -------------------------------------------------------------------------- */
function Calculator() {
  /* ---------------------------------- HOOKS --------------------------------- */
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  /* ----------------------------- RENDER HELPERS ----------------------------- */

  /**
   * handle number click this function will be called when a number is clicked
   * @param {*} e event
   */
  const handleNumberClick = (e) => {
    const value = e.target.value;
    setInput(input + value);
  };

  /**
   * handle operator click
   * @param {*} e event
   */
  const handleOperatorClick = (e) => {
    const operator = e.target.value;

    if (operator === "=") {
      try {
        setResult(eval(input).toString());
      } catch (err) {
        setResult("Error");
      }
      setInput("0");
    } else if (operator === "C") {
      setInput("");
      setResult(0);
    } else {
      setInput(input + operator);
    }
  };

  /* -------------------------------- Rendering ------------------------------- */
  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly /> <br />
      <button onClick={handleNumberClick} value="7">
        7
      </button>
      <button onClick={handleNumberClick} value="8">
        8
      </button>
      <button onClick={handleNumberClick} value="9">
        9
      </button>
      <button onClick={handleOperatorClick} value="C">
        C
      </button>
      <br />
      <button onClick={handleNumberClick} value="4">
        4
      </button>
      <button onClick={handleNumberClick} value="5">
        5
      </button>
      <button onClick={handleNumberClick} value="6">
        6
      </button>
      <button onClick={handleOperatorClick} value="/">
        /
      </button>
      <br />
      <button onClick={handleNumberClick} value="1">
        1
      </button>
      <button onClick={handleNumberClick} value="2">
        2
      </button>
      <button onClick={handleNumberClick} value="3">
        3
      </button>
      <button onClick={handleOperatorClick} value="*">
        *
      </button>
      <br />
      <button onClick={handleOperatorClick} value="-">
        -
      </button>
      <button onClick={handleNumberClick} value="0">
        0
      </button>
      <button onClick={handleOperatorClick} value="+">
        +
      </button>
      <button onClick={handleOperatorClick} value="=">
        =
      </button>
    </div>
  );
}

export default Calculator;
