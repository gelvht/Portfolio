import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./header.module.scss";

const Header = () => {
  const Router = useRouter();
  const navRef = useRef<HTMLElement>(null);

  const toggleNavBar = () => {
    navRef.current?.classList.toggle(`${styles.navbar__responsive}`);
  };

  return (
    <header className={styles.header}>
      <GiHamburgerMenu
        size={30}
        onClick={toggleNavBar}
        className={styles.navbar__burger}
      />
      <nav ref={navRef} className={styles.header__navbar}>
        <span
          className={`${styles.navbar__burger_close}`}
          onClick={toggleNavBar}
        >
          &times;
        </span>
        <Link
          href="/about"
          className={`${styles.navbar__item} ${
            Router.pathname === "/about" && styles.navbar__item__active
          }`}
          onClick={toggleNavBar}
        >
          About
        </Link>
        <Link
          href="/skills"
          className={`${styles.navbar__item} ${
            Router.pathname === "/skills" && styles.navbar__item__active
          }`}
          onClick={toggleNavBar}
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className={`${styles.navbar__item} ${
            Router.pathname === "/projects" && styles.navbar__item__active
          }`}
          onClick={toggleNavBar}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${styles.navbar__item} ${
            Router.pathname === "/contact" && styles.navbar__item__active
          }`}
          onClick={toggleNavBar}
        >
          Contact
        </Link>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
