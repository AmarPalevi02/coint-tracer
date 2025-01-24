import { robot } from "../../assets"

const Hero = () => {
   return (
      <section className="relative flex flex-col md:flex-row justify-between md:pl-6 md:items-center md:w-full mt-5 md:mt-0">
         <div className="text-start mt-5 mb-4 lg:0">
            <h1 className="text-3xl font-bold lg:text-5xl">Temukan</h1>
            <h1 className="text-3xl font-bold text-[#01bc8d] my-2 lg:text-5xl">Permata Kripto</h1>
            <h1 className="text-3xl font-bold lg:text-5xl">Berikutnya di KuCoin</h1>

            <p className="text-sm mt-4 text-gray-400">1 Dari 4 Holder Kripto Di Seluruh Dunia Menggunakan KuCoin</p>
         </div>

         <div className={`relative justify-center items-center md:my-0  flex flex-1 lg:mt-0 lg:justify-end`}>
            <img src={robot} alt="" className='w-[100%] h-[100%] lg:h-[100%] lg:w-[70%]' />
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 white__gradient ' />
            <div className='absolute z-[0] w-[50%] h-[50%] top-0 bottom-20 blue__gradient' />
         </div>
      </section>
   )
}

export default Hero