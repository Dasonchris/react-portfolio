import { React } from "react";
import "./Contact.css";
import Navbar from "../../Components/Narvbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollTotop from "../../Components/ScrollToTop/ScrollTotop";
import img1 from "../../assets/chris.jpg";
import img2 from "../../assets/git.png";
import img3 from "../../assets/link.png";
import img4 from "../../assets/x.png";
import img5 from "../../assets/fb.png";
import img6 from "../../assets/insta.png";
import img7 from "../../assets/stand.png";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-contain">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="container-div">
            <h1>Contact Me</h1>
            <p>
              I am available on almost every social media. You can <br /> message me, I 
              will reply within 24 hours.  I can  help you  with Frontend, Backend  Development.
            </p>
          
          <div className="images">
            <a target= "_blank" href="/">
              <img src={img2} alt="" />
            </a>
            <a target= "_blank" href="https://www.linkedin.com/in/dason-chris-38b57b327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={img3} alt="" />
            </a>
            <a target= "_blank" href="https://www.instagram.com/chris_dason/profilecard/?igsh=bjl3cDFqdWFxbHI2">
              <img src={img4} alt="" />
            </a>
            <a target= "_blank" href="https://www.facebook.com/rose.chris.5249349">
              <img src={img5} alt="" />
            </a>
            <a target= "_blank" href="/">
              <img src={img6} alt="" />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-img">
            <img src={img7} alt="" />
      
        <div className="content-email">
            <h1>Address</h1>
            <p>Ho,Volta Region,Ghana</p>
            <h1>Email</h1>
            <p>dasonchris47@gmail.com</p>
        </div>
        </div>
      </div>
      <ScrollTotop />
      <Footer />
    </>
  );
}

export default Contact;
