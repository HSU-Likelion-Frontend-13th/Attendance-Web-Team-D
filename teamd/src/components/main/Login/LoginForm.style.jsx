import styled from "styled-components";

export const LoginWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    height: 50vh;
    width: auto;
    
`;

export const InputWrapper = styled.div `
input {
    border: 1px solid ${ ({
    $isSubmitted,
    $isValid}) =>
    !$isSubmitted ? '#D9D9D9' : $isValid ? '#D9D9D9' : '#EB3223'};
    background-color: ${ ({
        $isSubmitted, $isValid}) =>
    !$isSubmitted ? '#D9D9D9' : $isValid ? '#D9D9D9' : '#F9C1BD'};
    border-radius: 10rem;
    width: 30vw;
    height: 5vh;
    text-align: center;
    outline: none;
}
`;

        export const InputRow = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-right: 1.4rem;

    label {
        width: 50px;
        text-align: right;
        font-size: 14px;
    }
`;

        export const ErrorMessage = styled.div `
    color: red;
    font-size: 13px;
    margin-top: 8rem;
    height: 20px;
    margin-bottom: 0.5rem;
`;

        export const LoginBtnWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
`;

        export const LoginBtn = styled.button `
    width: 25rem;
    height: 4rem;
    background-color: #014099;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    margin-bottom: 7rem;
    margin-top: 1rem;
    letter-spacing: 0.5rem;
`;

        export const RoundCheckbox = styled.input `
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #999999;
    border-radius: 50%;
    transition: 0.2s;

    &:checked {
        color: #999999;
        background-color: #014099;
        border: 2px solid #014099;
    }
`;
        export const AutoLoginWrapper = styled.div `
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    width: 100%;                
    justify-content: flex-start;
`;

        export const CheckImage = styled.img `
    padding-left: 1rem;
    width: 1.4rem;
    height: 1.4rem;
    display: block;
`;

        export const AutoLoginText = styled.span `
    color: ${ ({
            $isChecked}) => ($isChecked ? '#014099' : '#999999')};
    font-size: 14px;
`;
            export const ErrorMessageWrapper = styled.div `
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
`;

            export const ErrorImg = styled.img `
    width: 1rem;
    height: 1rem;
`;

            export const ErrorMessageText = styled.span `
    color: red;
    font-size: 13px;
`;
