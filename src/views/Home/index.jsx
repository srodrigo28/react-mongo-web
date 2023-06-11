import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { FilterCard } from './../../components/FilterCard'
import { TaskCard } from './../../components/TaskCard'
import { useEffect, useState } from "react";
import * as S from './styles'
import api from './../../services/api'

export function Home() {
    const [filterActived, setFilterActived] = useState("all");
    const [tasks, setTasks] = useState([]);
    const makadress = "123123123";
    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/${makadress}`)
        .then(response => {
            setTasks(response.data);
        })
    }
    useEffect(() => {
        loadTasks();
    }, [filterActived]);
    return (
        <S.Container>
            <p>{!tasks}</p>
            <Header onClick={loadTasks} />
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
            </S.Content>

            <Footer />
        </S.Container>
    )
}