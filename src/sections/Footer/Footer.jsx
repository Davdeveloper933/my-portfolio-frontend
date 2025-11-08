import styles from "./FooterStyles.module.css";
import {lastName,name} from "../../contstants.js";

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} {name} {lastName}. <br />
        All rights reserved
      </p>
    </section>
  );
};

export default Footer;
