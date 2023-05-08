import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex">
        <nav className="fixed top-0 z-50 w-full bg-gray-800 dark:bg-gray-900 shadow-lg transition-all py-4 px-6">
            <div className="text-bold text-amber-500 font-xl">
                <h1>StarCafe</h1>
            </div>
            <div>
                <Link href={"/"}>Inicio</Link>
            </div>
        </nav>
        </div>
    )
}