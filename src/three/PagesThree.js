import React  from 'react';
import { useState, useEffect } from 'react';
import Posts from './Posts';
import { Link } from "wouter";

function PagesThree (){

  const [posts , updatePost ] = useState([])

  const api_Url = "https://jsonplaceholder.typicode.com/posts"

  function getPostApi () {
    return new Promise((resolve, reject) => {
      fetch(api_Url)
      .then((Response)=> Response.json())
      .then((data) =>{
        resolve(data)
      })
    })
  }

  async function getPosts() {
    const posts = await getPostApi ();
    console.log(posts);
    updatePost(posts);
  }

  useEffect(()=>{
    console.log("Accediendo a la API");
    getPosts()
  })
  return (
    <div>
      <Link href='/'>
        <button>volver</button>
      </Link>
      <header>
        {
          posts.map(posts =>{
            return <Posts 
            userId={posts.userId}
            id={posts.id}
            title={posts.title}
            /> 
          })
        }
      </header>
    </div>
  )
}

export default PagesThree