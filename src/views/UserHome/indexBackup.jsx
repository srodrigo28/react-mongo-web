import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FilterCard } from '../../components/FilterCard'
import { TaskCard } from '../../components/TaskCard'
import { useEffect, useState } from "react";
import * as S from './styles'
import api from '../../services/api'
//import axios from 'axios';

export function Home() {
    const [filterActived, setFilterActived] = useState("all");
    const [tasks, setTasks] = useState([]);
    // const makadress = "28:1B:44:11:3A:B9";
    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/28:1B:44:11:3A:B9`)
        // await api.get(`/task/filter/${filterActived}/${makadress}`)
        // await axios.get("locahost:3000/task/filter/all/28:1B:44:11:3A:B9")
        .then(response => {
            setTasks(response.data);
            console.log(response.data);
            console.log(
                "+++++++++++++" +
                    filterActived +
                "+++++++++++++"
            );
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
                {
                    tasks.map( t  => (
                        <TaskCard
                            key={t._id}
                            type={t.type}
                            title={t.title} 
                            when={t.when}
                        />
                    ))
                }
            </S.Content>

            <Footer />
        </S.Container>
    )
}