import React, { Component } from "react";

class Background extends Component {
    render() {
        return <div style={{backgroundImage: `url(${this.props.bg})`}} className="bg"></div>
    }
}

export default Background;