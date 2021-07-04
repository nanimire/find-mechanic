import { NavLink } from "react-router-dom";
import './nav-bar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <NavLink exact to="/" className="main-nav" activeClassName = "main-nav-active">Home</NavLink>
        <NavLink exact to="/contact" className="main-nav" activeClassName = "main-nav-active">Contact</NavLink>
      </nav>
    );
  }
   
  export default Navbar;