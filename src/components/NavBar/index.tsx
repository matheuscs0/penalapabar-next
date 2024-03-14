import Link from "next/link"

export const NavBar = () => {
    return(
        <nav className="w-full h-24 justify-center items-center px-3 fixed z-50 bg-[#0e1317]">
            <div className="w-full flex h-full justify-around items-center text-white">
                <div>
                    <h1 className="text-2xl font-bold sm:text-4xl md:text-4xl">Pé na <span className="text-[#ff9600]">Lapa</span></h1>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-3 text-sm sm:gap-10 md:gap-10 sm:text-md md:text-md lg:text-md">
                        <Link href='/' className="flex hover:text-white/65 transition-all duration-300 cursor-pointer">Home</Link>
                        <Link href='/cardapio' className="flex hover:text-white/65 transition-all duration-300 cursor-pointer">Cardápio</Link>
                        <Link href='/' className="flex hover:text-white/65 transition-all duration-300 cursor-pointer">Peça Online</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}