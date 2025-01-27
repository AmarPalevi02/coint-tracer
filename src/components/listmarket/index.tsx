import CardListMarket from "./CardListMarket"
import Coint from "./Coint"
import Header from "./Header"

const ListMarket = () => {
   return (
      <div className="mt-12 md:mt-24">
         <Header />
         <CardListMarket title="Daftar Teratas">
            <Coint />
         </CardListMarket>
      </div>
   )
}

export default ListMarket