import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, githubLink, linkedinLink} = props;
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>};
      <Links github={githubLink} linkedin={linkedinLink} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;