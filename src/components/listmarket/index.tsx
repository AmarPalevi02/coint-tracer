import { useState } from "react";
import CardListMarket from "./CardListMarket"
import Coint from "./Coint"
import Header from "./Header"
import { defaultParser, trendingParser } from "./parser";
import CoinBaseSaler from "./coinBaseSaler";

const ListMarket = () => {
   const [currentCardIndex, setCurrentCardIndex] = useState(0);

   const cards = [
      {
         // title: "Best Seller",
         // resource: "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1",
         // parser: defaultParser,
         component:<CoinBaseSaler />
      },
      {
         title: "Trending Coins",
         resource: "/search/trending",
         parser: trendingParser,
      },
      {
         title: "Top Gainers",
         resource: "coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=10&page=1",
      },
   ];

   // const handleNext = () => {
   //    setCurrentCardIndex((prevIndex) =>
   //       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
   //    );
   // };


   // const handlePrevious = () => {
   //    setCurrentCardIndex((prevIndex) =>
   //       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
   //    );
   // };

   const handleNext = () => {
      setCurrentCardIndex((prevIndex) =>
         prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
   };

   const handlePrevious = () => {
      setCurrentCardIndex((prevIndex) =>
         prevIndex === 0 ? cards.length - 1 : prevIndex - 1
      );
   };
   return (
      // <div className="mt-12 md:mt-24">
      //    <Header />
      //    <CardListMarket title="Best Seller">
      //       <Coint resource="coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1" limit={5} />
      //    </CardListMarket>
      // </div>


      // <div className="mt-12 md:mt-24">
      //    <Header />
      //    {/* Mobile View: Show One Card */}
      //    <div className="block md:hidden">
      //       <CardListMarket title={cards[currentCardIndex].title}>
      //          <Coint resource={cards[currentCardIndex].resource} limit={5} />
      //       </CardListMarket>
      //       <div className="flex justify-between mt-4">
      //          <button
      //             className="px-4 py-2 bg-gray-200 rounded-md"
      //             onClick={handlePrevious}
      //          >
      //             Previous
      //          </button>
      //          <button
      //             className="px-4 py-2 bg-[#01bc8d] text-white rounded-md"
      //             onClick={handleNext}
      //          >
      //             Next
      //          </button>
      //       </div>
      //    </div>

      //    {/* Desktop View: Show All Cards */}
      //    <div className="hidden md:grid md:grid-cols-3 gap-4">
      //       {cards.map((card, index) => (
      //          <CardListMarket key={index} title={card.title}>
      //             <Coint resource={card.resource} limit={5} />
      //          </CardListMarket>
      //       ))}
      //    </div>
      // </div>

      <div className="mt-12 md:mt-24">
         <Header />
         {/* Mobile View: Show One Card */}
         <div className="block md:hidden">
            <CardListMarket title={"Base Coin"}>
               {/* <Coint
                  resource={cards[currentCardIndex].resource}
                  limit={5}
                  parser={cards[currentCardIndex].parser}
               /> */}
               <CoinBaseSaler />
            </CardListMarket>
            <div className="flex justify-between mt-4">
               <button
                  className="px-4 py-2 bg-gray-200 rounded-md"
                  onClick={handlePrevious}
               >
                  Previous
               </button>
               <button
                  className="px-4 py-2 bg-[#01bc8d] text-white rounded-md"
                  onClick={handleNext}
               >
                  Next
               </button>
            </div>
         </div>

         {/* Desktop View: Show All Cards */}
         <div className="hidden md:grid md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
               <CardListMarket key={index} title={card.title}>
                  <Coint
                     resource={card.resource}
                     limit={5}
                     parser={card.parser}
                  />
               </CardListMarket>
            ))}
         </div>
      </div>
   )
}

export default ListMarket