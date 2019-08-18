import React from "react"
import PropTypes from "prop-types"
import GitHubButton from "react-github-btn"

const ProjectList = props => {
  const { projects } = props
  return (
    <div className="projectlist">
      {projects.map(project => (
        <div className="project" key={project.title}>
          <div className="project-icon">{project.icon}</div>
          <div className="project-details">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-buttons">
            {project.path && (
              <a
                className="button"
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            )}
            <GitHubButton
              href={project.source}
              data-size="large"
              data-show-count="false"
            >
              Source
            </GitHubButton>
          </div>
        </div>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList
