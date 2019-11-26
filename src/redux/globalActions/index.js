import { API_URL } from '../../config'

export const sendRequest = async function(method= 'GET', url= '', data = {}, headers){
    try{
       const res = await fetch(API_URL + url, {
       method,
       body: (method === 'GET') ? null : JSON.stringify(data),
       headers:{
           'Content-Type' : 'application/json',
           ...headers
      }
     })
     return await res.json()
    } catch (e){
       console.log("REQUEST ERROR ", e)
       return { status : false}
    }
   }
   