import React, { useEffect, useState } from 'react'
import './Pokemon.css'

const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState([]);

    const API = "https://jsonplaceholder.typicode.com/posts";

    // How not use Fetch API
    fetch(API)
    .then((res) => res.json())
    .then((data)=> {
        // setApiData(data);
    })
    .catch((error) => console.log(error));
    
    // How to use Fetch API
    
    // useEffect(()=>{
    //     fetch(API)
    //     .then((res) => res.json())
    //     .then((data)=> {
    //         setApiData(data);
    //     })
    //     .catch((error) => console.log(error));
    // },[])

    return (
        <div className='container effect-container'>
            <ul>data:
                {
                    apiData.map((curData)=>{
                        return <li key={curData.id}>{curData.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default HowNotToFetchApi
