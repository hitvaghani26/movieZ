import React, { useState, useEffect } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { SlMenu } from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import "./header.scss"
import { useLocation, useNavigate } from 'react-router-dom'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import logo from '../../assets/movix-logo.svg'
import logo2 from "../../assets/moviez.png"

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setlastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("")
  const [showSearch, setShowSearch] = useState("")
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }
  const controlNavbar = () => {
    if(window.scrollY>200){
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide")
      } else {
        setShow("show")
      }
    } else {
      setShow("top")
    }
    setlastScrollY(window.scrollY);

  }
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY])
  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate('/explore/movie');
    } else {
      navigate('/explore/tv');
    }
    setMobileMenu(false)
  }
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      console.log("j");
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false)
      }, 1000);
    }
  };
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className='logo'>
          <img src={logo2} alt='Logo' onClick={() => navigate("/")}></img>

        </div>
        <ul className='menuItems'>
          <li className='menuItem' onClick={() => navigationHandler("movie")}>Movies</li>
          <li className='menuItem' onClick={() => navigationHandler("tv")}>Tv Shows</li>
          <li className='menuItem' >
            <HiOutlineSearch onClick={openSearch}></HiOutlineSearch>
          </li>
        </ul>
        <div className='mobileMenuItems'>
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} />) : (<SlMenu onClick={openMobileMenu} />)}

        </div>
      </ContentWrapper>
      {showSearch && (<div className='searchBar'>
        <ContentWrapper>
          <div className='searchInput'>
            <input type='text'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}

              placeholder='Search movies or Tv shows' />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>)}
    </header>
  )
}

export default Header