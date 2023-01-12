import React from 'react';

const ProjectContainer = (props) => {
  return (
    <div className='project'>
      <img
        className='project-image'
        src={props.imageSource}
        alt={props.imageAlt}
      />
      <h3 className='project-title'>{props.title}</h3>
      <p className='project-description'>{props.description}</p>
    </div>
  );
};

export default ProjectContainer;
