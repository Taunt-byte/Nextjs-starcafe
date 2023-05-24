import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Sobre = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Sobre nós</h2>
          <p className="mb-4">
            Bem-vindo ao StarCafe, um lugar onde você pode desfrutar de
            deliciosas bebidas e refeições.
          </p>
          <p className="mb-4">
            Nossos baristas experientes preparam café de alta qualidade, chás
            aromáticos e smoothies refrescantes.
          </p>
          <p>
            Além disso, temos uma variedade de opções de alimentos, desde
            lanches saudáveis até sobremesas indulgentes.
          </p>
        </main>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Sobre;
