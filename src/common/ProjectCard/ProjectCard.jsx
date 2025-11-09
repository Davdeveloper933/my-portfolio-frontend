import styles from "./ProjectCardStyles.module.css"

const {projectCardButtonsContainer,projectCardLink,img} = styles;

const ProjectCard = ({ githublink,demolink, src, h3, p }) => {
  return (
    <div>
      <img src={src} alt={`${h3} logo`} className={img+" hover"} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className={projectCardButtonsContainer}>
          <a className={projectCardLink} href = {githublink} target = "_blank">
              Github
          </a>
          <a className={projectCardLink} href = {demolink} target = "_blank">
              Demo
          </a>
      </div>
    </div>
  );
};

export default ProjectCard;
