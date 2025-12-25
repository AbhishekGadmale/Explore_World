import { Navigate } from "react-router-dom";
import { CountryDetails } from "./CountryDetails";

export const CountryCard = ({country})=>{
  const {flags,name,capital,region,population} = country;
  return <li className="country-card card">
    <div className=" bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
        <p><b>{name.common}</b></p>
        <p>Capital : <span>{capital[0]}</span></p>
        <p>Region : <span>{region}</span></p>
        <p>Population : <span>{population.toLocaleString()}</span></p>
        <Navigate to={`/country/${name.common}`}>
            <button className="">Read More</button>
        </Navigate>
        </div>
  </li>

  
}