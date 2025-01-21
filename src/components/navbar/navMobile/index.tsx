import { useState } from 'react';
import { logo } from '../../../assets'
import Menu from './Menu';
import Toggle from './Toggle';

const NavMobile = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   return (
      <nav className="w-full py-4 px-4 flex justify-between items-center">
         <img
            src={logo}
            alt="logo"
            className='h-9 '
         />
         <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
         <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
   )
}

export default NavMobile