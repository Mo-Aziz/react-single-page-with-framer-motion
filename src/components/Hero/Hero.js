import React from 'react';
import {Section,Container} from "./Hero.styles";

const Hero = ({image,title,desc}) => {
    return (
        <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{desc}n</p>
                <button>Learn More</button>
            </Container>
        </Section>
    )
}

export default Hero
