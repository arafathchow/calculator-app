/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { Delete, Copy, Check, History, Sun, Moon } from "lucide-react";

if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);
  const [copied, setCopied] = useState(false);
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isHistoryClosing, setIsHistoryClosing] = useState(false);
  const [lastCalculation, setLastCalculation] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeKey, setActiveKey] = useState(null);

  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b !== 0 ? a / b : "Error";
      default:
        return a;
    }
  };

  const formatDisplay = (value) => {
    if (value === "Error") return value;

    let str = String(value);

    const digitCount = str.replace(/[^0-9]/g, "").length;

    if (digitCount > 10 || str.length > 12) {
      return Number(value).toExponential(5);
    }

    return str;
  };
  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(String(num));
      setNewNumber(false);
    } else {
      if (display.length < 12) {
        setDisplay(display === "0" ? String(num) : display + num);
      }
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay("0.");
      setNewNumber(false);
    } else if (!display.includes(".") && display.length < 12) {
      setDisplay(display + ".");
    }
  };
  const handleOperation = (op) => {
    const currentValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(currentValue);
      setLastCalculation("");
    } else if (operation) {
      const result = calculate(prevValue, currentValue, operation);

      setLastCalculation(`${prevValue} ${operation} ${currentValue} =`);

      const calculation = `${prevValue} ${operation} ${currentValue} = ${result}`;
      setHistory([calculation, ...history]);
      setDisplay(formatDisplay(result));
      setPrevValue(result);
    }

    setOperation(op);
    setNewNumber(true);
  };

  const handleEquals = () => {
    if (operation && prevValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(prevValue, currentValue, operation);

      setLastCalculation(`${prevValue} ${operation} ${currentValue} =`);

      const calculation = `${prevValue} ${operation} ${currentValue} = ${result}`;
      setHistory([calculation, ...history]);

      setDisplay(formatDisplay(result));
      setPrevValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperation(null);
    setNewNumber(true);
    setLastCalculation("");
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    if (prevValue !== null && operation) {
      const result = (prevValue * currentValue) / 100;
      setDisplay(formatDisplay(result));
    } else {
      setDisplay(formatDisplay(currentValue / 100));
      setLastCalculation("");
    }
    setNewNumber(true);
  };

  const handleFraction = () => {
    const currentValue = parseFloat(display);
    if (currentValue !== 0) {
      setDisplay(formatDisplay(1 / currentValue));
      setNewNumber(true);
      setLastCalculation("");
    }
  };

  const handleSquare = () => {
    const currentValue = parseFloat(display);
    setDisplay(formatDisplay(currentValue * currentValue));
    setNewNumber(true);
    setLastCalculation("");
  };

  const handleSquareRoot = () => {
    const currentValue = parseFloat(display);
    if (currentValue >= 0) {
      setDisplay(formatDisplay(Math.sqrt(currentValue)));
      setNewNumber(true);
      setLastCalculation("");
    } else {
      setDisplay("Error");
      setNewNumber(true);
      setLastCalculation("");
    }
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
      setNewNumber(true);
    }
  };

  const handleSign = () => {
    const currentValue = parseFloat(display);
    setDisplay(formatDisplay(currentValue * -1));
    setLastCalculation("");
  };

  const handlePi = () => {
    setDisplay(formatDisplay(Math.PI));
    setNewNumber(true);
    setLastCalculation("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(display);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const handleMemoryRecall = () => {
    if (memory !== 0) {
      setDisplay(String(memory));
      setNewNumber(true);
    }
  };

  const handleMemoryAdd = () => {
    const currentValue = parseFloat(display);
    setMemory(memory + currentValue);
  };

  const handleMemorySubtract = () => {
    const currentValue = parseFloat(display);
    setMemory(memory - currentValue);
  };

  const handleToggleHistory = () => {
    if (showHistory) {
      setIsHistoryClosing(true);
      setTimeout(() => {
        setShowHistory(false);
        setIsHistoryClosing(false);
      }, 300);
    } else {
      setShowHistory(true);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    setIsHistoryClosing(true);
    setTimeout(() => {
      setShowHistory(false);
      setIsHistoryClosing(false);
    }, 300);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode
    ? {
        bg: "from-slate-900 to-slate-800",
        calcBody: "bg-slate-800",
        display: "bg-gray-900",
        displayText: "text-white",
        displaySecondary: "text-slate-400",
        memoryIndicator: "text-blue-400",
        button: "bg-slate-700 hover:bg-slate-600 text-white",
        buttonOperation: "bg-orange-600 hover:bg-orange-500 text-white",
        buttonEquals: "bg-green-600 hover:bg-green-500 text-white",
        buttonClear: "bg-red-600 hover:bg-red-500 text-white",
        buttonSpecial: "bg-slate-600 hover:bg-slate-500 text-white",
        memoryButton: "bg-slate-700 hover:bg-slate-600 text-white",
        history: "bg-slate-700",
        historyItem: "bg-slate-600 hover:bg-slate-500 text-white",
        helpText: "text-white",
      }
    : {
        bg: "from-slate-200 to-slate-300",
        calcBody: "bg-slate-100",
        display: "bg-slate-200",
        displayText: "text-black",
        displaySecondary: "text-slate-600",
        memoryIndicator: "text-blue-600",
        button: "bg-slate-300 hover:bg-slate-400 text-slate-800",
        buttonOperation: "bg-orange-500 hover:bg-orange-600 text-white",
        buttonEquals: "bg-green-500 hover:bg-green-600 text-white",
        buttonClear: "bg-red-500 hover:bg-red-600 text-white",
        buttonSpecial: "bg-slate-400 hover:bg-slate-500 text-slate-800",
        memoryButton: "bg-slate-300 hover:bg-slate-400 text-slate-800",
        history: "bg-slate-300",
        historyItem: "bg-slate-400 hover:bg-slate-500 text-slate-800",
        helpText: "text-slate-600",
      };

  const keyToButton = {
    0: "num-0",
    1: "num-1",
    2: "num-2",
    3: "num-3",
    4: "num-4",
    5: "num-5",
    6: "num-6",
    7: "num-7",
    8: "num-8",
    9: "num-9",
    ".": "decimal",
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    Enter: "equals",
    "=": "equals",
    Escape: "clear",
    Backspace: "backspace",
    "%": "percent",
    s: "square",
    S: "square",
    r: "sqrt",
    R: "sqrt",
    p: "pi",
    P: "pi",
    h: "history",
    H: "history",
  };
  const handleKeyPress = useCallback(
    (event) => {
      const key = event.key;

      const buttonId = keyToButton[key];
      if (buttonId) {
        setActiveKey(buttonId);
        setTimeout(() => setActiveKey(null), 150);
      }

      if (["/", "*", "-", "+", "=", "Enter"].includes(key)) {
        event.preventDefault();
      }

      if (key >= "0" && key <= "9") {
        handleNumber(parseInt(key));
      } else if (key === "." || key === ".") {
        handleDecimal();
      } else if (key === "+") {
        handleOperation("+");
      } else if (key === "-") {
        handleOperation("-");
      } else if (key === "*") {
        handleOperation("×");
      } else if (key === "/") {
        handleOperation("÷");
      } else if (key === "=" || key === "Enter") {
        handleEquals();
      } else if (key === "Backspace") {
        handleBackspace();
      } else if (key === "Escape") {
        handleClear();
      } else if (key === "%") {
        handlePercentage();
      } else if (key === "s" || key === "S") {
        handleSquare();
      } else if (key === "r" || key === "R") {
        handleSquareRoot();
      } else if (key === "p" || key === "P") {
        handlePi();
      } else if (key === "h" || key === "H") {
        handleToggleHistory();
      }
    },
    [
      display,
      prevValue,
      operation,
      newNumber,
      handleNumber,
      handleDecimal,
      handleOperation,
      handleEquals,
      handleBackspace,
      handleClear,
      handlePercentage,
      handleSquare,
      handleSquareRoot,
      handlePi,
      handleToggleHistory,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const Button = ({
    children,
    onClick,
    className = "",
    span = false,
    id = null,
  }) => (
    <button
      onClick={onClick}
      className={`p-4 text-lg font-semibold rounded-xl transition-all duration-150 hover:scale-105 active:scale-95 ${className} ${
        span ? "col-span-2" : ""
      } ${activeKey === id ? "scale-95 shadow-inner brightness-90" : ""}`}
      style={{ fontFamily: "'Roboto Mono', monospace" }}
    >
      {children}
    </button>
  );

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.bg} flex items-center justify-center p-4 transition-colors duration-500`}
    >
      <div
        className={`${theme.calcBody} rounded-3xl shadow-2xl p-6 w-full max-w-sm relative transition-colors duration-500`}
      >
        <div className="flex justify-center mb-3">
          <button
            onClick={handleToggleTheme}
            className="bg-slate-700 hover:bg-slate-600 p-2 rounded-full transition-all hover:scale-110 shadow-lg"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-400" />
            )}
          </button>
        </div>
        <div
          className={`${theme.display} rounded-2xl p-6 mb-6 h-32 flex items-end justify-end relative border-4 border-black/30 transition-colors duration-500 shadow-inner`}
        >
          <button
            onClick={handleCopy}
            className={`absolute top-4 left-4 transition ${
              copied
                ? "text-green-400"
                : isDarkMode
                ? "text-slate-500 hover:text-slate-300"
                : "text-slate-600 hover:text-slate-800"
            }`}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
          <button
            onClick={handleToggleHistory}
            className={`absolute bottom-4 left-4 ${
              isDarkMode
                ? "text-slate-500 hover:text-slate-300"
                : "text-slate-600 hover:text-slate-800"
            } transition-all duration-150 text-xs ${
              activeKey === "history" ? "scale-90 opacity-70" : ""
            }`}
            title="Show calculation history (Press H)"
          >
            <History size={18} />
          </button>
          {memory !== 0 && (
            <div
              className={`absolute top-4 right-4 text-xs ${theme.memoryIndicator} font-semibold font-mono transition-colors duration-500`}
              style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
              M
            </div>
          )}
          <div className="text-right">
            {lastCalculation ? (
              <div
                className={`${theme.displaySecondary} text-sm mb-1 transition-colors duration-500`}
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                {lastCalculation}
              </div>
            ) : prevValue !== null && operation ? (
              <div
                className={`${theme.displaySecondary} text-sm mb-1 transition-colors duration-500`}
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                {prevValue} {operation} {!newNumber ? display : ""}
              </div>
            ) : null}
            <div
              className={`${theme.displayText} text-3xl font-bold break-all tracking-wide transition-colors duration-500`}
              style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
              {display}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleMemoryClear}
            className={`flex-1 ${theme.memoryButton} text-sm py-2 px-3 rounded-lg transition-all duration-500 font-semibold`}
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            MC
          </button>
          <button
            onClick={handleMemoryRecall}
            className={`flex-1 ${theme.memoryButton} text-sm py-2 px-3 rounded-lg transition-all duration-500 font-semibold`}
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            MR
          </button>
          <button
            onClick={handleMemoryAdd}
            className={`flex-1 ${theme.memoryButton} text-sm py-2 px-3 rounded-lg transition-all duration-500 font-semibold`}
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            M+
          </button>
          <button
            onClick={handleMemorySubtract}
            className={`flex-1 ${theme.memoryButton} text-sm py-2 px-3 rounded-lg transition-all duration-500 font-semibold`}
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            M-
          </button>
        </div>
        {showHistory && (
          <div
            className={`mb-4 ${
              theme.history
            } rounded-xl p-4 max-h-60 overflow-y-auto ${
              isHistoryClosing ? "animate-slideUp" : "animate-slideDown"
            } transition-colors duration-500`}
          >
            <div className="flex justify-between items-center mb-3">
              <h3
                className={`${
                  isDarkMode ? "text-white" : "text-slate-800"
                } text-sm font-semibold transition-colors duration-500`}
              >
                History
              </h3>
              <button
                onClick={handleClearHistory}
                className={`${
                  isDarkMode
                    ? "text-red-400 hover:text-red-300"
                    : "text-red-600 hover:text-red-700"
                } text-xs transition`}
              >
                Clear All
              </button>
            </div>
            {history.length === 0 ? (
              <p
                className={`${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                } text-sm text-center py-4 transition-colors duration-500`}
              >
                No calculations yet
              </p>
            ) : (
              <div className="space-y-2">
                {history.map((calc, index) => (
                  <div
                    key={index}
                    className={`${theme.historyItem} rounded-lg p-2 text-sm transition-all cursor-pointer font-mono`}
                    style={{ fontFamily: "'Roboto Mono', monospace" }}
                    onClick={() => {
                      const result = calc.split("=")[1].trim();
                      setDisplay(formatDisplay(parseFloat(result)));
                      setNewNumber(true);
                      setIsHistoryClosing(true);
                      setTimeout(() => {
                        setShowHistory(false);
                        setIsHistoryClosing(false);
                      }, 300);
                    }}
                  >
                    {calc}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
              max-height: 0;
            }
            to {
              opacity: 1;
              transform: translateY(0);
              max-height: 240px;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 1;
              transform: translateY(0);
              max-height: 240px;
            }
            to {
              opacity: 0;
              transform: translateY(-10px);
              max-height: 0;
            }
          }

          .animate-slideDown {
            animation: slideDown 0.3s ease-out forwards;
          }

          .animate-slideUp {
            animation: slideUp 0.3s ease-out forwards;
          }
        `}</style>
        <div className="grid grid-cols-5 gap-3">
          <Button
            onClick={handleClear}
            className={theme.buttonClear}
            id="clear"
          >
            AC
          </Button>

          <Button
            onClick={handleBackspace}
            className={theme.buttonSpecial}
            id="backspace"
          >
            <Delete size={20} className="mx-auto" />
          </Button>

          <Button
            onClick={handlePercentage}
            className={theme.buttonSpecial}
            id="percent"
          >
            %
          </Button>

          <Button
            onClick={handleSquareRoot}
            className={theme.buttonSpecial}
            id="sqrt"
          >
            √
          </Button>

          <Button
            onClick={handleSquare}
            className={theme.buttonSpecial}
            id="square"
          >
            x²
          </Button>

          <Button
            onClick={() => handleNumber(7)}
            className={theme.button}
            id="num-7"
          >
            7
          </Button>
          <Button
            onClick={() => handleNumber(8)}
            className={theme.button}
            id="num-8"
          >
            8
          </Button>
          <Button
            onClick={() => handleNumber(9)}
            className={theme.button}
            id="num-9"
          >
            9
          </Button>

          <Button
            onClick={() => handleOperation("×")}
            className={theme.buttonOperation}
            id="multiply"
          >
            ×
          </Button>

          <Button
            onClick={() => handleOperation("÷")}
            className={theme.buttonOperation}
            id="divide"
          >
            ÷
          </Button>

          <Button
            onClick={() => handleNumber(4)}
            className={theme.button}
            id="num-4"
          >
            4
          </Button>

          <Button
            onClick={() => handleNumber(5)}
            className={theme.button}
            id="num-5"
          >
            5
          </Button>

          <Button
            onClick={() => handleNumber(6)}
            className={theme.button}
            id="num-6"
          >
            6
          </Button>

          <Button
            onClick={() => handleOperation("+")}
            className={theme.buttonOperation}
            id="add"
          >
            +
          </Button>
          <Button
            onClick={() => handleOperation("-")}
            className={theme.buttonOperation}
            id="subtract"
          >
            -
          </Button>

          <Button
            onClick={() => handleNumber(1)}
            className={theme.button}
            id="num-1"
          >
            1
          </Button>
          <Button
            onClick={() => handleNumber(2)}
            className={theme.button}
            id="num-2"
          >
            2
          </Button>
          <Button
            onClick={() => handleNumber(3)}
            className={theme.button}
            id="num-3"
          >
            3
          </Button>

          <Button
            onClick={handleFraction}
            className={theme.buttonOperation}
            id="fraction"
          >
            <span className="flex items-center justify-center">1/x</span>
          </Button>

          <Button
            onClick={handleEquals}
            className={`${theme.buttonEquals} row-span-2`}
            id="equals"
          >
            =
          </Button>

          <Button
            onClick={() => handleNumber(0)}
            className={theme.button}
            id="num-0"
          >
            0
          </Button>

          <Button onClick={handleDecimal} className={theme.button} id="decimal">
            .
          </Button>

          <Button
            onClick={handleSign}
            className={theme.buttonSpecial}
            id="sign"
          >
            <span className="flex items-center justify-center">+/-</span>
          </Button>

          <Button onClick={handlePi} className={theme.buttonSpecial} id="pi">
            π
          </Button>
        </div>

        <div
          className={`mt-4 text-center ${theme.helpText} text-xs transition-colors duration-500`}
        >
          <div className="mt-1">
            Keyboard Support! • Press any number or operation
          </div>
          <div className="mt-1">
            Esc = Clear • H = History • R = √ • P = π • S = x²
          </div>
        </div>
      </div>
    </div>
  );
}
