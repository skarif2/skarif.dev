import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../layout"
import config from "../../data/SiteConfig"
import projects from "../../data/ProjectData"
import personal from "../../data/PersonalData"

const AboutPage = () => {
  const { open, close } = projects
  const { stack, drivers, peoples } = personal
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <div className="container about">
        <h1>Get to know me!</h1>
        <p>
          I&rsquo;m is Fazlul Haque. I have been doing Software Development for
          quite a while now. Most of my works are in Javascript running on
          Node.js runtime. Throughout my career, I got involved in many
          different projects from designing architectures and databases to
          converting diagrams and flowcharts into code and shipping it to
          production.
        </p>
        <p>
          I was lucky enough to work with some great teammates in projects like{" "}
          <a href="/">Buddy</a>, <a href="/">Wallet</a>, <a href="/">Telvo</a>,{" "}
          <a href="/">PickNDrop</a>, <a href="/">AmarRide</a> and so on.
        </p>
        <p>
          I created this website to put all my{" "}
          <Link to="/learn">knowledge</Link> into words. I hope it would help
          other people in their journy of being a better developer.
        </p>
        <img
          alt="img_sk_arif"
          src="../../images/about_img.jpg"
          className="about-image"
        />

        <h2 className="about-title">Current Stack</h2>
        <ul>
          {stack.map(item => {
            return (
              <li key={item.type}>
                <strong>{item.type}</strong>
                {" : "}
                {item.value}
              </li>
            )
          })}
        </ul>

        <h2 className="about-title">Closed Source Projects</h2>
        <ul>
          {close.map(project => {
            return (
              <li key={project.title}>
                <a
                  href={project.path}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.title}
                </a>
                {" – "}
                {project.description}
              </li>
            )
          })}
        </ul>

        <h2 className="about-title">Open Source Projects</h2>
        <ul>
          {open.map(project => {
            return (
              <li key={project.title}>
                <a
                  href={project.path}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.title}
                </a>
                {" – "}
                {project.description}
              </li>
            )
          })}
        </ul>

        <h2 className="about-title">People I hangout with</h2>
        <ul>
          {peoples.map(people => {
            return (
              <li key={people.name}>
                {people.link !== "" ? (
                  <a
                    href={people.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {people.name}
                  </a>
                ) : (
                  people.name
                )}
                {people.description !== "" ? ` – ${people.description}` : ""}
              </li>
            )
          })}
        </ul>

        <h2 className="about-title">Daily Drivers</h2>
        <ul>
          {drivers.map(driver => {
            return (
              <li key={driver.type}>
                <strong>{driver.type}</strong>
                {" : "}
                {driver.link !== "" ? (
                  <a
                    href={driver.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {driver.value}
                  </a>
                ) : (
                  driver.value
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage
