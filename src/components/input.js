// Libs
import React from 'react';
import styled from 'styled-components';

// Styles
const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;

    > button {
      margin-left: 1rem;
      width: 4rem;
      color: #fff;
      background-color: #000;
      cursor: pointer;
    }
  }
`;

const BoxTitle = styled.h2`
  margin: 1rem;
  text-align: center;
`;

const InputDefault = styled.input`
  width: 21.875rem;
  height: 1.875rem;
  border: ${({ error }) => error && '1px solid red'};
`;

const Input = ({ handleFilter, setInputValue, inputValueError }) => {
  return (
    <BoxInput>
      <BoxTitle>Movies to watch</BoxTitle>
      <div>
        <InputDefault
          placeholder="Pesquise aqui uma série para assistir"
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          error={inputValueError}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
    </BoxInput>
  )
};

export default Input;
