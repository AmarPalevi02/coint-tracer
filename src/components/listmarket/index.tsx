import { useState } from "react";
import CardListMarket from "./CardListMarket"
import Header from "./Header"
import CoinTrending from "./CoinTrending";
import CoinBaseSaler from "./CoinBaseSaler";
import CoinListing from "./CoinListing";

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
         title: "Listing Koin ",
         component: <CoinListing />
      },
   ];

   const handleNext = () => {
      setCurrentCardIndex((prevIndex) =>
         prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
   };
   return (

      <div className="mt-12 md:mt-24">
         <Header />
         <div className="block md:hidden">
            <CardListMarket title={cards[currentCardIndex]?.title}>
               {cards[currentCardIndex]?.component || <p>Loading data...</p>}
            </CardListMarket>
            <div className="flex  mt-4 justify-end">
               <button
                  className="px-4 py-2 bg-[#01bc8d] text-white rounded-md"
                  onClick={handleNext}
               >
                  Next
               </button>
            </div>
         </div>

         <div className="hidden md:grid md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
               <CardListMarket key={index} title={card.title}>
                  {card.component || <p>Loading data...</p>}
               </CardListMarket>
            ))}
         </div>
      </div>
   )
}

export default ListMarket