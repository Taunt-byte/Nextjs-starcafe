import Link from "next/link";

export default function Navbar() {
  return (
    <header className="pb-16">
      <nav className="bg-yellow-900 text-black  top-0 w-full shadow-xl transition-all">
        <div className="max-w-7xl mx-auto pl-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <h1 className="text-3xl text-slate-100 font-semibold">
                StarCafe
              </h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/" className="hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium" passHref>
                Início
              </Link>
              <Link href="/Sobre" className="hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium"  passHref>
                Sobre
              </Link>
              <Link href="/Contato" className="hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium"  passHref>
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
