import styles from "./ProjectCardStyles.module.css"

const {projectCardButtonsContainer} = styles;

const ProjectCard = ({ link, src, h3, p }) => {
  return (
    <div>
      <img src={src} alt={`${h3} logo`} className="hover" />
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className={projectCardButtonsContainer}>
          <a href = {link} target = "_blank">
              <button className = "btn hover">Github</button>
          </a>
          <a href = {link} target = "_blank">
              <button className = "btn hover">Demo</button>
          </a>
      </div>
    </div>
  );
};

export default ProjectCard;
