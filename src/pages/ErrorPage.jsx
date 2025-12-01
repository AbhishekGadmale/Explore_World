import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage= ()=> {
   const error=useRouteError();
   console.log(error);
    return (
       <div>
       <h1> !Opps Chukicha Page Taklas , Bro better Code kr</h1>
      {error && <p>{error.data}</p>}
       <NavLink to="/">
       <button>Home</button>
       </NavLink>
       </div>
    )
}