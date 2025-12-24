import { useState } from "react";

function Form(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin,setLoggedin] = useState(false);
    function handleSubmit(e){
        e.preventDefault()
        setLoggedin(!loggedin);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="submit" value="Submit" />
            </form>
            {
                loggedin ? (
                    <ul>
                        <li>your name is {name}</li>
                        <li>your mail is {email}</li>
                        <li>your password is {password}</li>
                    </ul>
                ) : (
                    <h1>you not loggedin</h1>
                )
            }
        </div>
    )
}
export default Form;