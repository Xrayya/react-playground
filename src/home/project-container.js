import React from 'react';

const ProjectContainer = (props) => {
  return (
    <div className='Project'>
      <img
        className='Project-Image'
        src={props.imageSource}
        alt={props.imageAlt}
      />
      <h3 className='Project-Title'>{props.title}</h3>
      <p className='Project-Description'>{props.description}</p>
    </div>
  );
};

export default ProjectContainer;
