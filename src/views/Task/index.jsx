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
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState(0);

    async function lateVerify() {
        await api.get(`/task/filter/late/00:1B:44:11:3A:B9`)
        .then(response => {
            setLateCount(response.data.length);
        })
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
                        <button type="button" onClick={ () => setType(index)} key={ uuidv4() } >
                            <img src={Icon} alt="Tipo da tarefa" 
                            className={ type && type != index && 'inative'} />
                        </button>
                    ))
                 }

                </S.TypeIcons>

                <S.Input>
                    <span>Titulo</span>
                    <input type="text" placeholder="Titulo da tarefa ..." />
                </S.Input>

                <S.TextArea>
                    <span>Titulo</span>
                    <textarea name="" rows="5" placeholder="Detalhe da tarefa" />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Titulo da tarefa ..." />
                    <img src={iconCalendar} alt="calendario" />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Titulo da tarefa ..." />
                    <img src={iconClock} alt="icone relogio" />
                </S.Input>

                <S.Option>
                    <div>
                        <input type="checkbox" />
                        <span>CONCLUÍDO</span>
                    </div>
                    <button type="button">EXCLUIR</button>
                </S.Option>

                 <S.Save>
                    <button type="button">
                        Salvar
                    </button>
                 </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}