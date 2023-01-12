import React from 'react';

const ProjectListContainer = (props) => {
  return (
    <div className='ProjectContainer'>
      <h2>Here are my react projects</h2>
      <div class='ProjectList'>{props.children}</div>
    </div>
  );
};

export default ProjectListContainer;
