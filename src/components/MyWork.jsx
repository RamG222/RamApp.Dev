import React from "react";
import "./MyWork.css";
import work from "../Images/work.jpg";

const MyWork = () => {
  return (
    <>
    <div className="heading">
        <h3>My Latest Work | Portfolio</h3>
    </div>
    <div className="my-work">
      <div className="card-1">
        <img src={work} alt="" />
        <p className="title">Free Bird</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="card-2">
        <img src={work} alt="" />
        <p className="title">Free Bird</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="card-3">
        <img src={work} alt="" />
        <p className="title">Free Bird</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <hr />
    </>
  );
};

export default MyWork;
