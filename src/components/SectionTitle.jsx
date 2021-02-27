import React from "react";

const SectionTitle = (props) => {
  return (
    <div
      className={`Mzn-section-title ${props.className ? props.className : ""}`}
      style={props.style}
    >
      {props.heading && (
        <h2 className="Mzn-section-heading">{props.heading}</h2>
      )}
      {props.subHeading && (
        <h3 className="Mzn-section-sub-heading">{props.subHeading}</h3>
      )}
      {props.note && <p className="Mzn-note">{props.note}</p>}
    </div>
  );
};

export default SectionTitle;
