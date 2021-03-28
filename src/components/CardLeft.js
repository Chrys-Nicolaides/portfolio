import React from "react";

const CardLeft = (props) => {
  const tags = props.tags;
  const icons = props.icons;
  const images = props.images;

  const multipleTags = tags.map((tag, key) => (
    <li key={key} className="technology-tag pr-6 pl-0">
      {tag}
    </li>
  ));

  const multipleIcons = icons.map((icon, key) => (
    <li key={key} className="icon-primary text-gray-300">
      {icon}
    </li>
  ));

  const multipleImages = images.map((image, key) => (
    <div className={"image" + key}>
      <img className="" src={image} alt={props.imageTitle} />
    </div>
  ));

  return (
    <div className="card-left-container">
      <div className="card-left-aligned">
        <h2 className="card-title">{props.title}</h2>
        <h2 className="card-subtitle">{props.subtitle}</h2>
        <p className="card-body">{props.body}</p>
        <ul className="card-list">{multipleTags}</ul>
        <ul className="card-icons">{multipleIcons}</ul>
      </div>
      <div className="multiple-images">{multipleImages}</div>
    </div>
  );
};

export default CardLeft;
