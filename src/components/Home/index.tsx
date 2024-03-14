import Link from "next/link";
import { FotoHome } from "../FotoHome";

export const HomeComponent = () => {
  return (
    <div className="w-full flex justify-center bg-[#362426] py-5 sm:flex md:flex">
      <div className="w-full flex-col justify-around sm:flex md:flex-row">
        <div className="hidden sm:flex md:flex">
          <FotoHome href="/empada.webp" />
        </div>
        <div className="flex flex-col text-white justify-center items-center ">
            <p className="text-[#ff9600] text-lg">Bem vindo ao seu restaurante.</p>
            <h1 className="text-[80px] font-bold text-center">Pé na <span className="text-[#ff9600]">Lapa</span></h1>
            <div className="bg-[#ff9600] rounded-md p-2 shadow-md mb-2 shadow-black/50" ><p>Bar - Restaurante</p></div>
            <p className="text-white text-lg">Desde 2017</p>
            <Link href='/' className="bg-[#ff9600] p-1 shadow-lg shadow-black/50"><p className="w-full flex h-full bg-white text-black text-lg p-1">Ver menu</p></Link>
        </div>
        <div className="hidden sm:flex md:flex">
          <FotoHome href="/drink.jpg" />
        </div>
      </div>
    </div>
  );
};
