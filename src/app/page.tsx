import Link from "next/link";
import styles from "./page.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li style={{float:"right"}}>
          <Link href="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main></main>
    </div>
  );
};

export default Home;
