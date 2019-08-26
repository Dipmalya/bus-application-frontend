import React from 'react';
import '../../assests/css/home.css';
const image = require('../../assests/images/3.jpg');

const Home = () => (
    <div className="home">
        <div className="home-slider-container">
            <div className="home-slider">
                <div className="home-slider-background" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
        </div>
    </div>
)

export default Home;