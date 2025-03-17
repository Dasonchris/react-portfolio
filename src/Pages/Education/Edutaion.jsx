import React from "react";
import "./Education.css";
import Navbar from "../../Components/Narvbar/Navbar";
import img1 from "../../assets/senior.png"
import img2 from "../../assets/star.png"
import Footer from "../../Components/Footer/Footer";
import ScrollTotop from "../../Components/ScrollToTop/ScrollTotop";

function Education() {
  return (
    <>
      <Navbar />

      <div className="education">
           <div className="education-container">
            <div className="img1">
              <img src={img1} alt="" />
              </div>
              <div className="card">
                <div className="card-div">
                  <div className="card-p">
                     <h2>High School</h2>
                     <p>2022-2024</p>
                  </div>
                <h4>King David Senior High School</h4>
                </div>
                
                <div className="card-img">
                      <img src={img2} alt="" />
                      <p> I have studied basic GAs subjects and got 70% in Best of 3 subjects.</p>
                </div>
                <div className="card-img">
                      <img src={img2} alt="" />
                      <p>  I was quite good in Computer Science and had good interest in it and got 80% in Computer Science.</p>
                </div>
               
              </div>
           </div>
      </div>
      <Footer />
      <ScrollTotop />
      
    </>
  );
}

export default Education;
