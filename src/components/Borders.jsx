import React, { Component } from "react";

class Borders extends Component {

    createChildrenElements() {
        let array = [];
        for (let i = 1; i < 5; i++) {
            array.push(<div key={i} className={`${this.props.name}-${i}`}></div>);
        }
        return array;
    }

    render() {
        let childrens = this.createChildrenElements();
        return (
            <div className={this.props.name}>
                {childrens}
            </div>
        )
    }
}

export default Borders;