import { useEffect, useState } from "react"
import { getDatas } from "../../utils/fetch"

// type CointProps = {
//    resource: string;
//    limit?: number;
// };

type CointProps = {
   resource: string;
   limit?: number;
   parser?: (data: any) => any[]; 
};

const Coint = ({ resource, limit = 5, parser }: CointProps) => {
   const [coins, setCoins] = useState<[]>([]);
   const [trending, setTrending] = useState<[]>([])

   // const fetchCoins = async () => {
   //    try {
   //       const response = await getDatas({ resourch: resource });
   //       const data = response?.data?.slice(0, limit);
   //       setCoins(data || []);
   //    } catch (error) {
   //       console.error(error);
   //    }
   // };
   

   const fetchCoins = async () => {
      try {
         const response = await getDatas({ resourch: resource });

         // Jika ada parser, gunakan untuk memproses data; jika tidak, gunakan langsung
         const parsedData = parser ? parser(response.data) : response.data;

         const limitedData = parsedData.slice(0, limit);
         setCoins(limitedData);
      } catch (error) {
         console.error("Failed to fetch coins:", error);
      }
   };

   const fetchBaseSeler = async () => {
      try {
         const response = await getDatas({ resourch: 'search/trending' });

         // Jika ada parser, gunakan untuk memproses data; jika tidak, gunakan langsung

         const limitedData = response?.data.coins.slice(0, 5)
         setTrending(limitedData)
      } catch (error) {
         console.error("Failed to fetch coins:", error);
      }
   }

   const fetchTrending = async () => {
      try {
         const response = await getDatas({ resourch: 'search/trending' });

         // Jika ada parser, gunakan untuk memproses data; jika tidak, gunakan langsung

         const limitedData = response?.data.coins.slice(0, 5)
         setTrending(limitedData)
      } catch (error) {
         console.error("Failed to fetch coins:", error);
      }
   }

   // Memastikan fetch data setiap kali resource berubah
   // useEffect(() => {
   //    fetchCoins();
   // }, [resource, limit]);

   useEffect(() => {
      fetchCoins();
      fetchTrending()
   }, [resource, limit, parser]);

   // console.log(bestseller)
   return (
      // <div className="">
      //    {bestseller.map((coin) => {
      //       return (
      //          <div className="flex justify-between mb-8">
      //             <div className="flex items-center gap-2">
      //                <img
      //                   className="w-8 h-8"
      //                   src={coin.image}
      //                   alt="coint logo"
      //                />
      //                <div className="">
      //                   <p className="text-lg font-semibold">{coin.symbol}</p>
      //                   <p className="text-gray-500 text-sm">{coin.name}</p>
      //                </div>
      //             </div>

      //             <div className="text-end">
      //                <p>$ {coin.high_24h}</p>
      //                <div className="text-[#01bc8d]">{coin.market_cap_change_percentage_24h}</div>
      //             </div>
      //          </div>
      //       )
      //    })}
      // </div>

      // <div>
      //    {coins.map((coin: any, index) => (
      //       <div key={index} className="flex justify-between mb-8">
      //          <div className="flex items-center gap-2">
      //             <img
      //                className="w-8 h-8"
      //                src={coin.image || ""}
      //                alt="coin logo"
      //             />
      //             <div>
      //                <p className="text-lg font-semibold">{coin.symbol}</p>
      //                <p className="text-gray-500 text-sm">{coin.name}</p>
      //             </div>
      //          </div>
      //          <div className="text-end">
      //             <p>$ {coin.high_24h || "-"}</p>
      //             <div className="text-[#01bc8d]">
      //                {coin.market_cap_change_percentage_24h?.toFixed(2) || "-"}%
      //             </div>
      //          </div>
      //       </div>
      //    ))}
      // </div>

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