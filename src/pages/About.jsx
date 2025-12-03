import countryData from "../api/CountryData.json";
const About = () => {
return(
     <section className="section-about container">
            <h2 className="container-title">
                Here are Intresting Facts
                <br/>
            We are Proud Of.
            </h2>
    <div className="container-card">
       { countryData.map((Country) => {
        const {id,country,population,capital,interesting}=Country;
        return(
           
            <div className="card " key={id}> 
            <div className="gradient-card bg-blue-box"></div>
            <p className="card-title">{country}</p>
            <p>
                <span className="card-description">Population:</span>
                {population}
            </p>
              <p>
                <span className="card-description">Capital:</span>
                {capital}
            </p>
              <p>
                <span className="card-description">Interesting Facts:</span>
                {interesting}
            </p>
             
            </div>
            
        )
     
       })}
       
       
   </div>
   </section>
)
};
export default About;