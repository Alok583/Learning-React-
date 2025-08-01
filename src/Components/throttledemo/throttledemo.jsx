import { useEffect, useState } from "react"

export function ThrottleDemo(){
   
    const [clock, SetClock] = useState();
function Gettime(){
    var now = new Date();
    SetClock(now.toLocaleTimeString());
}
   
useEffect(()=>{
    setInterval(Gettime, 1000);
},[])
   
   
    return(



        <div className="bi bi-0-square ">
            <div className="text-center">{clock}</div>
        </div>
    )
}