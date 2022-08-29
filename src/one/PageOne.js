import React  from 'react';
import { useState, useEffect } from 'react';
import User from './User';
import { Link } from "wouter";


function PageOne()
{
  const [user, updateUser ] = useState([])

  const api_Url = "https://jsonplaceholder.typicode.com/users"

  function getUserApi () {
    return new Promise((resolve, reject) => {
      fetch(api_Url)
      .then((Response)=> Response.json())
      .then((data)=>{
        resolve(data)
      })
    })
  }

  async function getCourse () {
    const user = await getUserApi();
    console.log(user);
    updateUser(user);
  }

  useEffect (() => {
    console.log("accediendo a la APi")
    getCourse();
  })
  


  return(
    <div className='box'>
      <Link href='/'>
        <button>volver</button>
      </Link>
      <header>
      <div className='nav'>
        {
          user.map(user =>{
          return <User 
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            />
          })
        }   
        </div>
      </header>
    </div>
  );
}

export default PageOne