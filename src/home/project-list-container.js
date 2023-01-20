import React from 'react';

const ProjectListContainer = ({ children }) => {
  return (
    <div className='project-list-container'>
      <h2>Here are my react projects</h2>
      <div className='project-list'>
        {children}
      </div>
    </div>
  );
};

export default ProjectListContainer;
