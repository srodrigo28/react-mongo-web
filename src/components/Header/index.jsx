import * as S from './styles'
import logo from './../../assets/logo.png'
import bell from './../../assets/bell.png'

// eslint-disable-next-line react/prop-types
export function Header( {lateCount, clickNotification})  {
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
                <button type='button'  onClick={clickNotification} id='notification'>
                    <img src={bell} alt="sinalização" />
                    <span>{lateCount}</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
}