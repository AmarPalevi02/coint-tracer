import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MenuProps } from "./Menu";
import { useState } from 'react'
import Search from "./Search";

const TopSide = ({ setIsOpen }: MenuProps) => {
   const [serchActive, setSerchActive] = useState<boolean>(false)

   return (
      <div className="flex items-center justify-between py-5 px-4 ">
         <div className="flex  items-center gap-2 ">
            <IoIosSearch className="text-2xl font-bold" />
            <Search
               className="w-full rounded-md bg-gray-100 dark:bg-[#222223]  border-none focus:ring-0 focus:outline-none font-semibold"
               onFocus={() => setSerchActive(true)}
               onBlur={() => setSerchActive(false)}
            />
         </div>

         {serchActive ? (
            <p
               className="text-lg font-bold text-green-600 hover:underline"
               onClick={() => {
                  setSerchActive(false)
               }}
            >
               Batal
            </p>
         ) : (
            <button
               className={` text-xl font-bold text-black w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center dark:bg-[#222223] dark:border-[1px] dark:border-gray-600 dark:text-white`}
               onClick={() => setIsOpen(false)}
            >
               <IoClose />
            </button>
         )}
      </div >
   )
}

export default TopSide