import * as S from './styles'
import logo from './../../assets/logo.png'

export function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo-app" />
            </S.LeftSide>

            <S.RightSide>

            </S.RightSide>
        </S.Container>
    )
}