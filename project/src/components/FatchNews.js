import React from 'react'
import '../index.css'

import axios from 'axios'
import { useState } from 'react'
const FatchNews = () => {
    const [news ,setNews]=useState([])
    const fetchNews = ()=>{
       axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a3e09f2db008458eb4deff8c68f9d930")
       .then((response)=>{
        console.log(response)
        setNews(response.data.articles)
       })
    }
  return (
<>
<div className='container-my-3'>
    <div className='row'>
        <div className='col-4'>
        <button onClick={fetchNews} className='btn btn-primary'>Fetch</button>

        </div>
    </div>
</div>
   <div className='container'>
       <div className='row'>
          {
              news.map((value)=>{
                  return(
                    <div className='col-4'>
                    <div className='card' style={{width:"18rem"}}>
                      <img src={value.urlToImage} className='card-img-top' alt='...'/>
                      <div className='card-body'>
                          <h5 className='card-title'>{value.title}</h5>
                          <p className='card-text'>{value.description}</p>
                          {/* <a href='#' className='btn btn-primary'> Go Somewhere</a> */}
                          </div> 
                    </div>
          
                    </div>
                  )
              })
          }
       </div>
   </div>
</>
    )
}

export default FatchNews