/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import * as S from "./style";

import api from '../../services/api'
import TypeIcons from "../../services/typeIcons"
import {v4 as uuidv4} from 'uuid';

import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'

export function User(){
    const [lateCount, setLateCount] = useState()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    // async function lateVerify() {
    //     await api.get(`/user`)
    //     .then(response => {
    //         setLateCount(response.data.length);
    //     })
    // }

    async function Save() {
        await api.post('/user', {
            nome,
            email,
            senha
        })
        .then(() => alert('Cadastrado com sucesso')
        )
    }

    // useEffect(() => {
    //     lateVerify()
    // }, [])
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
                    <span>Seu nome</span>
                    <input
                        type="text"
                        value={nome}
                        onChange={ e => setNome(e.target.value) }
                        placeholder="Titulo da tarefa ..." />
                </S.Input>

                <S.Input>
                    <span>E-mail</span>
                    <input
                        type="text"
                        onChange={ e => setEmail(e.target.value) } value={email}
                        placeholder="email@email.com ..."
                    />
                </S.Input>

                <S.Input>
                    <span>Senha</span>
                    <input
                        type="password"
                        onChange={ e => setSenha(e.target.value) } value={senha}
                        placeholder="*****************"
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