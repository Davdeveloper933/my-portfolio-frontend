import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

const { container, projectsContainer } = styles;

const Projects = () => {
  return (
    <section id="projects" className={container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fitlift"
          p="Fitness App"
        />
      </div>
    </section>
  );
};

export default Projects;
