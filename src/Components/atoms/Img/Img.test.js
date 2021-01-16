import React from 'react';
import Img from './Img';
import renderer from 'react-test-renderer';

it('test the img', () => {
    const asFragment = renderer.create(<Img src="hari" alt="hari img" />).toJSON();
    expect(asFragment).toMatchSnapshot()
})

