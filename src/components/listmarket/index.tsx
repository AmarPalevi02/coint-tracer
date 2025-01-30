import { useState } from "react";
import CardListMarket from "./CardListMarket"
import Coint from "./Coint"
import Header from "./Header"
import CoinBaseSaler from "./coinBaseSaler";
import CoinTrending from "./CoinTrending";

const ListMarket = () => {
   const [currentCardIndex, setCurrentCardIndex] = useState(0);

   const cards = [
      {
         title: "Base Coin",
         component: <CoinBaseSaler />
      },
      {
         title: "Trending",
         component: < CoinTrending />
      },
      {
         title: "Top Gainers",
         // component: () => <p>Top gainers data</p>,
      },
   ];

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

      <div className="mt-12 md:mt-24">
         <Header />
         <div className="block md:hidden">
            <CardListMarket title={cards[currentCardIndex]?.title}>
               {cards[currentCardIndex]?.component || <p>Loading data...</p>}
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