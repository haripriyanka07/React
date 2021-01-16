import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from './Paragraph';

it('test the paragraph', () => {
    const renderedComponent = renderer.create(<Paragraph>This is paragraph testing</Paragraph>).toJSON();
    expect(renderedComponent).toMatchSnapshot();
})