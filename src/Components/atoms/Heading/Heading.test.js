import React from 'react';
import Heading from './Heading';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";

afterEach(cleanup);

it("render", () => {
    const { asFragment } = render(<Heading value="cruze" />);
    expect(asFragment()).toMatchSnapshot();
})
it('should return the value passed as header', async() => {
    const { getByTestId } = render(<Heading value="Contact" />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact");
})