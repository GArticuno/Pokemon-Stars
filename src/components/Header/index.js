import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Header= styled.footer`
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    padding-top:5px;
    padding-bottom:5px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: sticky;
    grid-template-columns: 90px 90px 90px 90px 90px 90px 90px;
    top:0;
    div{
        background-color: ${({ theme }) => theme.colors.secondary};
        width: 90px;
        height:90px;
    }
    #import{
        background-color:${({ theme }) => theme.colors.primary}
    }
    .pkm{
        background-color: #ffffff;
        width: 70px;
        height:70px;
        border-radius:50px;
    }
    .x{
        background-color: #ff3b3b;
        width: 20px;
        height:20px;
        border-radius:50px;
        display:flex;
        align-items: center;
        justify-content: center;
        outline:none;
        border:none;
        margin-left:60px;
        font-size:13px;
        color: ${({ theme }) => theme.colors.contrastText};
        & :hover{
            background-color: #751b1b;
        }
    }
`
function submit(){
}
export default function index(props){
    return(
        <Header {...props}>
        </Header>
    )
}