import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Login() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="center form-login-container">
          <div className="form-login">
            <div className="form-login-hearder"></div>
            <div className="form-login-body">
              <form>
                <div>
                  <label htmlFor="">Email:</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">Password:</label>
                  <input type="text" />
                </div>
                <div>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
            <div className="form-login-fooder"></div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
