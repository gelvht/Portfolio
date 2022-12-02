import { motion } from "framer-motion";

import styles from "../styles/Skills.module.scss";
import {
  ProgressStyle,
  ProgressContainerStyle,
  ProgressTitle,
} from "../components/progress";

const Skills = (): JSX.Element => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.skills}
    >
      <div className={styles.skill}>
        <ProgressTitle>HTML</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#716768" percentage="90%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>CSS</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#edce97" percentage="90%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Java Script</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#cc756d" percentage="80%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>React</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#523d3d" percentage="70%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Type Script</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#e0a262" percentage="40%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Next js</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#6a7870" percentage="30%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Redux</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#537c78" percentage="20%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Git</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#a01e12" percentage="40%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Photo shop</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#b7c2c7" percentage="80%" />
        </ProgressContainerStyle>
      </div>
      <div className={styles.skill}>
        <ProgressTitle>Figma</ProgressTitle>
        <ProgressContainerStyle>
          <ProgressStyle inputColor="#e2c1ba" percentage="40%" />
        </ProgressContainerStyle>
      </div>
    </motion.div>
  );
};

export default Skills;
