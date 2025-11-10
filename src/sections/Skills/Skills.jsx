import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";
import SkillList from "../../common/SkillList";
const { container, skillList } = styles;

const Skills = () => {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme == "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section className={container} id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className={skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="Vite" />
      </div>
      <hr />
      <div className={skillList}>
        <SkillList src={checkMarkIcon} skill="Nuxt 3" />
        <SkillList src={checkMarkIcon} skill="RESTful API" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Copilot" />
      </div>
    </section>
  );
};

export default Skills;
