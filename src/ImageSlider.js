// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

    state = {
        currentSlideIndex: 0
    }

    render() {
        return (
            <h5>I am on slide {this.state.currentSlideIndex}</h5>
        )
    }

}