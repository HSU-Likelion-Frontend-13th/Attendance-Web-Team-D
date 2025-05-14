import Logo from '../Logo/Logo';
import Header from '../header/Header';
import Login from '../main/Login/LoginForm';
import * as S from './LoginPage.style'
function LoginPage() {
    return (
        <div className="App">
            <Logo />
            <S.MainContainer>
                <Header />
                <Login />
            </S.MainContainer>
        </div>
    );
}


export default LoginPage;