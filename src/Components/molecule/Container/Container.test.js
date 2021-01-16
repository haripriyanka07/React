import React from 'react';
import Container from './Container';
import renderer from 'react-test-renderer';
import Heading from '../../atoms/Heading/Heading';

it('test the Container', () => {
    const asFragment = renderer.create(<Container><Heading>Heading</Heading></Container>).toJSON();
    expect(asFragment).toMatchSnapshot()
})

