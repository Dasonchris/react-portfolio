import { React } from "react"
import "./containerSection.css"

import img1 from "../../assets/man.png"
import im2 from "../../assets/react.png"
import img3 from "../../assets/html.png"
import img4 from "../../assets/javascript.png"
import img5 from "../../assets/css.png"
import img6 from '../../assets/star.png'



function ContainerSection () {
    return(
        <div className="container">
            <h1>What I DO?</h1>

            <div className="greeting">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="package">
                    <h2>Frontend Development</h2>
                    <div className="me">
                        <img src={im2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>

                
                <div className="description">
                    <div className="paragraph">
                        <img src={img6} alt="" />
                        <p>Building interactive websites using React, Javascript,Html and css.</p>
                    </div>
                    <div className="paragraph"> 
                        <img src={img6} alt="" />
                        <p>Building web application using Modern  web Development practices.</p>
                    </div>
                    {/* <div className="paragraph">
                        <img src={img6} alt="" />
                        <p>Creating backend application using  Firebase and React.</p>
                    </div> */}
                </div>
                </div>
            </div>
            
        </div>
    )
}


export default ContainerSection;