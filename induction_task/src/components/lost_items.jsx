import '../css/item_list.css';
import Lost_Card from './card.jsx';
import {useState, useEffect} from "react";

function CreateList(){
    const [searchQuery, setSearchQuery] = useState("");
    const items= JSON.parse(localStorage.getItem(lostItems)); 
    const handleSearch = (e)=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery(" ")
    }

    return (
        <div className="window">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                placeholder="Search by name for lost item" 
                className="search-input" 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="item-grid">
                {items.map((item)=>
                item.item_lost.toLowerCase().startsWith(searchQuery)&&(
                    <Lost_Card item={item} key={item.id} />
                ))}
            </div>   
        </div>
    )
    
}

export default CreateList;