import axios from "axios"

const baseURL= import.meta.env.VITE_BASE_URL
const keyApi= import.meta.env.VITE_KEY_API

console.log(`Base URl = ${baseURL}`)
console.log(`API KEY = ${keyApi}`)

type Params = {
   resourch: string
}

export const getDatas = async ({ resourch }: Params) => {
   try {
      const response = await axios.get(`${baseURL}/${resourch}`, {
         headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': keyApi
         }
      })

      return response
   } catch (error) {
      console.log(error)
   }
}