import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-large">Resume</p>
        <hr />
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Git, Javascript</li>
            <li>Third-party & Server-side APIs, AJAX, and JSON</li>
            <li>Node.js, OOP, Express.js servers</li>
            <li>MySQL, ORM, MVC, Handlebars.js</li>
            <li>Heroku, MongoDB and NoSQL</li>
            <li>PWAs, React, MERN</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;