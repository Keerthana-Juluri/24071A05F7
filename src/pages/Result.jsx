import { useNavigate } from "react-router-dom";

function Result({ user, score }) {
  const navigate = useNavigate();

  const total = 3; // you have 3 questions (change if needed)
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-wrapper">
      <div className="result-card">
        <h2>Quiz Result</h2>

        <h3>Hey, {user} 👋</h3>

        <div className="score-box">
          <h1>{score} / {total}</h1>
          <p>{percentage}% Score</p>
        </div>

        {percentage >= 50 ? (
          <h3 className="pass">🎉 You Passed!</h3>
        ) : (
          <h3 className="fail">❌ Try Again</h3>
        )}

        <button onClick={() => navigate("/")}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;