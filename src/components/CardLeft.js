import React from "react";

const CardLeft = (props) => {
  const tags = props.tags;
  const icons = props.icons;
  const multipleTags = tags.map((tag) => (
    <li className="technology-tag">{tag}</li>
  ));
  const multipleIcons = icons.map((icon) => (
    <li className="icon-primary text-gray-300">{icon}</li>
  ));

  return (
    <div className="card-left-aligned">
      <h2 className="card-title">{props.title}</h2>
      <h2 className="card-subtitle">{props.subtitle}</h2>
      <p className="card-body">{props.body}</p>
      <ul className="card-list">{multipleTags}</ul>
      <ul className="card-icons">{multipleIcons}</ul>
    </div>
  );
};

export default CardLeft;
