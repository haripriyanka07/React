import React from "react";
import Heading from "../atoms/Heading/Heading";
import Container from "../molecule/Container/Container";
import Paragraph from "../atoms/Paragraph/Paragraph";

const Home = () => {
    return (
        <Container>
            <Heading value="Home" />
            <Paragraph value="Earlier, we gave our HTML element a class attribute of fixed-nav-bar so that we can apply the above style rule to it. The last three properties (width, height, and background-color) are variable; change their values according to your needs. Let’s talk about the four key CSS properties responsible for the magic in greater detail. " />
        </Container>
    );
}
export default Home;