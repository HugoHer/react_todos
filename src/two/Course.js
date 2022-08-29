import React from "react";
import { useEffect, useState} from 'react';

function Course (props) {

  const [name , updateName ] = useState(props.name)

  useEffect(()=>{
    console.log(name)
  })

  function changeName () {
    updateName(name.toLowerCase());
  }


  return (
    <div onClick={changeName} className="container">
      <p> Name : {props.name}</p>
      <p> Id : {props.id}</p>
      <p> Users : {props.users}</p>
      <p> TotalQuizzes : {props.totalQuizzes}</p>
    </div>
  );
}

export default Course