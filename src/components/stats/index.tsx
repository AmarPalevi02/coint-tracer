import { useEffect, useState } from "react"

const Stats = () => {
   const [stats, setStats] = useState<{
      negara: number,
      investor: number,
      koin: number,
      volum: number
   }>({
      negara: 0,
      investor: 0,
      koin: 0,
      volum: 0.0
   })

   useEffect(() => {
      const interval = setInterval(() => {
         setStats((prevCount) => {
            if (prevCount.negara < 200 ||
               prevCount.investor < 30 ||
               prevCount.koin < 700 ||
               prevCount.volum < 3.38) {
               return {
                  ...prevCount,
                  negara: Math.min(prevCount.negara + 10, 200),
                  investor: Math.min(prevCount.investor + 1, 30),
                  koin: Math.min(prevCount.koin + 40, 700),
                  volum: parseFloat(
                     Math.min(prevCount.volum + 0.1, 3.38).toFixed(2)
                  )
               };
            } else {
               clearInterval(interval)
               return prevCount
            }
         })
      }, 90)

      return () => clearInterval(interval)
   }, [])
   return (
      <div className="grid grid-cols-2 gap-4 md:flex md:justify-between">
         <div className="md:border-r md:flex-1 md:pr-4 md:border-gray-200 md:dark:border-zinc-800">
            <h2 className="text-2xl font-bold">{stats.negara}+</h2>
            <p className="text-sm text-gray-500 mt-2 lg:text-md">Negara Terjangkau</p>
         </div>
         <div className=" md:border-r md:flex-1 md:pr-4 md:border-gray-200 md:dark:border-zinc-800">
            <h2 className="text-2xl font-bold">{stats.investor} Juta</h2>
            <p className="text-sm text-gray-500 mt-2 lg:text-md">Invetor Global</p>
         </div>
         <div className=" md:border-r md:flex-1 md:pr-4 md:border-gray-200 md:dark:border-zinc-800">
            <h2 className="text-2xl font-bold">{stats.koin}+</h2>
            <p className="text-sm text-gray-500 mt-2 lg:text-md">Koin</p>
         </div>
         <div className="md:border-gray-200 md:dark:border-zinc-800">
            <h2 className="text-2xl font-bold">${stats.volum}</h2>
            <p className="text-sm text-gray-500 mt-2 lg:text-md">Volum Perdagangan 24j</p>
         </div>
      </div>
   )
}

export default Stats