import styled from 'styled-components';

const Main = styled.main`
padding: 5rem 0;
display: center;
justify-content: center;
align-items: center;
`

Main.Team = styled.main`
padding: 5rem 0;
display: grid;
grid-template-columns: 340px 340px 340px;
grid-row-gap: 1em;
grid-column-gap:1em;
justify-content: center;
align-items: center;

@media screen and (max-width: 699px) and (min-width:345px){
    grid-template-columns: 340px;
    }
@media screen and (max-width: 344px) and (min-width:280px){
    grid-template-columns: 90%;
    }

@media screen and (min-width: 700px) and (max-width:1280px){
    grid-template-columns: 340px 340px;
}
`

export default Main;