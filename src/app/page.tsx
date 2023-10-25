import Card from "@/components/Card";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Card>
        <div className="card-header">
          Bem vindo !
        </div>
        <div className="card-body">
          Para iniciar, faça login.
        </div>
        <div className="card-footer"></div>
      </Card>
      <Footer />
    </div>
  );
}
