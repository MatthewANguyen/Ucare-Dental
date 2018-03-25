import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    render() {


        return (
            <div className="slider">

                {/* Slides go here */}
                { this.state.slideCount === 1 ? <SlideOne /> : <div></div> }
                { this.state.slideCount === 2 ? <SlideTwo /> : <div></div> }
                { this.state.slideCount === 3 ? <SlideThree /> : <div></div> }

                {/* Arrow Functionality */}
                <LeftArrow previousSlide={this.previousSlide} />
                <RightArrow nextSlide={this.nextSlide} />
            </div>
        );
    }


    // I have ocd sometimes and put my functions below the JSX. You can put them above if you'd like.
    nextSlide() {
        if(this.state.slideCount < 3) {
            this.setState({slideCount: this.state.slideCount + 1})
        } else {
            this.setState({slideCount: 1})
        }
    }
    previousSlide() {
        if(this.state.slideCount > 1) {
            this.setState({slideCount: this.state.slideCount - 1})
        } else {
            this.setState({slideCount: 3})
        }
    }
}