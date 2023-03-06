import React from "react";

function About() {
  return (
    <>
      <h2 className="sectionHeading">What are we doing</h2>
      <ul className="aboutList d-flex">
        <li>
          <img src="/images/about/img-1.jpg" alt="User profile" width="360" />
        </li>
        <li>
          <img src="/images/about/img-2.jpg" alt="Chat" width="360" />
        </li>
        <li>
          <img src="/images/about/img-3.jpg" alt="Phone" width="360" />
        </li>
      </ul>
    </>
  );
}

export default About;
