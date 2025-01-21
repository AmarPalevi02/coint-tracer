import MenuItems from "./MenuItems";
import TopSide from "./TopSide";

export interface MenuProps {
   isOpen?: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
   return (
      <div
         className={`fixed top-0 right-0 h-screen w-full bg-gray-100 shadow-lg transform transition-transform duration-300 dark:bg-[#222223] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <TopSide setIsOpen={setIsOpen} />
         <MenuItems />
      </div>
   )
}

export default Menu