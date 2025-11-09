import styles from "./ProjectCardStyles.module.css"

const {projectCardButtonsContainer,projectCardLink,img,projectCardLogo,projectCardImgContainer} = styles;

const ProjectCard = ({ githublink,demolink, src, h3, p }) => {
  return (
    <div>
        <div className = {projectCardImgContainer}>
            <img src = {src} alt = {`${h3} logo`} className = {img + " hover"} />
        </div>
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className = {projectCardButtonsContainer}>
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
