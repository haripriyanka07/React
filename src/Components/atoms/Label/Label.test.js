import React from 'react';
import Label from './Label';
import renderer from 'react-test-renderer';

it('test the Label', () => {
    const asFragment = renderer.create(<Label>New Label</Label>).toJSON();
    expect(asFragment).toMatchSnapshot()
})

