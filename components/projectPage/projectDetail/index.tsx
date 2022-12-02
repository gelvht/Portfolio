import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";

import styles from "./detail.module.scss";
import { IDetailProps } from "./detailType";

const Detail = ({ project, hideDetail }: IDetailProps) => {
  return (
    <div className={styles.detail}>
      <Image
        src={project.image}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        loading="eager"
        priority={true}
        className={styles.detail__image}
      />
      <div className={styles.detail__info}>
        <BiArrowBack
          size={30}
          className={styles.text__arrow}
          onClick={hideDetail}
        />

        <div className={styles.detail__info_text}>
          <h2>{project.name}</h2>
          <span>
            <p className={styles.text__title}>technologies: </p>
            {project.technologies}
          </span>
        </div>

        <Link href={project.link} className={styles.detail__info_link}>
          <FiGithub size={20} />
          <span>CODE</span>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
