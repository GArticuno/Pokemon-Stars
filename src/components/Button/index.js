import React from 'react';
import styled from 'styled-components';

const Button= styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    outline:0;
    font-size:15px;
    width: 5rem;
    height:1.5rem;
    cursor: pointer;
    &:hover{
    opacity: .5;
  }
  &:focus{
    background-color: ${({ theme }) => theme.colors.choose};
  }
`
export default Button;