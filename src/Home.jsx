import React from "react";
import Hero from "../components/heroComponent/Hero";
import Blogs from "../components/blogs/Blogs";
import Cities from "../components/footprint/Cities";
import ImageCarousel from "../components/Trails/ImageCarousel";
import ShowCaseContainer from "../Containers/ShowCaseContainer";
const Home = () => {
  return (
    <div>
      <Hero />
      <ShowCaseContainer />
      <Blogs />
      <Cities />
      <ImageCarousel />
    </div>
  );
};

export default Home;
