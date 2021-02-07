import Head from '../src/components/Head'
import Footer from '../src/components/Footer'
import Container from '../src/components/Container'
import Main from '../src/components/Main'
import Background from '../src/components/ContainerBackground';
import Header from '../src/components/Header'
import Slots from './slots';
import db from '../db.json';


export default function Home() {
  
  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Head/>
        <Header/>
        <Main>
          <Main.Team>
            <Slots/>
          </Main.Team>     
        </Main>
        <Footer/>
      </Container>
    </Background>
  )
}
