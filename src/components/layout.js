// Libs
import React from 'react';

// Components
import Header from './header';

// Styles
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@300;400;500&family=Montserrat:ital,wght@0,100;0,200;0,300;1,100&family=Zen+Loop:ital@0;1&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <GlobalStyle />
        {children}
      </main>
    </div>
  );
}

export default Layout;
