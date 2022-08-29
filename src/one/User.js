import React from "react";
import { useEffect, useState} from 'react';

function User(props){

  const [name, updateName ] = useState(props.name)

  useEffect(()=>{
    console.log(name)
  })

  function changeName() {
    updateName(name.toLowerCase());
  }

  return(
    <div onClick={changeName} className="container">
      <p>Name : {props.name}</p>
      <p>username : {props.username}</p>
      <p>email : {props.email}</p>
      <p>phone : {props.phone}</p>
    </div>
  )

}

export default User