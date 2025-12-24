import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
function Parent(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    return (
        <div>
            <h1>Parent</h1>
            <Child1 num1={num1}  setNum1={setNum1} />
            <Child2 num2={num2} setNum2={setNum2} />
            <h1>Sum: {num1 + num2}</h1>
        </div>
    )
}
export default Parent;