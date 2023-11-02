import React from 'react'
import "./Herobanner.scss"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux'
import Img from '../../../components/LazyImageLoding/LazyImageLoading'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
const HeroBanner = () => {
  const { url } = useSelector((state) => state.home)
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg)

  }, [data, url])


const searchQury = () => {
  if (query.length > 0) {
    navigate(`/search/${query}`);
  }
}
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className='heroBanner'>
      <div className='backdrop-img'>
        {!loading && <Img src={background}></Img>}
      </div>

      <ContentWrapper>

    <div className='opacity-layer'></div>

        <div className='heroBannerContent'>
          <span className='title'>Welcome</span>
          <span className='subTitle'> Millions of movies, TV shows and people to discover.
            Explore now.  </span>
          <div className='searchInput'>
            <input type='text' onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}

              placeholder='Search movies or Tv shows' />
            <button  onClick={() => searchQury()}>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner