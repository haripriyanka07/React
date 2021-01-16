import React from "react";
import Heading from "../atoms/Heading/Heading";
import Paragraph from "../atoms/Paragraph/Paragraph";
import Container from "../molecule/Container/Container";


const About = () => {
    return (
        <Container>
            <Heading>About</Heading>
            <Paragraph>In the demo, there’s also a very rudimentary CSS-only responsive navigation menu. This menu is only a proof-of-concept, and it’s not production-ready. Since the focus of this tutorial is on building a fixed navigation bar, which can hold different types of menus and other interface components, I won’t be discussing that portion of the demo. I’ll just let you explore the source code if you’d like to see how that part of the demo works (if you’re having trouble or if you have questions about it, just send me a tweet and I’ll be happy to help out). The method discussed in this tutorial has excellent browser compatibility because it only uses tried-and-true CSS, and can thus be rendered properly even in some of the most ancient web browsers. However, if backwards-compatibility is important to your projects, then you may decide to replace the nav element (which is an HTML5 element) to a div.</Paragraph>
        </Container>
    );
}
export default About;