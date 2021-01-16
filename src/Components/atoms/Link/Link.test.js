import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import renderer from 'react-test-renderer';
import Link from './Link';

it('test the input', () => {
    const renderedComponent = renderer.create(<Router><Link to='linkstate'>newLink</Link></Router>).toJSON();
    expect(renderedComponent).toMatchSnapshot();
})