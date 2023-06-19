import React from 'react';

const ProjectContainer = ({ title, imageSource, imageAlt, description }) => {
  return (
    <div className='project'>
      <img className='project-image' src={imageSource} alt={imageAlt} />
      <h3 className='project-title'>{title}</h3>
      <p className='project-description'>{description}</p>
    </div>
  );
};

export default ProjectContainer;
