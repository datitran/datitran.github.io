import React from 'react';
import { Container } from 'reactstrap';
import './Projects.scss';

import ProjectTile from '../../components/ProjectTile/ProjectTile';
import ProjectService from '../../services/ProjectService';

export default (props) => {
  function renderProjectTiles() {
    let tileList = [];

    ProjectService.getProjects().forEach((project, index) => {
      tileList.push(
        <ProjectTile key={'projectTile' + index} projectData={project} />
      );
    });

    return tileList;
  }

  return (
    <Container>
        <h2 className='sectionHeading projects__heading'>Projects</h2>
          <section className='projects__container' id='projects'>
            <div className='projects__tiles'>
              {renderProjectTiles()}
            </div>
          </section>
    </Container>
  );
}
