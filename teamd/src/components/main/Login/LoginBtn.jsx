import * as S from './LoginForm.style';

export default function LoginBtn({ place, clickEvent }) {
    return (
        <S.LoginBtnWrapper>
            <S.LoginBtn onClick={clickEvent}>
                {place}
            </S.LoginBtn>
        </S.LoginBtnWrapper>
    );
}
