import { motion } from "framer-motion";

import styles from "./homeText.module.scss";

const HomeText = (): JSX.Element => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.home}
    >
      <h1 className={styles.home__hey}>Hey,</h1>
      <p>
        I'm <span className={styles.home__name}>Gelareh Vahdat,</span>
      </p>
      <p className={styles.home__text}>
        I'm a Front-End developer located in Mashhad, Iran.
      </p>
      <p className={styles.home__text}>
        Well-organized person, problem-solver, and independent employee with
        great attention to detail.
      </p>
      <p className={styles.home__text}>
        I am always passionate about learning new technologies to improve my
        skills and be a good team member for the company I work for to have the
        best performance.
      </p>
    </motion.div>
  );
};
export default HomeText;
