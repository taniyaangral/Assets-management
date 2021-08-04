import React,{createContext, useEffect, useState} from "react";
import axios from 'axios';

export const NewsContext=createContext()

 export const NewsContextProvider=(props) => {

    const [data,setData]=useState()
    const apiKey="fd4996b8c429ad05867265f07b70dc88";

    useEffect(()=>{
        axios.get(
            `https://gnews.io/api/v4/search?q=example&token=${apiKey}`
        ).then(response =>setData(response.data)).catch(error => console.log(error))

    },[])

    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}