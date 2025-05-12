

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim()) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/main");
    } else {
      alert("이메일을 입력해주세요.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>로그인 페이지</h1>
      <input
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleLogin} style={{ padding: "10px" }}>
        로그인
      </button>
    </div>
  );
};

export default LoginPage;