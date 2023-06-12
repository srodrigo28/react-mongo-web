/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import * as S from "./style";

import api from '../../services/api'

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'

export function Contas(){
    const [lateCount, setLateCount] = useState()
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [date, setDate] = useState("2023-06-02")
    const [hour, setHour] = useState("02:02:00")

    async function lateVerify() {
        await api.get(`/conta`)
        .then(response => {
            setLateCount(response.data.length);
        })
    }

    async function Save() {
        await api.post('/conta', {
            descricao,
            valor,
            vencimento: `${date}T${hour}:00.000`
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
                <h1>Contas a Pagar</h1>
                <S.Input>
                    <span>Descrição</span>
                    <input
                        type="text"
                        value={descricao}
                        onChange={ e => setDescricao(e.target.value) }
                        placeholder="Descrição da conta ..." />
                </S.Input>

                <S.Input>
                    <span>Valor</span>
                    <input
                        type="text"
                        onChange={ e => setValor(e.target.value) } value={valor}
                        placeholder="R$ 1.00,00"
                    />
                </S.Input>
                <S.Input>
                    <span>Hora</span>
                    <input
                        type="time"
                        onChange={ e => setHour(e.target.value) } value={hour}
                    />
                </S.Input>

                <S.Input>
                    <span>Vencimento</span>
                    <input
                        type="date"
                        onChange={ e => setDate(e.target.value) } value={date}
                    />
                </S.Input>

                 <S.Save>
                    <button type="button" onClick={Save}> Salvar </button>
                 </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    )
}