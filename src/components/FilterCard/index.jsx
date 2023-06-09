import * as S from "./styles";
import filter from './../../assets/filter.png'

export function FilterCard() {
    return (
        <S.Container>
            <img src={filter} alt="icone filter" />
            <span>Hoje</span>
        </S.Container>
    )
}