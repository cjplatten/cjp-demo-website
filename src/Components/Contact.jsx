import React from "react";
import InfoCard from "./InfoCard";

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <section className="infocard-container">
        <InfoCard>
          <h4>Email</h4>
          <p>cjplatten@gmail.com</p>
        </InfoCard>
        <InfoCard>
          <h4>LinkedIn Profile</h4>
          <a
            href="https://www.linkedin.com/in/carrie-platten-8269315a/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Carrie Platten</p>
          </a>
        </InfoCard>
        <InfoCard>
          <h4>Github</h4>
          <a
            href="https://github.com/cjplatten"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>cjplatten</p>
          </a>
        </InfoCard>
      </section>
    </div>
  );
}
