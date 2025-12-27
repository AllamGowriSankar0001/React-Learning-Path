import { useMemo, useState } from "react";

function Memo() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const handle=useMemo(()=>{
        console.log("number is calclulating")
        return number *10000
    },[number]);
    return (
        <>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <h1>{handle}</h1>
            <button onClick={() => setNumber(number + 1)}>+</button>
            </>
    )
}
export default Memo