// Libs
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styles
const Box = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding-top: 0.25rem;
  width: 6.25rem;
  height: 1.875rem;
  text-align: center;
  color: #fff;
  border: solid 1px #fff;
  border-radius: 10%;
  list-style: none;

  &.active, :hover {
    color: #000;
    background-color: #fff;
  }
`;

const Header = () => {
  return (
    <header>
      <nav>
        <Box>
          <StyledLink
            exact to="/"
            activeClassName="active"
          >
            Home
          </StyledLink>
          <StyledLink
            to="/movies"
            activeClassName="active"
          >
            Movies
          </StyledLink>
          <StyledLink 
            to="/shows"
            activeClassName="active"
          >
            Shows
          </StyledLink>
        </Box>
      </nav>
    </header>
  );
}

export default Header;
