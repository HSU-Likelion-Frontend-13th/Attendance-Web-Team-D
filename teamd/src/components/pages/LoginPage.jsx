import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Header from "../header/Header";
import Login from "../main/Login/LoginForm";
import * as S from "./LoginPage.style";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 성공 로직 추가 가능
    navigate("/main");
  };

  return (
    <div className="App">
      <Logo />
      <S.MainContainer>
        <Header />
        <Login clickEvent={handleLogin} />
      </S.MainContainer>
    </div>
  );
}

export default LoginPage;
