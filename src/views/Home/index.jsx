import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { FilterCard } from './../../components/FilterCard'
import { useState } from "react";
import * as S from './styles'

export function Home() {
    const [filterActived, setFilterActived] = useState("all")
    return (
        <S.Container>
            <Header />
            <S.FilterArea>
                <button onClick={ () => setFilterActived("all")} >
                    <FilterCard title="Todos" actived={filterActived === ("all") }/>
                </button>
                <button onClick={ () => setFilterActived("today")} >
                    <FilterCard title="Hoje" actived={filterActived === ("today") }/>
                </button>
                <button onClick={ () => setFilterActived("week")} >
                    <FilterCard title="Semana" actived={filterActived === ("week")} />
                </button>
                <button onClick={ () => setFilterActived("month")} >
                    <FilterCard title="Mês" actived={filterActived === ("month")} />
                </button>
                <button onClick={ () => setFilterActived("year")} >
                    <FilterCard title="Ano" actived={filterActived === ("year")} />
                </button>
            </S.FilterArea>
            <Footer />
        </S.Container>
    )
}