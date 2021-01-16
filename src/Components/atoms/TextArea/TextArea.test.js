import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from './TextArea';

it('test the TextArea', () => {
    const renderedComponent = renderer.create(<TextArea value="this is textarea testing" />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
})