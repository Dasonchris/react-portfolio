import { React } from "react";
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
                     <p>2018-2021</p>
                  </div>
                <h4>Anlo Senior High School</h4>
                </div>
                
                {/* <div className="card-img">
                     
                </div> */}
                <div className="card-img">
                  <div>
                      <img src={img2} alt="" />
                      <p>  I was good in Computer Science and had interest in it so I got 80%   </p> </div>
                       <br /> 
                       <div>
                      <img src={img2} alt="" />
                      <p> I have studied basic G.Arts subjects and got 70% in Best of 3 subjects.</p>
                      </div>
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
