import { useNavigate } from "react-router-dom";

function Score({ score }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Final Score</h2>

      <h1>{score}</h1>

      <button onClick={() => navigate("/")}>
        Restart
      </button>
    </div>
  );
}

export default Score;