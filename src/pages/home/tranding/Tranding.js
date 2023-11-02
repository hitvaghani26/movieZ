import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousal from '../../../components/carousal/Carousal';

const Tranding = () => {
  const [endPoint, setEndPoint] = useState("day");
  const {data, loading} = useFetch(`/trending/all/${endPoint}`)



  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day":"week")
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
          Tranding
        </span>
          <SwitchTabs data ={["Day", "Week"]} onTabChange={onTabChange}></SwitchTabs>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} />
    </div>
  )
}

export default Tranding