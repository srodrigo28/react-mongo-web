import * as S from "./styles";
import iconDefault from '../../assets/default.png'

export function TaskCard() {
    return (
        <S.Container>
            
            <S.TopCard>
                <img src={iconDefault} alt="" />
                <h3>Título da Tarefa</h3>
            </S.TopCard>

            <S.BottomCard>
                <strong>17/10/2020</strong>
                <span>10:00</span>
            </S.BottomCard>

        </S.Container>
    )
}