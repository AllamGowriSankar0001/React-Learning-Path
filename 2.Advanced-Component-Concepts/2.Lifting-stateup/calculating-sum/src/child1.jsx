function Child1({num1,setNum1}){
    return(
        <div>
            <h1>Child1</h1>
            <input type="number" value={num1} onChange={(e)=>{setNum1(Number(e.target.value))}} />

        </div>
    )
}
export default Child1;