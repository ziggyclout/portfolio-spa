import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => (
  <div className="project-grid">
    {projects.length === 0 ? (
      <p>No projects found.</p>
    ) : (
      projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))
    )}
  </div>
);

export default ProjectList;
