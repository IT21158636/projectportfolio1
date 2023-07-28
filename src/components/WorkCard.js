import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="imge" />
      <h2 className="project-title">{props.title}Project Title</h2>
      <div className="pro-detalis">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
