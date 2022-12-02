import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./project.module.scss";
import { IProjectProps } from "./projectType";

const Project = ({ image, name, id, showDetail, hide }: IProjectProps) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${styles.project} ${hide && styles.project__hide}`}
      onClick={() => showDetail(id)}
    >
      <div className={styles.project__image}>
        <Image
          src={image}
          alt={name}
          width={190}
          height={170}
          loading="eager"
          priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles.project__name}>{name}</div>
    </motion.div>
  );
};

export default Project;
