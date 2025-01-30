import { useEffect, useState } from "react"
import { getDatas } from "../../utils/fetch"

type CointProps = {
   resource: string;
   limit?: number;
   parser?: (data: any) => any[];
};

const Coint = ({ resource, limit = 5, parser }: CointProps) => {
   const [coins, setCoins] = useState<[]>([]);


   const fetchCoins = async () => {
      try {
         const response = await getDatas({ resourch: resource });

         const parsedData = parser ? parser(response.data) : response.data;

         const limitedData = parsedData.slice(0, limit);
         setCoins(limitedData);
      } catch (error) {
         console.error("Failed to fetch coins:", error);
      }
   };

   useEffect(() => {
      fetchCoins();
   }, [resource, limit, parser]);

   return (
      <div>
         {coins.map((coin: any, index) => (
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

export default Coint