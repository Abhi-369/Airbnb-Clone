import React from 'react';
import './Header.css'
import { FaSearch, FaGlobe, FaAngleDown, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";

function Header() {

    const mystyle = {
        "listStyle": "none",
        "flex": "1",
        "marginLeft": "-15rem"
    }

    return <div className="header">
        <Link to="/">
            <img className="header__icon" src="https://i.pinimg.com/564x/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.jpg" alt="" />
        </Link>
        <Link to="/search" style={{"color":"white"}}>
            <Button variant="outlined" style={mystyle}>
                Explore
            </Button>
        </Link>
        <div className="header__center">
            <input type="text" />
            <FaSearch />
        </div>

        <div className="header__right">
            <p>Become a Host</p>
            <FaGlobe />
            <FaAngleDown />
            <FaUserCircle />

        </div>

    </div>;
}

export default Header;
