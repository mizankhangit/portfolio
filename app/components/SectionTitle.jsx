import React from "react";

const SectionTitle = (props) => {
  const centered = props.centered;

  return (
    <div
      className={`Mzn-section-title${centered ? " Mzn-section-title--centered" : ""}${props.className ? ` ${props.className}` : ""}`}
      style={props.style}
    >
      {props.heading && (
        <p className="Mzn-section-label">{props.heading}</p>
      )}
      {props.subHeading && (
        <h2 className="Mzn-section-sub-heading">{props.subHeading}</h2>
      )}
      {props.note && <p className="Mzn-note">{props.note}</p>}
    </div>
  );
};

export default SectionTitle;
