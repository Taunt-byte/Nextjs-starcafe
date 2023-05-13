import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen">
        <h1 className="text-3xl font-bold text-center">Hello world!</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}
