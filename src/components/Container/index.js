import styled from 'styled-components';

const Div = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
    .grid {
        width: 100%;
        flex-direction: column;
        }
    }
`

export default Div;