import {useRef} from "react";

function Focus(){
    const myref = useRef(null);
    const onclickfocus=()=>{
        myref.current.focus();
    }
    return(
        <>
        <input type="text" ref={myref}/>
        <button onClick={onclickfocus} >focus</button>
        </>
    )
}
export default Focus;