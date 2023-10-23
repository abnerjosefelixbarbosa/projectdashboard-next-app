import Link from "next/link";
import styles from "./page.module.css";

const NavBar = () => {
  return (
      <ul className={styles.ul}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li className={styles.right}>
          <Link href="/login">login</Link>
        </li>
      </ul>
  );
};

const Home = () => {
  return (
    <div className={styles.body}>
      <header>
        <NavBar />
      </header>
      <main></main>
    </div>
  );
};

export default Home;
