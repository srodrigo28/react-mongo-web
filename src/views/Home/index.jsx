import { Header } from './../../components/Header'
import { Footer } from './../../components/Footer'
import { FilterCard } from './../../components/FilterCard'
import * as S from './styles'

export function Home() {
    return (
        <S.Container>
            <Header />
                <FilterCard />
            <Footer />
        </S.Container>
    )
}