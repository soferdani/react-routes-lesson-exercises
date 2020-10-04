import React, { Component } from 'react';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        

        const state = this.props.state
        const currentFentity = this.props.match.params
        const wizOrBist = currentFentity.fentities
        const wizName = currentFentity.name
        const fentity = state[wizOrBist].filter(i => i.name === wizName)[0]
       
        return (
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
