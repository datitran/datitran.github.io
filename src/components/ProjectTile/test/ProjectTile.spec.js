import React from 'react';
import renderer from 'react-test-renderer';
import ProjectTile from '../ProjectTile';

describe('ProjectTile component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <ProjectTile projectData={{}} />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});