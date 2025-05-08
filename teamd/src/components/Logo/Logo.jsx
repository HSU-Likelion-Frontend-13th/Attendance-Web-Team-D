import LogoImg from '../../assets/Logo.png'
import * as S from './Logo.style';

export default function Logo(){
    return (
        <S.LogoLayout>
            <S.LogoImg src={LogoImg} alt="Logo"/>
        </S.LogoLayout>
    ) };