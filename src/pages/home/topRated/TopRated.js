import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousal from '../../../components/carousal/Carousal';

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const {data, loading} = useFetch(`/${endPoint}/top_rated`)



  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie":"tv")
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
          Tranding
        </span>
          <SwitchTabs data ={["Movies", "Tv Shows"]} onTabChange={onTabChange}></SwitchTabs>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  )
}

export default TopRated;