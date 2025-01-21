import ToggleTheme from "../../theme/ToggleTheme"

const MenuItems = () => {
   return (
      <ul className="p-4 space-y-4 mt-16">
         <li className="flex justify-between">
            <p className="text-lg font-semibold">Tema</p>
            <ToggleTheme />
         </li>
      </ul>
   )
}

export default MenuItems