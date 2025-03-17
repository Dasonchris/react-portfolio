import React from "react"
import "./Experience.css"
import Navbar from "../../Components/Narvbar/Navbar";
import ScrollTotop from "../../Components/ScrollToTop/ScrollTotop";
import img1 from "../../assets/guy.png"
import Footer from "../../Components/Footer/Footer";
import Fag from "../../Components/Fag/Fag";
  


function Experience () {
    return(
        <>
       <Navbar />
           
           <div className="content">
              <div className="content-div">
                  <img src={img1} alt="" />
                  <div className="div">
                    <h1>Experience</h1>
                    <h3>Work and Internship </h3>
                    <p>I have worked with many evolving startups as Software Developer.</p>
                  </div>
              </div>
           </div>
             <Fag />
             <ScrollTotop />
           <Footer />
       </>



    )
}



export default Experience;