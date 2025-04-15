import { React } from "react"
import "./Footer.css"
import img1 from "../../assets/love.png"



function Footer () {
    return(
        <div className="footer">
        <h2>Made with <img src={img1} alt="" /> by ChRiS DaSoN </h2>
   </div>

    )
}


export default Footer;