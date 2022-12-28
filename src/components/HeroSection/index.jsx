import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContents, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './hero.styled';
import { Button } from '../Button.styled';

import Video from '../../assets/video.mp4';

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type=' video/mp4' />
            </HeroBg>

            <HeroContents>
                <HeroH1>Love Problem Solving With Coding</HeroH1>
                <HeroP>
                    Sign up for a newest digital trends in web development technology
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContents>
        </HeroContainer>
    )
}

export default HeroSection