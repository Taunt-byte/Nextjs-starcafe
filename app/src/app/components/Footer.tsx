import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-3">
        <div className="container mx-auto flex flex-col sm:flex-row items-center">
          <div className="ml-2 mb-4  p-1 sm:mb-0">
            <Image
              src="https://cdn.discordapp.com/attachments/1049460715553042564/1098762794213572659/image.png"
              width={50}
              height={50}
              alt="StarCafe-Logo"
              className="rounded-md"
            />
          </div>
          <p className="text-slate-100 text-center sm:text-left">
            Todos os direitos reservados. &copy; {currentYear}. Desenvolvido
            pela StarCafe.
          </p>
        </div>
      </footer>
    </div>
  );
}
