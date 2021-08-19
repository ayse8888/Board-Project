import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
const menuIconClick = () => {
  //condition checking to change state from true to false and vice versa
  menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};

return (
  <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
      <div collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
            {menuCollapse ? (
              <FiArrowRightCircle/>
            ) : (
              <FiArrowLeftCircle/>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
          <Link to="/"><MenuItem icon={<FaList/>}>Home</MenuItem></Link>
          <Link to="/favorite"> <MenuItem icon={<FaRegHeart />}>Favorite</MenuItem></Link>
          <Link to="/about"> <MenuItem icon={<RiPencilLine />}>About</MenuItem></Link>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </div>
    </div>
  </>
);
};

export default Navbar;
