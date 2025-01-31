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
         {coinTrending.map((coin: any, index) => {
            const coinData = coin.item
            const market = coin.item.data

            return (
               <div key={index} className="flex justify-between mb-8">
                  <div className="flex items-center gap-2">
                     <img
                        className="w-8 h-8"
                        src={coinData.thumb || ""}
                        alt="coin logo"
                     />
                     <div>
                        <p className="text-lg font-semibold">{coinData.symbol}</p>
                        <p className="text-gray-500 text-sm">{coinData.name}</p>
                     </div>
                  </div>
                  <div className="text-end">
                     <p>{market.market_cap || "-"}</p>
                     <div className="text-[#01bc8d]">
                       + {coinData.score?.toFixed(2) || "-"}%
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   )
}

export default CoinTrending