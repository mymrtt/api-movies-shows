// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import Card from '../components/card';
import Input from '../components/input';

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Template = ({ dataList, setDataList, inputValue, setInputValue}) => {
  const handleFilter = () => {
    if(!inputValue.length || inputValue === '') {
      return dataList;
    }

    const filterItemConvert = dataList.filter(item => {
      if (item.title?.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      return false;
    });

    setDataList(filterItemConvert);
  }

  return (
    <section>
      <Input 
        handleFilter={handleFilter}
        setInputValue={setInputValue}
      />
      <Box>
        {dataList?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Box>
    </section>
  );
}

export default Template;
