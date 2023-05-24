import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="h-14 top-0 w-full shadow-xl transition-all">
        <div className="max-w-7xl mx-auto pl-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <Link
                href={"/"}
                className="text-3xl text-slate-900 font-semibold"
              >
                StarCafe
              </Link>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Link
                href={"/"}
                passHref
                className="hover:text-red-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Início
              </Link>
              <Link
                href={"/Sobre"}
                passHref
                className="hover:text-red-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre
              </Link>
              <Link
                href={"/Contato"}
                className="hover:text-red-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
