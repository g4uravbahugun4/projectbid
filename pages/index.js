import React, { useEffect, useRef, useState } from "react";
import Navbar from '../components/Navbar'
import Link from "next/link";
import Home from "../components/Home";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

function Index({user}) {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }   


  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 60) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      
    <div>
    <Navbar user={user} /> 

 <div className='flex flex-col w-full scroll-smooth' > 

  <Home />
  <div className="column3 w-full flipped-parent">
  <video  className={` ${isFlipped ? "flipped" : ""}`} autoPlay loop muted src="https://storage.googleapis.com/production-assets/website-assets/video/HOMEPAGE_HEADER_WEB.mp4"></video>
</div>
</div>
<div className="w-full flex items-center justify-center mt-10" style={{backgroundColor: "rgb(3, 7, 17, 0.1)"}}>
<Features />
</div>
<div className="w-full flex items-center justify-center mt-10 mb-10 text-white">
  <div className="mx-2 text-center py-5 px-3 rounded-2xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
  <p className="text-xl sm:text-2xl font-bold">Call-to-Action  </p> <p className="text-xl pb-5"> Ready to get started? <br /> Sign up today to browse our selection of high-quality projects <br /> and start bidding on projects that match your needs and budget.</p>
  </div>
</div>
<div className="my-12">
<Footer />
</div>
</div>
  )
}

export default Index