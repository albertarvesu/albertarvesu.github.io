import React from "react";
import ReactDOM from "react-dom";
import "./global-styles";
import "./App.css";

const App = () => (
  <div className="container">
    <div className="center">
      <h1 className="headline">&lt;&gt;Mabuhay!&lt;/&gt;</h1>
    </div>

    <p className="subhead">
      My name is <strong className="name">Albert Arvesu</strong>, a Full Stack
      Developer residing in Melbourne, Australia. I am passionate in
      everything about Javascript. When not writing code, you will see me
      dribbling a basketball or running after my 2-year old daughter.
    </p>

    <h3 className="lead">
      Knowledgeable but still continues to learn more about...
    </h3>

    <p className="listhead">FRONTEND</p>

    <ul className="listContainer">
      <li>
        ReactJS<span className="blinking-cursor">|</span>
      </li>
      <li>React Native</li>
      <li>Angular</li>
      <li>ES6</li>
      <li>Redux</li>
      <li>GraphQL</li>
      <li>Webpack</li>
      <li>Typescript</li>
      <li>CSS Modules</li>
      <li>Styled-Components</li>
    </ul>

    <p className="listhead">BACKEND</p>

    <ul className="listContainer">
      <li>NodeJS</li>
      <li>Grails</li>
      <li>Firebase</li>
      <li>PHP</li>
      <li>Elastic Search</li>
      <li>Amazon Web Services</li>
      <li>MySQL</li>
      <li>MongoDB</li>
    </ul>

    <p className="listhead">TOOLS</p>

    <ul className="listContainer">
      <li>Yarn</li>
      <li>Docker</li>
      <li>Jenkins</li>
      <li>Npm</li>
      <li>Shell</li>
      <li>Gulp</li>
      <li>Gradle</li>
    </ul>

    <h3 className="lead">Built or participated in...</h3>

    <ul className="listContainer">
      <li>
        <a target="_blank" href="https://espendy.com">
          eSpendy - Expenses Tracker
        </a>
      </li>
      <li>
        <a target="_blank" href="https://portal.betpump.com/#/">
          Metric Sportsbook Client
        </a>
      </li>
      <li>
        <a target="_blank" href="http://www.bliimo.com">
          Bliimo Apps (API, Web and Mobile)
        </a>
      </li>
      <li>
        <a target="_blank" href="https://90seconds.com">
          90 Seconds Platform
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.seeals"
        >
          Spideal Mobile Apps
        </a>
      </li>
      <li>
        <a target="_blank" href="http://globaltix.com">
          GlobalTix Web Platform
        </a>
      </li>
      <li>
        <a target="_blank" href="http://www.globetrekkerchallenge.com/">
          Globetrekker Challenge Mobile Apps
        </a>
      </li>
      <li>and so on...</li>
    </ul>

    <ul className="lead horizontal">
      <li>
        <a
          target="_blank"
          href="https://github.com/albertarvesu"
          className="github icon-link"
        >
          Github
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/albertarvesu"
          className="twitter icon-link"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/albert-arvesu-58271554/"
          className="linkedin icon-link"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="mailto:albertarvesu@gmail.com"
          className="mail icon-link"
        >
          Email
        </a>
      </li>
    </ul>
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
