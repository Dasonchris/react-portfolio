import "./Navbar.css";
import { Link } from "react-router-dom";
import { Tabs } from "../../utils/Constants";
import { useState } from "react";
import { Menu } from "lucide-react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);

  };

  const [menuOpen,setMenuOpen] = useState(false)


  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <span> Princedestiny </span>
          </Link>
        </div>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
        
          <Menu size={24} />
        
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span> */}
        </div>
        <ul className={menuOpen ? "open" : ""}>
        {Tabs.map((Tab, id) => {
            return (
              <Link
                to={Tab.link}
                onClick={() => handleMenuClick(Tab.name)}
                className={activeMenu === Tab.name ? "active" : "tab"}
                key={id}
              >
                {Tab.name}
              </Link>
            );
          })}
          </ul>

       
      </div>
    </div>
  );
}

export default Navbar;
