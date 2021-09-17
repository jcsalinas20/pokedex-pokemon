import React, { Component } from "react";

class Background extends Component {
    render() {
        if (!localStorage.getItem("bg")) {
            localStorage.setItem("bg", 0)
        }
        let index = localStorage.getItem("bg");
        return <div style={{ backgroundImage: `url(${this.props.bg[index]})` }} className="bg"></div>
    }
}

export default Background;