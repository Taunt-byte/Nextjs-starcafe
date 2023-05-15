import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500 text-white top-0 w-full shadow-xl transition-all">
        <div className="max-w-7xl mx-auto pl-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <h1 className="text-3xl text-slate-100 font-semibold">
                StarCafe
              </h1>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/" passHref legacyBehavior>
                <a className="hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium">
                  Início
                </a>
              </Link>
              <Link href="/Sobre" passHref legacyBehavior>
                <a className="hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium">
                  Sobre
                </a>
              </Link>
              <Link href="/Contato" passHref legacyBehavior>
                <a className="hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium">
                  Contato
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
