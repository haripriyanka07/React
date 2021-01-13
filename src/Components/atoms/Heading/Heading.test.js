import React from 'react';
import Heading from './Heading';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
afterEach(cleanup);

// describe('test the Heading', () => {
    // it('should return the value passed as header', async() => {
    //     const { getByText } = render(<Heading value="Heading" />);
    //     // console.log(screen)
    //     expect(getByText(/Heading/))
    //     var component = TestUtils.renderIntoDocument(
    //         <Heading />
    //      );
    //     var h1 = TestUtils.findRenderedDOMComponentWithTag(
    //         component, 'h1'
    //      );
    //      console.log(h1)
    // })
    // it("renders an h1", function () {
    //     var component = render(
    //         <Heading value="Hari"/>
    //     );
    //     console.log(component)
    //     console.log(component.getByLabelText())
    
    //     var h1 = TestUtils.findRenderedDOMComponentWithTag(
    //        component, 'h1'
    //     );
    
    //     expect(h1.getDOMNode().textContent)
    //         .toEqual("Hari");
    // });

    

// })

// test("basic snapshot", () => {
    // const { getByTestId } = render(<Heading value="Contact" />);
    // expect(getByTestId("h1tag")).toHaveTextContent("Contact");
//   });

it("render", () => {
    const { asFragment } = render(<Heading value="cruze" />);
    expect(asFragment()).toMatchSnapshot();
})
it('should return the value passed as header', async() => {
    const { getByTestId } = render(<Heading value="Contact" />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact");
})