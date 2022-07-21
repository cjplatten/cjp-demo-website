import React from "react";
import InfoCard from "./InfoCard";

export default function Profile() {
  return (
    <div>
      <h2>Me</h2>
      <p>Nice to meet you!</p>
      <p>My name is Carrie Platten and I am a junior full stack developer.</p>
      <p>
        I worked in the scientific industry for several years before making the
        leap to change my career and joining the Northcoders Full Stack Bootcamp
        in 2021. I now work as a Junior Software Engineer and Mentor for
        Northcoders and my career has never more fulfilling!
      </p>

      <h3>Experience:</h3>
      <section className="infocard-container">
        <InfoCard>
          <h4>Junior Software Engineer and Mentor</h4>
          <h5>Northcoders</h5>
          <h6>January 2022 to Present</h6>
          <p>Full stack dev and mentoring bootcamp students</p>
        </InfoCard>
        <InfoCard>
          <h4>Trainee Software Engineer</h4>
          <h5>Northcoders bootcamp</h5>
          <h6>August 2021 to November 2021</h6>
          <p>A 13-week software development bootcamp</p>
        </InfoCard>
      </section>
    </div>
  );
}
