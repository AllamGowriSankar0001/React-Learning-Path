function Child2({num2,setNum2}){
    return(
        <div>
            <h1>Child2</h1>
            <input type="number" value={num2} onChange={(e)=>{setNum2(Number(e.target.value))}} />

        </div>
    )
}
export default Child2;