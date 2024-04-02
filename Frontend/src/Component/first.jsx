import axios from 'axios'
import React, { useEffect } from 'react'
   
const url='http://localhost:8000/user/fetch'
   const First = () => {
        const fetchdata=async()=>{
            try{
                const response=await api.axios(url)
                // !destructure
                const data=response.data
                console.log(data);
                // console.log(response);
            }
            catch(error){
                console.log(error.response);
            }
        };

        useEffect(()=>{
            fetchdata()
        },[])


     return (
       <div>First</div>
     )
   }
   
   export default First