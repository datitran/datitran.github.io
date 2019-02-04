import React from 'react';
import renderer from 'react-test-renderer';
import GitHubStats from '../GitHubStats';

describe('GitHubStats component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <GitHubStats stats={{}} />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});