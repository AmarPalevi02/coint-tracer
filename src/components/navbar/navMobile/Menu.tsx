import { IoClose } from "react-icons/io5";

interface MenuProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
   return (
      <div
         className={`fixed top-0 right-0 h-screen w-full bg-gray-100 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <button
            className="absolute top-4 right-4 text-2xl font-bold text-black w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
         >
            <IoClose />
         </button>
         <ul className="p-4 space-y-4">
            <li className="text-lg font-semibold">Home</li>
            <li className="text-lg font-semibold">About</li>
            <li className="text-lg font-semibold">Services</li>
            <li className="text-lg font-semibold">Contact</li>
         </ul>
      </div>
   )
}

export default Menu