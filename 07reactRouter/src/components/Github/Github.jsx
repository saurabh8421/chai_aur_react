import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    
const data = useLoaderData()
    // const [data,setData] = useState(null);

    // useEffect(
    //     ()=>{
    //         fetch("https://api.github.com/users/saurabh8421")
    //         .then(res=>res.json())
    //         .then((data)=>setData(data))
            
        
    //     },[] 
    // )
  return (
    
    <div>
        
        {data ? (  // Conditional rendering
                <>
                    
                    <p>{data.login}</p>
                    <img src={data.avatar_url} alt={data.login} />
                </>
            ) : (
                <p>Loading...</p>
            )}
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/saurabh8421')
    return response.json()
}