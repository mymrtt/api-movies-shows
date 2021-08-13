// Libs
import React from 'react';
import styled from 'styled-components';

// Styles
const Img = styled.img`
  margin: 1rem;
  justify-content: center;
  border-radius: 10%;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Title = styled.p`
  margin: 1rem;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 5%;
`;

const Card = ({ data }) => (
  <div>
    <Title>{data.title}</Title>
    <Img src={data.poster_path} alt={data.title} />
  </div>
);

export default Card;
