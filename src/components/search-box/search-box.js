import React from "react";
import "./search-box.css";


export const SearchBox = ({placeholder, handelChange}) =>{
    
return <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handelChange}
        >
        </input>
}