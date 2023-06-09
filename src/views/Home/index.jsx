import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { FilterCard } from './../../components/FilterCard'
import { TaskCard } from './../../components/TaskCard'
import { useState } from "react";
import * as S from './styles'

export function Home() {
    const [filterActived, setFilterActived] = useState("all")
    return (
        <S.Container>
            <Header />
            <S.FilterArea>
                <button onClick={ () => setFilterActived("all") } >
                    <FilterCard title="Todos" actived={filterActived == ("all") }/>
                </button>
                <button onClick={ () => setFilterActived("today")} >
                    <FilterCard title="Hoje" actived={filterActived == ("today") }/>
                </button>
                <button onClick={ () => setFilterActived("week")} >
                    <FilterCard title="Semana" actived={filterActived == ("week")} />
                </button>
                <button onClick={ () => setFilterActived("month")} >
                    <FilterCard title="Mês" actived={filterActived == ("month")} />
                </button>
                <button onClick={ () => setFilterActived("year")} >
                    <FilterCard title="Ano" actived={filterActived == ("year")} />
                </button>
            </S.FilterArea>

            <S.Title>
                <h3>Tarefas</h3>
            </S.Title>

            <S.Content>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </S.Content>

            <Footer />
        </S.Container>
    )
}