import React from "react";
import { useEffect, useState} from 'react';

function Posts(props){ 

  const [name , updateName] = useState(props.name)

  useEffect(()=>{
    console.log(name)
  })

  function changeName () {
    updateName(name.toLowerCase())
  }

  return(
    <div onClick={changeName} className ="container">
      <p> UserId : {props.userId}</p>
      <p> Id : {props.id}</p>
      <p> Title : {props.title}</p>
    </div>
  )
}

export default Posts