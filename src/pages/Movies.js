// Libs
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Layout from '../components/layout';
import Template from '../components/template';

const fechingMoviesApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=c654685165c467c1f991d6635454599f'
});

const Movies = () => {
  const [dataList, setDataList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = async () => {
    const response = await fechingMoviesApi.get();

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
