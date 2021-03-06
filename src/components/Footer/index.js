import React from 'react';
import styled from 'styled-components';

const Footer= styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default function index(props){
    return(
        <Footer {...props}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Pokémon images & names © 1995-2021 Nintendo/Game Freak.
            </a>
        </Footer>
    )
}