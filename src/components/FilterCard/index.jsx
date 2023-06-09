import * as S from "./styles";
import filter from './../../assets/filter.png'

export function FilterCard({title}) {
    return (
        <S.Container>
            <img src={filter} alt="icone filter" />
            <span>{title}</span>
        </S.Container>
    )
}