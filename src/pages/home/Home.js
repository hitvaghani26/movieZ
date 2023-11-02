import React, { useState, useEffect } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { SlMenu } from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import HeroBanner from './Herobanner/HeroBanner'
import Poplual from './popular/Poplual'
import TopRated from './topRated/TopRated'
import Tranding from './tranding/Tranding'
import { useLocation, useNavigate } from 'react-router-dom'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import logo from '../../assets/movix-logo.svg'
import "./Home.scss"
const Home = () => {
  
  return (
    <div className="homePage">
            <HeroBanner />
            <Tranding />
            <Poplual />
            <TopRated />
        </div>
  )
}

export default Home