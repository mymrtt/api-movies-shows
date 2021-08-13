// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import Layout from '../components/layout';

// Styles
const Box = styled.div`
  margin: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (
  <Layout>
    <Box>
      <h2>Não tenha medo do fracasso.</h2>
      <h2>Esta é a melhor maneira de ter sucesso.</h2>
      <h3> Lebron James </h3>
    </Box>
  </Layout>
);

export default Home;
