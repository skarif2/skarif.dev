import React from 'react'
import PropTypes from 'prop-types'
import GitHubButton from 'react-github-btn'

const ProjectList = props => {
  const { projects } = props
  return (
    <div>
      {projects.map(project => (
        <div key={project.title}>
          <h2>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{project.icon}</div>
              <div>{project.title}</div>
            </a>
          </h2>
          <p>{project.description}</p>
          <div>
            {project.path && (
              <a href={project.path} target="_blank" rel="noopener noreferrer">
                Site
              </a>
            )}
            <GitHubButton href={project.source} data-size="large" data-show-count="true">
              Source
            </GitHubButton>
          </div>
        </div>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProjectList