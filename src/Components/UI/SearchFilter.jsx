const SearchFilter = ({search, setSearch, filter, setFilter,countries,setCountries}) => {

const handleChange=(e)=>{
        e.preventDefault();
    setSearch(e.target.value)

}

const SelectRegion=(e)=>{
        e.preventDefault();
    setFilter(e.target.value)
}

const sortCountries=(value)=>{
  const sortCountry= [...countries].sort((a,b)=>{
  return value === "asc" 
  ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
  
  }); 
  setCountries(sortCountry);
}

return (
    <section className="section-searchFilter container">
        <input type="text" placeholder="Search" value={search} onChange={handleChange} />
       <div >
        <div>
            <button onClick={()=>sortCountries("asc")}>
                Asc
            </button>
        </div>
         <div>
            <button onClick={()=>sortCountries("desc")}>
                Desc
            </button>
        </div>
        <select className="select-section" value={filter} onChange={SelectRegion}>
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
)


};

export default SearchFilter;