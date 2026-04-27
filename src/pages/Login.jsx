import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser, setScore }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 👈 for message display
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (name.trim() && password === "1234") {
      setUser(name);
      setScore(0);
      setError("");
      navigate("/questions");
    } else {
      setError("❌ Invalid credentials! Try password: 1234");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Quiz Login</h2>
        <p>Enter your credentials to start</p>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 👇 Error message instead of alert */}
        {error && <div className="error-msg">{error}</div>}

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}

export default Login;