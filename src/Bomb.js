// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }
    render() {
       if (this.state.secondsLeft > 0) {
        return (
           <h5>{this.state.secondsLeft} seconds left before I go boom!</h5>
        )} else {
            return (
                <h5>Boom!</h5>
            )
        }
    }
}