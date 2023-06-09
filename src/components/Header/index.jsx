import * as S from './styles'
import logo from './../../assets/logo.png'
import bell from './../../assets/bell.png'

export function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo-app" />
            </S.LeftSide>

            <S.RightSide>
                <a href="#">Início</a>
                <span className="dividir" />
                <a href="#">Nova Tarefa</a>
                <span className="dividir" />
                <a href="#">Sincronizar Celular</a>
                <span className="dividir" />
                <a href="#" id='notification'>
                    <img src={bell} alt="sinalização" />
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>
    )
}