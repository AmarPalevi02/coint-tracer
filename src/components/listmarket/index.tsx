import { useState } from "react";
import CardListMarket from "./CardListMarket"
import Header from "./Header"
import CoinTrending from "./CoinTrending";
import CoinBaseSaler from "./CoinBaseSaler";
import CoinListing from "./CoinListing";
import { motion, AnimatePresence } from "framer-motion";

const ListMarket = () => {
   const [currentCardIndex, setCurrentCardIndex] = useState(0);

   const cards = [
      { title: "Base Coin", component: <CoinBaseSaler /> },
      { title: "Trending", component: < CoinTrending /> },
      { title: "Listing Koin ", component: <CoinListing /> },
   ];

   const handleNext = () => {
      setCurrentCardIndex((prevIndex) =>
         prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
   };
   return (
      <div className="mt-12 md:mt-24">
         <Header />
         <div className="block md:hidden flex flex-col items-center relative">
            <div className="relative w-full min-h-[450px] flex items-center justify-center overflow-hidden">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={currentCardIndex}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -50 }}
                     transition={{ duration: 0.4, ease: "easeInOut" }}
                     className="absolute w-full"
                  >
                     <CardListMarket title={cards[currentCardIndex]?.title}>
                        {cards[currentCardIndex]?.component || <p>Loading data...</p>}
                     </CardListMarket>
                  </motion.div>
               </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-end w-full pr-4">
               <button
                  className="px-4 py-2 bg-[#01bc8d] text-white rounded-md "
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