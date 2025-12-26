import { NavLink, useParams } from "react-router-dom";
import { useEffect,useTransition,useState } from "react";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

 const CountryDetails=()=>{
    const params = useParams();
    console.log(params);

    const [isPending,startTransition]= useTransition();
    const [country,setCountry]= useState();
    useEffect(()=>{
      startTransition(async()=>{
    const res= await getCountryIndData(params.id);
   if (res.status ===200){
    console.log(res);
    setCountry(res.data[0]);
   }
   });
    },[]);

    if (isPending) return <Loader/>;


    return  (
    <section className="card country-details-card container">
<div className="container-card bg-white-box">
    { country && (
  <div className="country-image grid grid-two-cols">
    <img
    src={country.flags.svg}
    alt={country.flags.alt}
    className="flag-img"
    onError={(e) => {
      e.target.src = "/fallback-flag.png";
    }}
  />
   <div className="country-content">
    <p className="card-title">{country.name.official}</p>
    <div className="info-container">
          <p><span className="card-description">Native Names :</span> 
          {Object.keys(country.name.nativeName || {}).map((key) => country.name.nativeName[key].official).join(", ") || "N/A"}
          </p>
          <p><span className="card-description">Population:</span> {country.population?.toLocaleString() || "N/A"}</p>
          <p><span className="card-description">Region:</span> {country.region || "N/A"}</p>
          <p><span className="card-description">Sub Region:</span> {country.subregion || "N/A"}</p>
          <p><span className="card-description">Capital:</span> {country.capital?.join(", ") || "N/A"}</p>
          <p><span className="card-description">Top Level Domain:</span> {country?.tld?.length ? country.tld.join(", ") : "N/A"}</p>
          <p><span className="card-description">Curriences :</span> 
          {Object.keys(country.currencies || {}).map((key) => country.currencies[key].name).join(", ") || "N/A"}
          </p>
          <p><span className="card-description">Languages :</span> 
          {Object.keys(country.languages || {}).map((key) => country.languages[key]).join(", ") || "N/A"}
          </p>
          </div>
   </div>
  </div>
    )};
<div className="country-card-backBtn">
<NavLink to="/country" className="backBtn">
<button >Go Back</button>

</NavLink>
</div>
</div>

    </section>
    );}


export default CountryDetails;