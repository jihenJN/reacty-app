import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
   const [users,setUsers]=useState([])
  async function fetchData() {
  
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
 
    setUsers(data)
 
   
  
  }
  useEffect(() => {
    fetchData();
  }, []);

  return(<div>
    {
      users.map((user)=>(
         <div  key ={user.id} style={{border: "red solid 1px" , margin:"4px"}}>
            <h1>{user?.name}</h1>
            <h1>{user?.username}</h1>
            <h1>{user?.id}</h1>
         </div>)

      )
    }
    </div> )
  
}

export default Home;
