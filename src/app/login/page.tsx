import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import LoginForm from "./components/LoginForm";
import Head from "next/head";

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
