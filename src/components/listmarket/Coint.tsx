import { bitcoin, eth } from "../../assets"

const Coint = () => {
   return (
      <div className="flex justify-between">
         <div className="flex items-center gap-2">
            <img
               className="w-8 h-8"
               src={bitcoin}
               alt="coint logo"
            />
            <div className="">
               <p className="text-lg font-semibold">BTC</p>
               <p className="text-gray-500 text-sm">Bitcoin</p>
            </div>
         </div>

         <div className="text-end">
            <p>$ 106.133,11</p>
            <div className="text-[#01bc8d]">+0,82%</div>
         </div>
      </div>
   )
}

export default Coint