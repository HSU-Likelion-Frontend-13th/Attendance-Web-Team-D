import * as S from './LoginForm.style';
export default function LoginInput(props) {
    return (
<S.InputWrapper $isValid={props.isValid} $isSubmitted={props.isSubmitted}>
            <input
                type={props.type}
                placeholder={props.place}
                value={props.value}
                onChange={props.onChange}/>
        </S.InputWrapper>

    );
}
