import { useEffect,useState } from "react";

function FetchData(){
    const [users , setUsers] = useState([]);
    async function fetchData() {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        // console.log(data.users)
        setUsers(data.users);
    }
    console.log(users)
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
         <h1>Fetch Api</h1>
         {
            users.map((user,index)=>{
                return <li key={index}>{user.firstName}</li>
            })
         }
        </>
    )
}
export default FetchData;