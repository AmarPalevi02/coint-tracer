import { IoClose } from "react-icons/io5";
import MenuItems from "./MenuItems";
import { darkkMode } from "../../../style";

interface MenuProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
   return (
      <div
         className={`fixed top-0 right-0 h-screen w-full bg-gray-100 shadow-lg transform transition-transform duration-300 dark:bg-[#222223] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button
            className={`absolute top-4 right-4 text-2xl font-bold text-black w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center dark:bg-[#222223] dark:border-[1px] dark:border-gray-600 dark:text-white`}
            onClick={() => setIsOpen(false)}
         >
            <IoClose />
         </button>
         <MenuItems />
      </div>
   )
}

export default Menu