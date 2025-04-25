import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import Cities from "./components/footprint/Cities";
import Hero from "./components/heroComponent/Hero";
import Navbar from "./components/navBar/NavBar";
import ImageCarousel from "./components/Trails/ImageCarousel";
import ShowCaseContainer from "./Containers/ShowCaseContainer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <ShowCaseContainer />
        <Blogs />
        <Cities />
        <Footer />
      </div>
      <ImageCarousel />
    </>
  );
}

export default App;
