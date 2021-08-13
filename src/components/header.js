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
  const navItems = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Movies',
      url: '/movies'
    },
    {
      name: 'Shows',
      url: '/shows'
    }
  ]
  
  return (
    <header>
      <nav>
        <Box>
        {navItems.map(({ name, url }) => (
          <StyledLink
            exact to={url}
            activeClassName="active"
          >
            {name}
          </StyledLink>
        ))}
        </Box>
      </nav>
    </header>
  );
}

export default Header;
