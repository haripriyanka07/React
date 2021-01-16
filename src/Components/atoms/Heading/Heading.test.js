import React from 'react';
import Heading from './Heading';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";

afterEach(cleanup);

it("render", () => {
    const { asFragment } = render(<Heading>Heading</Heading>);
    expect(asFragment()).toMatchSnapshot();
})
it('should return the value passed as header', async() => {
    const { getByTestId } = render(<Heading>Contact</Heading>);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact");
})