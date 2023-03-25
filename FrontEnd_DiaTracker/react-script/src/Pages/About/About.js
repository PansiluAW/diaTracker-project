import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <main class="main-content">
        <div class="mission-image fade-in">
          <img src="medical-mission.png" width="400" height="400" />
        </div>
        <div class="mission-section fade-in">
          <div id="text">
            <h2>Our Mission</h2>
            <p>
              This project aims to contemplate, design, implement and quality
              check a system that will make one’s journey in coping with
              diabetes a bit easy using technological features available in the
              current world for the betterment of one’s health.The system will
              provide a user-friendly interface that enables people with
              diabetes to monitor their blood glucose levels.
            </p>
          </div>
        </div>
        <div class="history-section fade-in">
          <div id="text">
            <h2>Our History</h2>
            <p>
              Founded in 2023, We have always prioritized innovation and
              customer satisfaction, which has allowed us to achieve consistent
              growth and success.As a Team, we have worked tirelessly to
              maintain a culture of innovation and creativity. We recognize the
              importance of staying ahead of the curve and continuously adapting
              to the ever changing landscape of technology and consumer needs.
            </p>
          </div>
        </div>
        <div class="history-image fade-in">
          <img src="our-history.png" width="400" height="400" />
        </div>
        <div class="team-image fade-in">
          {" "}
          <img src="team.png" width="400" height="400" />
        </div>
        <div class="team-section fade-in">
          <div id="text">
            <h2>Our Team Aspire</h2>
            <p>
              Our team is comprised of undergraduates who are passionate about
              their work and dedicated to providing exceptional service. We are
              committed to innovate a positive product.Our team is not only
              passionate about their work, but they also possess a diverse set
              of skills and expertise that enables us to tackle complex problems
              with ease.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; Aspire. All rights reserved.</p>
        <a href="Privacy.html">Privacy Policy</a>
      </footer>
    </>
  );
}
