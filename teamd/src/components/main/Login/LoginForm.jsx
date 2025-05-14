import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import * as S from './LoginForm.style';
import {useState} from 'react';
import CheckMark from '../../../assets/CheckMark.png';
import CheckedMark from '../../../assets/CheckedMark.png';
import useLoginValid from './useLoginValid';
import Error from '../../../assets/Error.png';

function LoginForm() {
    const [form, setForm] = useState({name: '', studentID: ''});
    const {validText, isValid} = useLoginValid(form);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [autoLogin, setAutoLogin] = useState(() => {
        return localStorage.getItem('autoLogin') === 'true';
    });

    const Submit = () => {
        setIsSubmitted(true);
        setForm({
            ...form
        });

        if (isValid.isname && isValid.isstudentID) {
            console.log("로그인");
        } else {
            console.log("로그인 실패");
        }
    };

    return (
        <S.LoginWrapper>
            <S.InputRow>
                <label>이름</label>
                <LoginInput
                    type="text"
                    place="이름을 입력하세요"
                    value={form.name}
                    onChange={(e) => setForm({
                        ...form,
                        name: e.target.value
                    })}
                    isValid={isValid.isname}
                    isSubmitted={isSubmitted}/>
            </S.InputRow>
            <S.InputRow>
                <label>학번</label>
                <LoginInput
                    type="text"
                    place="학번을 입력하세요"
                    value={form.studentID}
                    onChange={(e) => setForm({
                        ...form,
                        studentID: e.target.value
                    })}
                    isValid={isValid.isstudentID}
                    isSubmitted={isSubmitted}/>
            </S.InputRow>
            <S.AutoLoginWrapper onClick={() => setAutoLogin(!autoLogin)}>
                <S.CheckImage
                    src={autoLogin
                        ? CheckedMark
                        : CheckMark}
                    alt="자동 로그인 체크 상태"/>
                <S.AutoLoginText $isChecked={autoLogin}>자동로그인</S.AutoLoginText>
            </S.AutoLoginWrapper>

            {
                isSubmitted && validText && (
                    <S.ErrorMessageWrapper>
                        <S.ErrorImg src={Error} alt="오류 아이콘"/>
                        <S.ErrorMessageText>{validText}</S.ErrorMessageText>
                    </S.ErrorMessageWrapper>
                )
            }

            <LoginBtn place="LOGIN" clickEvent={Submit}/>

        </S.LoginWrapper>
    );
}

export default LoginForm;