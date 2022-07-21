import React from "react";

export default function ProjectsPage() {
  return (
    <div>
      <h2>ProjectsPage</h2>
      <section class="page-body">
        <ul class="projects">
          <li class="single-project">
            <h3 class="project-title">Full Stack Project</h3>
            <a href="https://boardgame-reviews.netlify.app/">
              <img
                src="images/boardgame-reviews-screenshot.png"
                alt="the boardgame-reviews.netlify.app homepage"
                class="project-img"
              />
            </a>
            <p>
              A website in which users can read, post comments on and vote for
              reviews which connects to an API which stores said reviews and
              data. Front-end built in ReactJS and styled with CSS. Back-end
              built in JavaScript with Node and PostgreSQL.
            </p>
            <h4>Front-end:</h4>
            <p>
              <a href="https://boardgame-reviews.netlify.app/">Hosted</a> /{" "}
              <a href="github.com/cjplatten/boardgame-reviews">Github Repo</a>
            </p>
            <h4>API:</h4>
            <p>
              <a href="nc-boardgames-cjp.herokuapp.com/api">Hosted</a> /{" "}
              <a href="github.com/cjplatten/cjp-nc-boardgames">Github Repo</a>
            </p>
          </li>

          <li class="single-project">
            <h3 class="project-title">Personal Portfolio</h3>
            <a href="https://cjplatten.github.io/cjp-demo-website/">
              <img
                src="images/portfolio-screenshot.png"
                alt="the header and navbar of this website"
                class="project-img"
              />
            </a>
            <p>This website! Built with HTML and styled with CSS.</p>
            <p>
              <a href="github.com/cjplatten/cjp-demo-website ">Github Repo</a>
            </p>
          </li>
          <li class="single-project">
            <h3 class="project-title">Final Northcoders Group Project</h3>
            <img
              src="images/RP-GO-screenshots.png"
              alt="the title screen and challenge map screen for an app called RP-GO!"
              class="project-img"
            />
            <div class="project-vid-container">
              <iframe
                max-width="1294"
                max-height="480"
                justify-self="center"
                src="https://www.youtube.com/embed/4vjzMlRIOlI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="project-vid"
              ></iframe>
            </div>
            <p>
              A role playing game-inspired fitness app I developed as part of a
              team for the final project block of the Northcoders bootcamp.
              Front-end built in ReactNative, back-end built with MongoDB and
              mongoose.
            </p>
            <h4>App:</h4>
            <p>
              <a href="https://boardgame-reviews.netlify.app/">Hosted</a> (Expo
              Go app required, see the Github repo) /{" "}
              <a href="github.com/Andy-Smith1/fe-rpgo">Github Repo</a>
            </p>
          </li>
        </ul>
        <p></p>
        <h3>Athena 24 Hour Hackathon 2022</h3>
        <h4>Spare Seat</h4>
        <h5>
          A full-stack mobile app to designed to facilitate ride-sharing
          opportunities for refugees
        </h5>
        <p>
        A full-stack mobile app to designed to facilitate ride-sharing
          opportunities for refugees
          The Northcoders Classroom Team ✨ August A. Carrie Platten, Duncan Crawley, Madeleine Hughes and Emily Bennett took part in the 2022 ShowCode 🦩 Athena Hackathon at the weekend.

🚗 The team created a prototype app, Spare Seat, designed to facilitate ride-sharing opportunities for refugees.

The prototype was built in react, using firestore for the data and fireauth for authentication.

You can see more information on the video here: https://lnkd.in/eB9qQ35w
        </p>
      </section>
    </div>
  );
}
