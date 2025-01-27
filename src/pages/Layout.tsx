import Hero from "../components/hero"
import ListMarket from "../components/listmarket"
import NavMobile from "../components/navMobile"
import Stats from "../components/stats"
import { darkkMode } from "../style"

const Layout = () => {
   return (
      <div
         className={`min-h-screen bg-white text-black ${darkkMode.bgDark} overflow-x-hidden`}
      >
         <div className="w-full max-w-[1200px] min-w-[320px] mx-auto pb-5">
            <NavMobile />
            <div className="pl-4">
               <Hero />
            </div>
            <div className="px-6 lg:px-8">
               <Stats />
               <ListMarket />
            </div>
         </div>
      </div>
   )
}

export default Layout