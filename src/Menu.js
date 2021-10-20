import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="menu">
        <NavLink exact to="/"> Home </NavLink>  |
        <NavLink exact to="/.one"> one </NavLink>  |
        <NavLink exact to="/.two"> two </NavLink>  |
        <NavLink exact to="/.three"> three </NavLink>  |
        <NavLink exact to="/.four"> Four </NavLink>  |
        <NavLink exact to="/.five"> Fift </NavLink>  |
        <NavLink exact to="/.six"> Six </NavLink>  |
        <NavLink exact to="/.seven"> Seven </NavLink>  |
        <NavLink exact to="/.eight"> Eight </NavLink>  |
        <NavLink exact to="/.nine"> Nine </NavLink>  |
        </div>
    );
}
 
export default Menu;