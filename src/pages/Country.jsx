import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../Components/UI/Loader";
import { useState } from "react";
import { CountryCard } from "../Components/layout/CountryCard";
import  SearchFilter  from "../Components/UI/SearchFilter";

const Country = () => {

    const [isPending,startTransition]= useTransition();
    const [countries,setCountries]= useState([]);
    const [search,setSearch]=useState();
    const [filter,setFilter]=useState("all");
    useEffect(()=>{
      startTransition(async()=>{
    const res= await getCountryData();
    setCountries(res.data);
    console.log(res);
   });
    },[]);

    if (isPending) return <Loader/>;
    //console.log(search,filter);
    const searchCountry=(country)=>{
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      }
      return country;
    }

     const filterRegion=(country)=>{
     if (filter === "all") return country;
     return country.region===filter;
     }
    const filterCountries=countries.filter((country)=>searchCountry(country) && filterRegion(country));

return(
 <section className="country-section">
  <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
    <ul className="grid grid-four-cols">
      {
            filterCountries.map((curcountry,index)=>{
                return <CountryCard country={curcountry} key={index}/>
            })
            
            }      
    </ul>
 </section>
)
}

export default Country;