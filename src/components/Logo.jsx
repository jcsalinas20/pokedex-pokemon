import React, { Component } from "react";
import imgLogo from "../images/logo.png";

class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <a href="https://github.com/jcsalinas20/pokedex-pokemon" target="_blank" rel="noreferrer" >
                    <img src={imgLogo} alt="logo" width="350" />
                </a>
            </div>
        );
    }
}

export default Logo;