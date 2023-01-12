import React from 'react';

const ProjectListContainer = (props) => {
  return (
    <div className='project-list-container'>
      <h2>Here are my react projects</h2>
      <div className='project-list'>{props.children}</div>
    </div>
  );
};

export default ProjectListContainer;
