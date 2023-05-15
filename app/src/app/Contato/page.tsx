import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="h-screen">
        <h1 className="text-3xl font-bold text-center">Bem vindo a pagina de Contato!</h1>
        <div>
            
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
