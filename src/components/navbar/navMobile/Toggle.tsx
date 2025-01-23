import { RiMenu2Fill } from "react-icons/ri";
import { darkkMode } from "../../../style";
import { IoIosSearch } from "react-icons/io";

interface ToggleProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Toggle = ({ isOpen, setIsOpen }: ToggleProps) => {
   return (
      <div className="">
         {!isOpen && (
            <div className="flex items-center gap-2">
               <IoIosSearch
                  className={`text-2xl font-bold text-black w-9 h-9 bg-gray-100 py-2 rounded-full ${darkkMode.bgDark} dark:bg-[#1b1b1b] md:hidden`}
                  onClick={() => setIsOpen(!isOpen)}
               />
               <RiMenu2Fill
                  className={`text-2xl font-bold text-black w-9 h-9 bg-gray-100 py-2 rounded-full ${darkkMode.bgDark} dark:bg-[#1b1b1b]`}
                  onClick={() => setIsOpen(!isOpen)}
               />
            </div>
         )}
      </div>
   )
}

export default Toggle