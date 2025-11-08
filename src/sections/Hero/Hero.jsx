import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/avatar-github.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import {lastName,name} from "../../contstants.js";

const { colorModeContainer, hero, info, colorMode, container,description } = styles;

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={container}>
      <div className={colorModeContainer}>
        <img className={hero} src={heroImg} alt="My profile picture" />
        <img
          className={colorMode}
          onClick={toggleTheme}
          src={themeIcon}
          alt="color mode icon"
        />
      </div>
      <div className={info}>
        <h1>
          {name} <br /> {lastName}
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="" target="_blank">
            <img src={githubIcon} alt="Twitter icon" />
          </a>
          <a href="" target="_blank">
            <img src={linkedinIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={description}>With a passion for developing modern web apps for commercial businesses.</p>
        <a href={CV} download>
          <button className="btn hover">Get CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
