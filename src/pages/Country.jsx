import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../Components/UI/Loader";
import { useState } from "react";
import { CountryCard } from "../Components/layout/CountryCard";
const Country = () => {

    const [isPending,startTransition]= useTransition();
    const [countries,setCountries]= useState([]);
    useEffect(()=>{
      startTransition(async()=>{
    const res= await getCountryData();
    setCountries(res.data);
   });
    },[]);

    if (isPending) return <Loader/>;


return(
 <section className="country-section">
    <ul className="grid grid-four-cols">
      {
            countries.map((curcountry,index)=>{
                return <CountryCard country={curcountry} key={index}/>
            })
            
            }      
    </ul>
 </section>
)
}

export default Country;