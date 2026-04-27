import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import Score from "./pages/Score";

function App() {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={<Login setUser={setUser} setScore={setScore} />}
        />

        <Route
          path="/questions"
          element={user ? <Questions setScore={setScore} /> : <Navigate to="/" />}
        />

        <Route
          path="/result"
          element={user ? <Result user={user} score={score} /> : <Navigate to="/" />}
        />

        <Route
          path="/score"
          element={user ? <Score score={score} /> : <Navigate to="/" />}
        />

      </Routes>
      <footer className="footer">
        ©  24071A05F7
      </footer>
    </Router>
  );
}

export default App;