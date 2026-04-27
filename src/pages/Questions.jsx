import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    q: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
  {
    q: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    q: "React is a?",
    options: ["Library", "Language", "Database", "OS"],
    answer: "Library",
  },
];

function Questions({ setScore }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    const next = index + 1;

    if (next < questions.length) {
      setIndex(next);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">

        {/* Progress */}
        <h4>
          Question {index + 1} / {questions.length}
        </h4>

        {/* Question */}
        <h2 className="question-text">
          {questions[index].q}
        </h2>

        {/* Options */}
        <div className="options">
          {questions[index].options.map((opt) => (
            <button
              key={opt}
              className="option-btn"
              onClick={() => handleAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Questions;