// Libs
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styles
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const List = styled.li`
  border: solid 1px #fff;
  width: 100px;
  height: 30px;
  text-align: center;
  padding-top: 0.25rem;
  border-radius: 10%;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 20vh;
  align-items: center;
  background-color: black;
  li {
    list-style: none;
  }
`;

const Header = () => {
  return (
    <header>
      <nav>
        <Box>
          <List>
            <StyledLink to="/">Home</StyledLink>
          </List>
          <List>
            <StyledLink to="/movies">Movies</StyledLink>
          </List>
          <List>
            <StyledLink to="/shows">Shows</StyledLink>
          </List>
        </Box>
      </nav>
    </header>
  );
}

export default Header;
