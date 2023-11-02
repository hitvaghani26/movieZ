import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailBanner/DetailBanner';
import Cast from './cast/Cast';
import VideosSection from './VideoSection/VideoSection';
import Similar from './carousal/Simmilar';
import Recommendation from './carousal/Recommandation';


function Detail() {
  const {mediaType, id} = useParams();
  console.log(mediaType, "dfoidf", id);
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id}  />
    </div>
  )
}

export default Detail