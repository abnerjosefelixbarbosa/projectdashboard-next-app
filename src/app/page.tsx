import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}