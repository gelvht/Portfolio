import { useState, useRef } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import styles from "../styles/Projects.module.scss";
import { IData } from "../data/dataType";
import { projectList } from "../data/data";

import { Project, Detail } from "../components/projectPage";

const Projects = (): JSX.Element => {
  const [hide, setHide] = useState<boolean>(false);
  const [detail, setDetail] = useState<Array<IData>>([]);
  const projectsRef = useRef<HTMLDivElement>(null);

  const showDetailHandler = (projectId?: number) => {
    setHide(!hide);
    setDetail(projectList.filter((project) => project.id === projectId));
  };
  const scrollHandler = (scrollOffset: number) => {
    projectsRef.current!.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__content}>
        <div ref={projectsRef} className={styles.projects__content_list}>
          {projectList.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              name={project.name}
              id={project.id}
              showDetail={showDetailHandler}
              hide={hide}
            />
          ))}
        </div>
        {!hide && (
          <div className={styles.projects__content_arrows}>
            <FaArrowAltCircleLeft
              size={25}
              onClick={() => scrollHandler(-200)}
            />
            <FaArrowAltCircleRight
              size={25}
              onClick={() => scrollHandler(200)}
            />
          </div>
        )}
        {hide && <Detail project={detail[0]} hideDetail={showDetailHandler} />}
      </div>
    </div>
  );
};

export default Projects;
