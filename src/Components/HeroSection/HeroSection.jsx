import "./HeroSection.css";
import  { React } from "react";
import img1 from "../../assets/git.png"
import img2 from "../../assets/link.png"
import img3 from "../../assets/x.png"
import img4 from "../../assets/fb.png"
import img5 from "../../assets/insta.png"
import img6 from "../../assets/Fresh.jpeg"

function HeroSection() {
  return (
    <div className="hero">
        <div className="constant">
          
           <h1>Prince Destiny</h1>
           <h2>( Destiny )</h2>
           <p>Passionate developer turning ideas into interactive experiences,<br /> <span> one line of code at a time, competitive programmer</span></p>
      

      <div className="links">
        <a target="_blank" href="https://github.com/Prince2024-des"><img src={img1} alt="" /></a>
        <a target= "_blank" href="https://www.linkedin.com/in/prince-awlavi-159085351/overlay/contact-info/?trk=public-profile-join-page&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BiA6IK2wWRjavhwKa6qssWA%3D%3D"><img src={img2} alt="" /></a>
        <a target= "_blank" href="https://x.com/awlavi31361#:~:text=Edit%20profile-,Prince%20awlavi,-%40awlavi31361"><img className="me" src={img3} alt="" /></a>
        <a target= "_blank" href="https://www.facebook.com/profile.php?id=100083516876457&sk=friends"><img className="me" src={img4} alt="" /></a>
        <a target= "_blank" href="https://www.threads.net/@princeawlavi8?xmt=AQGz4e5BNkeCWmvaOO0p5pxD8eK4QIkt9xYOb_CTzTVP97E"><img className="me" src={img5} alt="" /></a>
      </div>
      <a target= "_blank" href="https://github.com/Prince2024-des"><button>Follow Me On Github</button></a>
      </div>
      <div className="image">
         <img src={img6} alt="" />
       </div> 
    </div>
  );
}

export default HeroSection;
