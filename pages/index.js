import React, { useEffect, useRef, useState } from "react";
import Navbar from '../components/Navbar'
import Link from "next/link";
import Home from "../components/Home";

function Index() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }   




  return (

      
    <div>
    <Navbar /> 

 <div className=' bg-black flex w-full scroll-smooth' > 

  <Home />

  
</div> 
</div>
  )
}

export default Index