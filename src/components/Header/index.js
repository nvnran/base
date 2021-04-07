import React from "react";

const HeaderComponent = ({ title }) => {
  return (
    <>
      <div className="row header">
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default HeaderComponent;
