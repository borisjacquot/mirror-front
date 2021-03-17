import React from "react";
import {Button} from "./Button";
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>I DON'T LIKE YOU</h1>
            <p>Go fuck yourself</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    PIECE OF SHIT
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;