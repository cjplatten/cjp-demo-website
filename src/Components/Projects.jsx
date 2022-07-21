import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      <h3>Northcoders Bootcamp Projects</h3>
      <section className="infocard-container">
        <InfoCard>
          <a
            href="https://boardgame-reviews.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h4>Boardgame Reviews</h4>
          </a>
          <h5>Full Stack, Solo Project</h5>
          <p>
            A website in which users can read, post comments on and vote for
            reviews.
          </p>
          <a
            href="https://boardgame-reviews.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>App</p>
          </a>
          <Link to="/projects#boardgame">See more details</Link>
        </InfoCard>
        <InfoCard>
          <h4>RP-GO</h4>
          <h5>Full Stack Mobile App, Group Project</h5>
          <p>A fitness app inspired by old school role playing games</p>
          <a
            href="https://www.youtube.com/watch?v=4vjzMlRIOlI"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Video</p>
          </a>
          <Link to="/projects#rpgo">See more details</Link>
        </InfoCard>
      </section>

      <h3>Coding Events</h3>
      <section className="infocard-container">
        <InfoCard>
          <h4>Spare Seat</h4>
          <h5>Full Stack App, 24 Hour Coding Jam Group Project</h5>
          <h6>Athena 24 Hour Hackathon June 2022</h6>
          <p>
            A full-stack mobile app to designed to facilitate ride-sharing
            opportunities for refugees
          </p>
          <a
            href="https://www.youtube.com/watch?v=KKSJWAuDIbg"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Video</p>
          </a>
          <Link to="/projects#spare-seat">See more details</Link>
        </InfoCard>
      </section>
      <h3>Just For Fun</h3>
      <section className="infocard-container">
        <InfoCard>
          <h4>Ghost Clicker Game</h4>
          <h5>Front end app</h5>
          <p>Resource management clicker game</p>
          <a
            href="https://spooky-clicker.netlify.app/ "
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>App</p>
          </a>
          <Link to="/projects#clicker">See more details</Link>
        </InfoCard>
        <InfoCard>
          <h4>Funky Little Skateboarder</h4>
          <h5>Fun with CSS animations</h5>
          <p>
            May not be suitable for those with photosensitivity due to
            animations
          </p>
          <p>
            The time i got a little carried away with a challenge to make the
            ugliest app
          </p>
          <a
            href="https://stay-radical.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>App</p>
          </a>
          <Link to="/projects#radical">See more details</Link>
        </InfoCard>
      </section>
      <Link to="/projects">See more</Link>
    </div>
  );
}
