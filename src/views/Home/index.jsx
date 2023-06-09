import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { FilterCard } from './../../components/FilterCard'
import * as S from './styles'

export function Home() {
    return (
        <S.Container>
            <Header />
            <S.FilterArea>
                <FilterCard title="Todos"/>
                <FilterCard title="Hoje"/>
                <FilterCard title="Semana"/>
                <FilterCard title="Mês"/>
                <FilterCard title="Ano"/>
            </S.FilterArea>
            <Footer />
        </S.Container>
    )
}