import "./HeroSection.css";
import  { React } from "react";
import img1 from "../../assets/git.png"
import img2 from "../../assets/link.png"
import img3 from "../../assets/x.png"
import img4 from "../../assets/fb.png"
import img5 from "../../assets/insta.png"
import img6 from "../../assets/chris.jpg"

function HeroSection() {
  return (
    <div className="hero">
        <div className="constant">
          
           <h1>DaSoN cHRiS</h1>
           <h2>( ChRiS )</h2>
           <p>Passionate developer turning ideas into interactive experiences,<br /> <span> one line of code at a time, competitive programmer</span></p>
      

      <div className="links">
        <a target="_blank" href="/"><img src={img1} alt="" /></a>
        <a target= "_blank" href="https://www.linkedin.com/in/dason-chris-38b57b327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={img2} alt="" /></a>
        <a target= "_blank" href="https://www.instagram.com/chris_dason/profilecard/?igsh=bjl3cDFqdWFxbHI2"><img className="me" src={img3} alt="" /></a>
        <a target= "_blank" href="https://www.facebook.com/rose.chris.5249349"><img className="me" src={img4} alt="" /></a>
        <a target= "_blank" href="/"><img className="me" src={img5} alt="" /></a>
      </div>
      <a target= "_blank" href="/"><button>Follow Me On Github</button></a>
      </div>
      <div className="image">
         <img src={img6} alt="" />
       </div> 
    </div>
  );
}

export default HeroSection;
