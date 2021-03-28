import React from "react";

const ArchCardLeft = (props) => {
  const tags = props.tags;
  const icons = props.icons;

  const multipleTags = tags.map((tag, key) => (
    <li key={key} className="technology-tag pr-0 pl-6">
      {tag}
    </li>
  ));

  const multipleIcons = icons.map((icon, key) => (
    <li key={key} className="icon-primary text-gray-300 pr-0 pl-4">
      {icon}
    </li>
  ));

  return (
    <div className="card-right-container">
      <div className="arch-image mr-12">
        <img className="" src={props.image} alt={props.imageTitle} />
      </div>
      <div className="card-right-aligned">
        <h2 className="card-title">{props.title}</h2>
        <h2 className="card-subtitle">{props.subtitle}</h2>
        <p className="card-body">{props.body}</p>
        <ul className="card-list flex justify-end">{multipleTags}</ul>
        <ul className="card-icons flex justify-end">{multipleIcons}</ul>
      </div>
    </div>
  );
};

export default ArchCardLeft;
