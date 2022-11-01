import React from "react";

function FooterList({ heading, listItems }) {
  return (
    <div>
      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
        <h4>{heading}</h4>
        {listItems?.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default FooterList;
