import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../styles/About.module.scss";

import profileImage from "../public/image.png";
import HomeText from "../components/homePage";

const About = (): JSX.Element => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.about}
    >
      <div>
        <Image
          src={profileImage}
          width={400}
          height={400}
          alt="profileImage"
          loading="eager"
          priority
        />
      </div>
      <HomeText />
    </motion.div>
  );
};

export default About;
