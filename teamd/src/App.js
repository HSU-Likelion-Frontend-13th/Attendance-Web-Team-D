import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./components/pages/LoginPage"; // 경로 정확히 확인 필요

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ "/"로 접속 시 "/login"으로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
