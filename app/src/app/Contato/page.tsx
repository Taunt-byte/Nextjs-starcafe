import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-8">
          Bem-vindo à página de Contato!
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">
            Entre em contato conosco para quaisquer perguntas ou solicitações.
          </p>
            <form className="w-1/3">
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  id="message"
                  name="message"
                  rows={4}
                  required
                />
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
