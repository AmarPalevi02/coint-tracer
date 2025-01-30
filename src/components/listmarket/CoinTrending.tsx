import { useEffect, useState } from 'react'
import { getDatas } from '../../utils/fetch'

const CoinTrending = () => {
   const [coinTrending, setCoinTrending] = useState<[]>([])

   const fetchTrending = async () => {
      try {
         const response = await getDatas({ resourch: 'search/trending' })

         const limitedData = response?.data.coins.slice(0, 5)

         setCoinTrending(limitedData)
      } catch (error) {
         console.error("Failed to fetch coins:", error);
      }
   }

   useEffect(() => {
      fetchTrending()
   }, [])
   return (
      <div>
         {coinTrending.map((coin: any, index) => (
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
                     {coin.market_cap_change_percentage_24h?.toFixed(2) || "-"}%
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default CoinTrending