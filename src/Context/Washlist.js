import axios from "axios";
import { createContext,  useState } from "react";





export let washlist = createContext();

export default function WashlistProvider(props) {


    function addToWashlist(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId},{
            headers:{
                token : localStorage.getItem('userToken')
            }
        })
        .then((response)=>response).catch((error)=>error)
      }
    function removeToWashlist(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
            headers:{
                token : localStorage.getItem('userToken')
            }
        })
        .then((response)=>response).catch((error)=>error)
      }


    function getWashlist() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            headers:{
                token : localStorage.getItem('userToken')
            }
        })
        .then((response)=>response).catch((error)=>error)
      }
 
    


    return <washlist.Provider value={{addToWashlist , removeToWashlist , getWashlist }}>
    {props.children}
    </washlist.Provider>
}
