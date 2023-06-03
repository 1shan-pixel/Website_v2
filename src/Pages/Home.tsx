// components/Home.js
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import BackgroundImgage from "../assets/intro-bg.jpg";

const Home = () => {
    const [text, setText] = useState("");

    return (
        <div >

            <img src={BackgroundImgage} alt="Image" className="object-cover w-screen h-screen opacity-[.999] brightness-[0.39]" />
            <h1 className= "absolute top-[7.0em] right-[13.4em] text-white text-2xl ">HELLO I'M ISHAN!</h1>
            <h1 className="absolute top-[8.0em] right-[11.9em] text-white text-2xl py-2">Welcome to my website</h1>

            <button className="bg-white-500 text-white py-2 px-4 rounded-md">Project</button>
            <button className="bg-transparent gg text-white py-2 px-4 rounded-md">Contact</button>
        </div>
    );
};

export default Home;