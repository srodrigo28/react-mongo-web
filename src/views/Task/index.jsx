/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import * as S from "./style";
import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

import api from '../../services/api'
import TypeIcons from "../../services/typeIcons"
import {v4 as uuidv4} from 'uuid';

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'

export function Task(){
    const [lateCount, setLateCount] = useState()
    const [type, setType] = useState(2)
    const [id, setId] = useState()
    const [done, setDone] = useState(false)
    const [title, setTitle] = useState("Padrão Title")
    const [description, setDescription] = useState("Padrão Description")
    const [date, setDate] = useState("2023-06-02")
    const [hour, setHour] = useState("02:02:00")
    const [macaddress, setMacaddress] = useState('00:1B:44:11:3A:B9')

    async function lateVerify() {
        await api.get(`/task/filter/late/00:1B:44:11:3A:B9`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }
    async function Save() {
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        })
        .then(() => alert('Cadastrado com sucesso')
        )
    }
    useEffect(() => {
        lateVerify()
    }, [])
    return(
        <S.Container>
             <Header lateCount={lateCount} />

            <S.Form>
                <S.TypeIcons>
                { 
                     TypeIcons.map(( Icon, index) => (
                        index > 0 && 
                        <button key={uuidv4()} type="button" onClick={ () => setType(index = 2)} >
                            <img src={Icon} alt="Tipo da tarefa"  />
                        </button>
                    ))
                 }
                </S.TypeIcons>

                <S.Input>
                    <span>Titulo</span>
                    <input
                        type="text"
                        value={title}
                        onChange={ e => setTitle(e.target.value) }
                        placeholder="Titulo da tarefa ..." />
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea
                        rows="5"
                        value={description}
                        onChange={ e => setDescription(e.target.value)}
                        placeholder="Detalhe da tarefa" />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input
                        type="date"
                        onChange={ e => setDate(e.target.value) } value={date}
                        placeholder="Titulo da tarefa ..."
                    />
                    <img src={iconCalendar} alt="calendario" />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input
                        type="time"
                        onChange={ e => setHour(e.target.value) } value={hour}
                        placeholder="Titulo da tarefa ..."
                    />
                    <img src={iconClock} alt="icone relogio" />
                </S.Input>

                <S.Option>
                    <div>
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => setDone(!done)}
                        />
                        <span> CONCLUÍDO - { done ? 'Concluído' : 'Falso' } </span>
                        {/* <span> CONCLUÍDO - { done ? 'Concluído' : 'Falso' } </span> */}
                    </div>
                    <button type="button">EXCLUIR</button>
                </S.Option>

                 <S.Save>
                    <button type="button" onClick={Save}> Salvar </button>
                 </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}