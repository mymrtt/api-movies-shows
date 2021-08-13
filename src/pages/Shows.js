// Libs
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Layout from '../components/layout';
import Template from '../components/template';

const SeriesApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=c654685165c467c1f991d6635454599f'
});

const Shows = () => {
  const [dataList, setDataList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getSeries();
  })

  const getSeries = async () => {
    const response = await SeriesApi.get();

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
