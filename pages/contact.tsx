import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";

import styles from "../styles/Contact.module.scss";

const Contact = (): JSX.Element => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.contact}
    >
      <button className={styles.contact__cv}>
        <a
          href="../public/GelarehVahdatResume.pdf"
          download
          className={styles.contact__cv_link}
        >
          <MdFileDownload size={20} className={styles.cv__icon} />
          Download CV
        </a>
      </button>
      <div className={styles.contact__text}>
        <div className={styles.info}>
          <span className={styles.info_title}>PHONE NUMBER:</span>
          <span> (98)9355184237</span>
        </div>
        <div className={styles.info}>
          <span className={styles.info_title}>EMAIL: </span>
          <span> gelvht@gmail.com</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
