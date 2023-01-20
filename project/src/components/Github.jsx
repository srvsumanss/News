import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '../index.css';

const Github = () => {
    const [users , setUsers]= useState([]);
  const getUsers = async()=>{
    const response = await fetch("https://api.github.com/users")
    setUsers(await response.json());

  }
  
  useEffect(()=>{
    getUsers();
  },[]);

  return (
    <>
    <h2>List of Github User</h2>
    <div className='cards'>
        {
            users.map((value)=>{

                return(
                    <>
                
                    <div id="cards">
                 <div id='card'>
                 <h1 class="title">${value.login}</h1>
                    <img class="img" src={value.avatar_url} alt="img"/>
                    <p class="description">${value.html_url}</p>
                    <p class="catogary">${value.starred_url}</p>
                    <p class="price">${value.gravatar_id}</p>
                 </div>
                 </div>
                    
                   
                 </>
                )
            })
        }
       
    </div>
    </>
  )
}

export default Github