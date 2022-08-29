import { Link, Route } from "wouter"
import PageOne from "./one/PageOne"
import PageTwo from "./two/PageTwo"
import PagesThree from "./three/PagesThree"

function Links (){


  return(
    <div>
      <Link href="/Users">
          <button>PageOne</button >
        </Link>
        <Route path="/Users" component={PageOne} />
        <Link href="/course">
          <button>PageTwo</button >
        </Link>
        <Route path="/Course" component={PageTwo} />
        <Link href="/post">
          <button>PagesThree</button >
        </Link>
        <Route path="/post" component={PagesThree} />
    </div>  
  )
}

export default Links