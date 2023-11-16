import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <LoginForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
