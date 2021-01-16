import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

it('test the input', () => {
    const renderedComponent = renderer.create(<Input type="text" placeholder="Enter..." value="New Text Input" />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
})