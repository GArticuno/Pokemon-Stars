import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: ${({ theme }) => theme.colors.contrastText};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`
const { theme } = db;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
