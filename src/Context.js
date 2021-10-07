import React,{createContext, useEffect, useState} from "react";
import axios from 'axios';

export const Context=createContext();

 export const ContextProvider=(props) => {

    const [data,setData]=useState()
    // const apiKey="5fbcebcf3f8f90001638c720";

    useEffect(()=>{
        axios.get(
            "https://5fbcebcf3f8f90001638c720.mockapi.io/api/v1/assets/"
        ).then(response =>setData(response.data)).catch(error => console.log(error))

    },[])

    return(
        <Context.Provider value={{data}}>
            {props.children}
        </Context.Provider>
    )
}