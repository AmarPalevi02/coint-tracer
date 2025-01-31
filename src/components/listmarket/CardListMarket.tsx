<<<<<<<<< Temporary merge branch 1
import { ReactNode } from 'react';

type CardListMarketProps = {
   title: string
=========
import { ReactNode} from 'react';

type CardListMarketProps = {
   title?: string
>>>>>>>>> Temporary merge branch 2
   children: ReactNode
}

const CardListMarket = ({ title, children }: CardListMarketProps) => {
   return (
<<<<<<<<< Temporary merge branch 1
      <div className='mt-8 p-4 shadow-md rounded-md'>
=========
      <div className='mt-8 p-4 shadow-md rounded-md dark:shadow-md dark:shadow-gray-900'>
>>>>>>>>> Temporary merge branch 2
         <h2 className='text-xl font-semibold border-l-4 pl-3 border-l-[#01bc8d] mb-4'>{title}</h2>
         <div className="">
            {children}
         </div>
      </div>
   )
}

export default CardListMarket