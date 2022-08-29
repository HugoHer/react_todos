import React  from 'react';
import { useState, useEffect } from 'react';
import Course from './Course';
import { Link } from "wouter";

function PageTwo (){

  const [course , updateCourse ] = useState([])

  const api_Url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories"

  function getCourseApi () {
    return new Promise((resolve, reject) => {
      fetch(api_Url)
      .then((Response)=> Response.json())
      .then((data) =>{
        resolve(data.communityCategories)
      })
    })
  }

  async function getCourse () {
    const courses = await getCourseApi ();
    console.log(courses);
    updateCourse(courses);
  }

  useEffect(() => {
    console.log("Accediendo a la API")
    getCourse();
  })
  return (
    <div>
      <Link href='/'>
        <button>volver</button>
      </Link>
      <header>
        {
          course.map(course => {
            return <Course 
            name={course.name}
            id={course.id}
            users={course.users}
            totalQuizzes={course.totalQuizzes}
            />
          })
        }
      </header>
    </div>
  );
}

export default PageTwo