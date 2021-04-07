import React from "react";

const HomeComponent = ({ title }) => {
  return (
    <>
      <div className="row content">
        <img
          src={require("../../assets/img/uc.jpg").default}
          alt={title}
          title={title}
          className="img-fluid"
        />
      </div>
    </>
  );
};

export default HomeComponent;
