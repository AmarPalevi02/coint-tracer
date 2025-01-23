import Hero from "../components/hero"
import NavMobile from "../components/navMobile"
import { darkkMode } from "../style"

const Layout = () => {
   return (
      <div
         className={`min-h-screen bg-white text-black ${darkkMode.bgDark} overflow-x-hidden`}
      >
         <div className="w-full max-w-[1200px] min-w-[320px] mx-auto">
            <NavMobile />
            <div className="pl-4">
               <Hero />
            </div>
         </div>
      </div>
   )
}

export default Layout