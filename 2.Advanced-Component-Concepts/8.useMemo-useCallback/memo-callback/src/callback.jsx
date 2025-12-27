import { useState } from "react";
function CallBack({variable}){
    const [value,setValue]= useState("");
    function handle(){
        setValue(variable)
        console.log("its running the callback");
    }
    return (
        <>
         <h1>{value}</h1>
         <button onClick={handle}>show</button>
        </>
    )
}
export default CallBack;