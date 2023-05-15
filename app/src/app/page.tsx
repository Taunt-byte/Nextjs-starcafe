"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Produto from "./components/Produto";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4 divide-y divide-solid">
        <div className="pb-2">
          <h1 className="text-3xl font-bold text-2xl mb-4">
            Bem vindo ao <span className="text-sky-900">StarCafe</span> !
          </h1>
          <p className="text-2xl font-semibold">
            Nós levamos o mundo do café especial até você!<br></br> Dos
            orgânicos aos descafeinados, dos raros aos premiados, aqui você
            sempre encontra as melhores marcas.
          </p>
        </div>
      </div>
      <Produto></Produto>
      <div>
        <h1 className="text-3xl font-bold text-center">Comentarios</h1>
        <article>
          <time>Mar 10, 2020</time>
          <h2>Boost your conversion rate</h2>
          <p className="line-clamp-3">
            Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
            occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
            dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
            cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
            quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad
            sint voluptate sunt elit mollit officia ad enim sit consectetur
            enim.
          </p>
          <div>
            <img src="..." />
            Lindsay Walton
          </div>
        </article>
      </div>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}
