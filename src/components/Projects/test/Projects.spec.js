import React from 'react';
import renderer from 'react-test-renderer';
import Projects from '../Projects';

describe('Projects component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Projects />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});