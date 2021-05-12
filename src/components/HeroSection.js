import React from "react";
import {Button} from "./Button";
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>CONFIGURATION DESK</h1>
            <p>choose one</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    NEW CONFIG
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    CONFIG LIST
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;