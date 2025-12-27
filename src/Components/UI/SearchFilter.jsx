const SearchFilter = ({search, setSearch, filter, setFilter}) => {

const handleChange=(e)=>{
        e.preventDefault();
    setSearch(e.target.value)

}

const SelectRegion=(e)=>{
        e.preventDefault();
    setFilter(e.target.value)
}

return (
    <section className="section-searchFilter container">
        <input type="text" placeholder="Search" value={search} onChange={handleChange} />
       <div >
        <select className="select-section" value={filter} onChange={SelectRegion}>
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="North america">North America</option>
            <option value="South america">South America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
)


};

export default SearchFilter;