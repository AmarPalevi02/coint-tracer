export const trendingParser = (data: any) => {
   return data.coins.map((item: any) => ({
     image: item.coin.image,
     symbol: item.coin.symbol.toUpperCase(),
     name: item.coin.name,
     high_24h: "-",
     market_cap_change_percentage_24h: "-",
   }));
 };
 
 export const defaultParser = (data: any) => {
   return data.map((item: any) => ({
     image: item.image,
     symbol: item.symbol.toUpperCase(),
     name: item.name,
     high_24h: item.high_24h,
     market_cap_change_percentage_24h: item.market_cap_change_percentage_24h,
   }));
 };
 