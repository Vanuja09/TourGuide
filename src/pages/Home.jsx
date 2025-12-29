import { useEffect, useState } from "react";
import './Home.css'
import Navbar from '../layout/Navbar'
import HomeContent from '../component/HomeContent'
import PlaceDetails from "../component/PlaceDetails";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;
  let isScrolling = false;

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling) return;

      isScrolling = true;

      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling = false;
      }, 700);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({
      top: currentPage * window.innerHeight,
      behavior: "smooth",
    });
  }, [currentPage]);
  return (
    <div>
        <Navbar/>
        <HomeContent/>
        <PlaceDetails/>
    </div>
  )
}

export default Home