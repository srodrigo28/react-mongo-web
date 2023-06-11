/* eslint-disable react/prop-types */
import * as S from "./styles";
import { format } from 'date-fns'
import { useMemo } from "react";
import typeIcons from "./../../services/typeIcons"

export function TaskCard({type, title, when}) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));
    return (
        <S.Container>
            <S.TopCard>
                <img src={typeIcons[type]} alt="icone type" />
                <h3>{title}</h3>
            </S.TopCard>

            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>

        </S.Container>
    )
}