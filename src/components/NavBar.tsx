import Link from "next/link";

const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li className="login">
            <Link href="/login">login</Link>
          </li>
        </ul>
      </nav>
    );
};

export default NavBar