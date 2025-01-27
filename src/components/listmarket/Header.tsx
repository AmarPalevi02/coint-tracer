import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
   return (
      <div className="lg:flex md:justify-between md:items-center">
         <h1 className="text-2xl font-semibold md:text-3xl md:font-bold">Pasar Kripto Hari Ini</h1>
         <p className="text-[#01bc8d] mt-2 flex items-center gap-1">
            Lihat semua 700+ koin
            <IoIosArrowRoundForward className="text-lg font-bold" />
         </p>
      </div>
   )
}

export default Header