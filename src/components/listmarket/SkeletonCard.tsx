const SkeletonCard = () => {
   return (
      <div className="mt-8 p-4 shadow-md rounded-md animate-pulse bg-white dark:bg-[#121212]">
         <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
               <div key={index} className="flex justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                     <div>
                        <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded mb-1"></div>
                        <div className="h-3 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
                     </div>
                  </div>
                  <div className="text-end">
                     <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded mb-1"></div>
                     <div className="h-3 w-14 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default SkeletonCard