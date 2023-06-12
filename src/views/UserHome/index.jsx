import { FilterCard } from './../../components/FilterCard'
import { TaskCard } from './../../components/TaskCard'
import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import api from './../../services/api'
import * as S from './styles'

export function UserHome() {
    const [filterActived, setFilterActived] = useState("all");
    const [tasks, setTasks] = useState([]);
    const [lateCount, setLateCount] = useState();

    async function loadTasks() {
        await api.get(`/task/filter/${filterActived}/00:1B:44:11:3A:B9`)
        .then(response => {
            setTasks(response.data);
        })
    }
    async function lateVerify() {
        await api.get(`/user`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }
    function Nofification(){
        setFilterActived('late');
    }
    useEffect(() => {
        loadTasks();
        lateVerify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterActived]);

    return (
        <S.Container>
            <S.FilterArea>
                <Header lateCount={lateCount} clickNotification={Nofification} />
                <button  onClick={ () => setFilterActived("all") } >
                    <FilterCard 
                        title="Todos"   
                        actived={( filterActived === ("all") | null ) }
                    />
                </button>
                <button  onClick={ () => setFilterActived("today") } >
                    <FilterCard 
                        title="Hoje"
                        actived={(filterActived === ("today") | null )}
                    />
                </button>
                <button onClick={ () => setFilterActived("week") } >
                    <FilterCard 
                        title="Semana"
                        actived={(filterActived === ("week") | null )}
                    />
                </button>
                <button onClick={ () => setFilterActived("month") } >
                    <FilterCard 
                        title="Mês"
                        actived={(filterActived === ("month") | null )}
                    />
                </button>
                <button onClick={ () => setFilterActived("year") } >
                    <FilterCard 
                        title="Ano"
                        actived={(filterActived === ("year") | null )}
                    />
                </button>
            </S.FilterArea>

            <S.Title>
                <h3>{ filterActived == 'late' ? 'Tarefas Atrasadas' : 'Tarefas Atualis'}</h3>
            </S.Title>

            <S.Content>
                { tasks.map(t=> (
                    <TaskCard
                        key={ uuidv4() } // Atenção Aqui
                        type={t.type}
                        title={t.title} 
                        when={t.when}
                    />
                ))}
            </S.Content>
            <Footer />
        </S.Container>
    )
}