import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Jikku's Pizzeria </h1>
                <p> Pizza To Fit Any Test </p>
                <Link to="/menu">
                    <button id="btn"> Order Now </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
