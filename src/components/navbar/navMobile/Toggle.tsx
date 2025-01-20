import { RiMenu2Fill } from "react-icons/ri";

interface ToggleProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Toggle = ({ isOpen, setIsOpen }: ToggleProps) => {
   return (
      <>
         {!isOpen && (
            <RiMenu2Fill
               className='text-2xl font-bold text-black w-9 h-9 bg-gray-100 py-2 rounded-full'
               onClick={() => setIsOpen(!isOpen)}
            />
         )}
      </>
   )
}

export default Toggle