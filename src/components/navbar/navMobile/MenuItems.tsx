import ToggleTheme from "../../theme/ToggleTheme"

const MenuItems = () => {
   return (
      <ul className="p-4 space-y-4 mt-12">
         <li className="flex justify-between">
            <p>Tema</p>
            <ToggleTheme />
         </li>
      </ul>
   )
}

export default MenuItems