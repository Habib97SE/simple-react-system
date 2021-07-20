import React from "react";

export default function SubMenu(props) {
  return (
      <>
        {props.item.text}
      <i className="fas fa-angle-down icon"></i>
      <ul className="subnav-content">
        {props.item.subMenuItems.map((subValue, subIndex) => (
          <a href={subValue.link} rel="noreferrer" target="_blank">
            <li key={subIndex} className="btn btn-secondary">
              {subValue.text}
            </li>
          </a>
        ))}
      </ul>
      </>
  );
}
