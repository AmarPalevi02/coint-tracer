import { ReactNode } from 'react';

type CardListMarketProps = {
   title?: string
   children: ReactNode
}

const CardListMarket = ({ title, children }: CardListMarketProps) => {
   return (
      <div className='mt-8 p-4 shadow-md rounded-md dark:shadow-md dark:shadow-gray-900'>
         <h2 className='text-xl font-semibold border-l-4 pl-3 border-l-[#01bc8d] mb-4'>{title}</h2>
         <div className="">
            {children}
         </div>
      </div>
   )
}

export default CardListMarket
