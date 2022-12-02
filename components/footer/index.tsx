import Link from "next/link";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import styles from "./footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/gelvht">
        <AiFillGithub size={30} className={styles.footer__icon} />
      </Link>
      <Link href="https://www.linkedin.com/in/gelareh-vahdat-69b487202/">
        <AiFillLinkedin size={30} className={styles.footer__icon} />
      </Link>
    </footer>
  );
};

export default Footer;
