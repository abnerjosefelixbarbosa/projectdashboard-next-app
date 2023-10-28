import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link"

export default function Login() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="login-container">
          <div className="login-header"></div>
          <div className="login-body">
            <form>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="center">
                <button type="submit" className="login-button">Login</button>
              </div>
              <br />
              <div>
                <Link href="/create-account">Não possui conta?</Link>
              </div>
            </form>
          </div>
          <div className="login-fooder"></div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
