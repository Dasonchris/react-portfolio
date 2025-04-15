import react from "react";
import "./Backend.css"
import img1 from "../../assets/hero.png"
import img2 from "../../assets/star.png"
import img4 from "../../assets/react.png"
import img3 from "../../assets/javascript.png"


function Backend () {
    return(
       <div className="content">
         <div className="image">
            <img src={img1} alt="" />
         </div>
         <div className="content-text">
            <h1>Backend Development</h1>
            <div className="images">
                <img src={img4} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className="p">
                <div className="star">
                    <img src={img2} alt="" />
                    <p>Creating backend application using Javascript,React</p>
                </div>
                
                <div className="star">
                    <img src={img2} alt="" />
                    <p>An aspiring full-stalk developer with strong foundation in  programming and database management</p>
                </div>
            </div>
         </div>
       </div>
    )
}


export default Backend;