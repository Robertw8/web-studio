import React from "react";

function Team() {
  return (
    <>
      <h2 className="sectionHeading">Our Team</h2>
      <ul className="teamList d-flex">
        <li className="teamItem">
          <img src="/images/team/img-1.jpg" alt="Mark Guererro" />
          <h3>Mark Guerrero</h3>
          <p>Product Designer</p>
        </li>
        <li className="teamItem">
          <img src="/images/team/img-2.jpg" alt="Tom Ford" />
          <h3>Tom Ford</h3>
          <p>Frontend Developer</p>
        </li>
        <li className="teamItem">
          <img src="/images/team/img-3.jpg" alt="Camila Garcia" />
          <h3>Camila Garcia</h3>
          <p>Marketing</p>
        </li>
        <li className="teamItem">
          <img src="/images/team/img-4.jpg" alt="Daniel Wilson" />
          <h3>Daniel Wilson</h3>
          <p>UI Designer</p>
        </li>
      </ul>
    </>
  );
}

export default Team;
