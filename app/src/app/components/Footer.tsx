import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bottom-0 w-full items-center text-center">
      <div className="grid grid-cols-2 gap-4 bg-yellow-900 text-slate-50 p-4">
        <div>
          <h1 className="text-2xl font-bold">Assine nossa Newsletter</h1>
          <p>e receba as últimas promoções direto no seu e-mail</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <input
              className="p-2 rounded-md bg-white placeholder-gray-400"
              type="email"
              placeholder="E-mail"
            />
            <button className="ml-2 px-3 py-2 bg-white text-yellow-900 rounded-md font-medium text-sm">
              Assinar
            </button>
          </div>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Eu concordo com a Política de Privacidade.</span>
          </label>
        </div>
      </div>

      <footer className="bg-yellow-900 text-sm  py-3">
        <div className="container mx-auto flex items-center">
          <div className="ml-2">
            <Image
              src="https://cdn.discordapp.com/attachments/1049460715553042564/1098762794213572659/image.png"
              width={50}
              height={50}
              alt="StarCafe-Logo"
              className="rounded-md"
            />
          </div>
          <p className="text-slate-100 text-left pl-5">
            Todos os direitos reservados. &copy; {currentYear}. Desenvolvido
            pela Iniciativa.
          </p>
        </div>
      </footer>
    </div>
  );
}
