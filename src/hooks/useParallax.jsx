import { useState, useEffect } from "react";

export default function useParallax() {

    const [position,setPosition] = useState({
        x:0,
        y:0
    });

    useEffect(()=>{

        const handleMove=(e)=>{

            setPosition({

                x:(e.clientX/window.innerWidth)*20,

                y:(e.clientY/window.innerHeight)*20

            });

        };

        window.addEventListener("mousemove",handleMove);

        return ()=>window.removeEventListener("mousemove",handleMove);

    },[]);

    return position;

}