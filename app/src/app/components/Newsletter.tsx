export default function Newsletter() {
  return (
    <div className="bottom-0 w-full items-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-4">
        <div>
          <h1 className="text-2xl font-bold">Assine nossa Newsletter</h1>
          <p>e receba as últimas promoções direto no seu e-mail</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col sm:flex-row">
            <input
              className="p-2 rounded-md bg-white placeholder-gray-400"
              type="email"
              placeholder="E-mail"
            />
            <button className="ml-0 sm:ml-2 px-3 py-2 bg-white text-black rounded-md font-medium text-sm">
              Assinar
            </button>
          </div>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>Eu concordo com a Política de Privacidade.</span>
          </label>
        </div>
      </div>
    </div>
  );
}
