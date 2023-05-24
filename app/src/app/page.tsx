import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Produto from "./components/Produto";
import CommentPage from "./components/Comentarios";
import Image from "next/image";

const Home = () => {
  const comments = [
    {
      name: "Laura Mendes",
      timestamp: getTimestamp(60.3), // 1 hora atrás
      text: "Adorei a variedade de cafés disponíveis no StarCafe! Excelente qualidade e atendimento.",
    },
    {
      name: "Rafael Santos",
      timestamp: getTimestamp(30.1), // 30 minutos atrás
      text: "Os cafés orgânicos são os meus favoritos! Sempre compro aqui e nunca me decepciono.",
    },
    {
      name: "Carolina Oliveira",
      timestamp: getTimestamp(15.2), // 15 minutos atrás
      text: "O StarCafe tem os melhores cafés premiados do mercado! Recomendo a todos os amantes de café.",
    },
  ];

  function getTimestamp(minutesAgo: number) {
    const currentTime = new Date();
    const timestamp = new Date(currentTime.getTime() - minutesAgo * 60000); // Converter minutos em milissegundos
    return timestamp.toLocaleString();
  }

  return (
    <div>
      <Navbar />
      <div className="p-4 text-center text-white bg-black">
        <h1 className="text-3xl font-bold mb-4">
          Bem-vindo ao <span className="text-red-800">StarCafe</span>!
        </h1>
        <div className="flex justify-center">
          <Image
            src="https://cdn.discordapp.com/attachments/1049460715553042564/1098762794213572659/image.png"
            width={350}
            height={350}
            alt="StarCafe-Logo"
            className="rounded-md text-center"
          />
        </div>
        <p className="text-base p-2">
          Nós levamos o mundo do café especial até você! Dos orgânicos aos
          descafeinados, dos raros aos premiados, aqui você sempre encontra as
          melhores marcas.
        </p>
      </div>

      <Produto />
      <div>
        <h1 className="text-3xl font-bold text-center p-2">
          Comentários recentes
        </h1>
        {comments.map((comment, index) => (
          <div key={index} className="p-4">
            <p className="border border-gray-300 p-4 rounded mb-4">
              <strong>{comment.name}</strong> - {comment.timestamp}:{" "}
              {comment.text}
            </p>
          </div>
        ))}
      </div>
      <CommentPage />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
