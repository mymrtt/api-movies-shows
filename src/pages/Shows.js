// Libs
import React, { useEffect, useState } from 'react';

// Components
import Layout from '../components/layout';
import Template from '../components/template';

// Service
import { getData } from '../services/api';

const Shows = () => {
  const [dataList, setDataList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getSeries();
  })

  const getSeries = async () => {
    const response = await getData('tv');

    const completeSeries = response.data.results.map(item => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w400${item.poster_path}`
      };
    });

    setDataList(completeSeries);
  };

  return (
    <Layout>
      <Template 
        dataList={dataList}
        setDataList={setDataList}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </Layout>
  );
}

export default Shows;
