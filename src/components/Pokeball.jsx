import React, { Component } from "react";

class Pokeball extends Component {
    render() {
        return (
            <>
                <div className="pokeball-bg"></div>
                <div className="pokeball">
                    <div className="pokeball-border-center"></div>
                    <div className="pokeball-line"></div>
                    <div className="pokeball-center"></div>
                </div>
            </>
        )
    }
}

export default Pokeball;