import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Navbar = () => {
    return (
        <nav className=" ">
            <div className="text-right ">
                <NavLink to="/" className="text-black px-6">Home</NavLink>
                <NavLink to="/projects" className="text-black px-6">Projects</NavLink>
                <NavLink to="/about" className="text-black px-6">About</NavLink>
                <NavLink to="/contact" className="text-black px-5">Contact</NavLink>
            </div>               
            <Routes>
            <Route  path="/" Component={Home} />
            <Route  path="/projects" Component={Projects} />
            <Route  path="/about" Component={About} />
            <Route  path="/contact" Component={Contact} />
            </Routes>
        </nav>
    );
};

export default Navbar;
