import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard/ProjectCard.jsx";
import cvNestLogo from "../../assets/cvnest-logo.png";
import rockScissersGameLogo from "../../assets/rock-scissers-game-logo.png"
import websiteLogo from "../../assets/website.png";

const { container, projectsContainer } = styles;

const Projects = () => {
  return (
    <section id="projects" className={container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={projectsContainer}>
        <ProjectCard
          src={websiteLogo}
          githublink="https://github.com/Davdeveloper933/cvnest"
          demolink="https://cvnest.vercel.app/"
          h3="CVnest"
          p="Resume Builder App"
        />
        <ProjectCard
          src={websiteLogo}
          githublink="https://github.com/Davdeveloper933/rock-scissers-game"
          demolink="https://rock-scissers-game.vercel.app/"
          h3="Rock Scissers Paper"
          p="Game made in JS"
        />
      </div>
    </section>
  );
};

export default Projects;
