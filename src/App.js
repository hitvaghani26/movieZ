import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from './components/header/Header'
import Home from './pages/home/Home'
import { fetchData } from './utils/api'
import { useSelector, useDispatch } from "react-redux";
import { getGenres, gerApiConfiguration } from './store/homeSlice'
import Detail from './pages/Detail/Detail'
import SearchResult from './pages/SearchResult/SearchResult'
import Explore from './pages/Explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import useFetch from "./hooks/useFetch";

function App() {

  const { url } = useSelector((state) => state.home)
  console.log(url?.total_pages);
  const dispatch = useDispatch()
  
  
  const fetchApiConfing = () => {
    fetchData("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      console.log("dkjfh",url)
      dispatch(gerApiConfiguration(url))

    });
  };
  useEffect(() => {
    fetchApiConfing();
    genresCall();
  }, [])
  const genresCall = async () => {
    let promises =  [];
    let endPoint = ["tv", "movie"]
    let allgenres = {}
    endPoint.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises);

    data.map(({genres}) => {
      return genres.map((item) => (
        allgenres[item.id] = item
      ))
    })
    dispatch(getGenres(allgenres));
  }

  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:mediaType/:id" element={<Detail></Detail>}></Route>
        <Route path="/search/:query" element={<SearchResult></SearchResult>}></Route>
        <Route path="/explore/:mediaType" element={<Explore></Explore>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
