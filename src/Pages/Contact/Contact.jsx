import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Narvbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollTotop from "../../Components/ScrollToTop/ScrollTotop";
import img1 from "../../assets/handsome.jpeg";
import img2 from "../../assets/github.png";
import img3 from "../../assets/linkin.png";
import img4 from "../../assets/twiter.png";
import img5 from "../../assets/facebook.png";
import img6 from "../../assets/instagram.png";
import img7 from "../../assets/stand.png"

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
            <a href="https://github.com/Prince2024-des">
              <img src={img2} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/prince-awlavi-159085351/overlay/contact-info/?trk=public-profile-join-page&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BiA6IK2wWRjavhwKa6qssWA%3D%3D">
              <img src={img3} alt="" />
            </a>
            <a href="https://x.com/awlavi31361#:~:text=Edit%20profile-,Prince%20awlavi,-%40awlavi31361">
              <img src={img4} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083516876457&sk=friends">
              <img src={img5} alt="" />
            </a>
            <a href="https://www.threads.net/@princeawlavi8?xmt=AQGz4e5BNkeCWmvaOO0p5pxD8eK4QIkt9xYOb_CTzTVP97E">
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
            <p>princeawlavi83@gmail.com</p>
        </div>
        </div>
      </div>
      <ScrollTotop />
      <Footer />
    </>
  );
}

export default Contact;
