// Libs
import React, { useEffect, useState } from 'react';

// Components
import Layout from '../components/layout';
import Template from '../components/template';

// Service
import { getData } from '../services/api';

const Movies = () => {
  const [dataList, setDataList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = async () => {
    const response = await getData('movie');

    const completeMovies = response.data.results.map(item => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w400${item.poster_path}`
      };
    });

    setDataList(completeMovies);
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

export default Movies;
