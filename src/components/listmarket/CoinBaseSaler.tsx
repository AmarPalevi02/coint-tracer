import { useEffect, useState } from 'react'
import { getDatas } from '../../utils/fetch';

const CoinBaseSaler = () => {
   const [baseSaler, setBaseSeler] = useState<[]>([])

   const fetchBaseSeler = async () => {
      try {
         const response = await getDatas({ resourch: 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1' });

         const limitedData = response?.data.slice(0, 5)
         setBaseSeler(limitedData)
      } catch (error) {
         console.error("Failed to fetch coins:", error);
      }
   }

   useEffect(() => {
      fetchBaseSeler()
   }, [])
   
   return (
      <div>
         {baseSaler.map((coin: any, index) => (
            <div key={index} className="flex justify-between mb-8">
               <div className="flex items-center gap-2">
                  <img
                     className="w-8 h-8"
                     src={coin.image || ""}
                     alt="coin logo"
                  />
                  <div>
                     <p className="text-lg font-semibold">{coin.symbol}</p>
                     <p className="text-gray-500 text-sm">{coin.name}</p>
                  </div>
               </div>
               <div className="text-end">
                  <p>$ {coin.high_24h || "-"}</p>
                  <div className="text-[#01bc8d]">
                    + {coin.market_cap_change_percentage_24h?.toFixed(2) || "-"}%
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}
export default CoinBaseSaler