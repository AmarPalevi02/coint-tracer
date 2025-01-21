import NavMobile from "../components/navbar/navMobile"
import { darkkMode } from "../style"

const Layout = () => {
   return (
      <div className={`min-h-screen bg-white text-black ${darkkMode.bgDark}`}>
         <NavMobile />
         <div className="p-4">

         </div>
      </div>
   )
}

export default Layout