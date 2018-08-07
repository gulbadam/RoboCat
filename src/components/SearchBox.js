import React from "react";
const SearchBox = ({searchfield, searchChange})=>(
    <div className="pa2">
        <input   aria-label= "Search Robots" className="pa3 ba b--green bg-lightest-blue input-reset" type="search" placeholder="search robots"
        onChange={searchChange}/>
    </div>
)
export default  SearchBox;