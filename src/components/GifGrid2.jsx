import { useState,useEffect } from "react";
import { buscarEnAPI } from "../helpers/getGifs";

export const GifGrid2 = ({c}) => {
    useEffect(() => {
        buscarEnAPI(c)
    }, [])

    const [counter, setCounter] = useState(10)
    const onClick = () => {
        setCounter(counter+1)
    }
    
    return (
        <>
         <h3>{c}</h3>
         <h3>{counter}</h3>
        </>
    );
};