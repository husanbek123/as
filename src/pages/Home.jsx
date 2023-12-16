import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // import required modules
// import { Keyboard, Pagination, Navigation } from 'swiper/modules';
// import Slider from "react-slick";
import { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import useRegister from "../registration/useRegister";
// import { Component } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const { logged } = useRegister();
  console.log(logged);
  const url = "https://youtube-v3-alternative.p.rapidapi.com/trending";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "600ca960e0mshdfe24a65e26083fp1d3d24jsncd85c0a116f5",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  async function getData(url, options) {
    let respons = await fetch(url, options);
    let deta = await respons.json();
    setData(deta.data);
  }

  useEffect((i) => {
    getData(url, options);
  }, []);

  return (
    <div className="home">
      {data?.map((item) => (
        <VideoCard key={item.videoId} item={item} id={item.videoId} />
      ))}
    </div>
  );
}
