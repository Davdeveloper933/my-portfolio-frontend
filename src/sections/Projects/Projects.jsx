import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard/ProjectCard.jsx";
import cvNestLogo from "../../assets/cv.png";

const { container, projectsContainer } = styles;

const Projects = () => {
  return (
    <section id="projects" className={container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={projectsContainer}>
        <ProjectCard
          src={cvNestLogo}
          link="https://github.com/Davdeveloper933/cv-builder"
          h3="CVnest"
          p="Resume Builder App"
        />
      </div>
    </section>
  );
};

export default Projects;
