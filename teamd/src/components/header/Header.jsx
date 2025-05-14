import HeaderLogoImg from '../../assets/HeaderLogo.png';
import * as S from './Header.style';

export default function Header(){
    return(
        <S.HeaderLayout>
            <S.HeaderLogoImg src={HeaderLogoImg} alt="Header Logo" />
        </S.HeaderLayout>
    )
}