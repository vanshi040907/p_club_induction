import '../css/item_list.css';
import {Lost_Card, Found_Card} from './card.jsx';
import {useState, useEffect} from "react";

function CreateList(){
    const [data, setData]= useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const [found_data, setFound_Data]= useState([]);
    const [found_searchQuery, setFound_SearchQuery] = useState("");
   
    useEffect(()=>{
        const items= JSON.parse(localStorage.getItem('lostItems')) || [];
        setData(items);
    }, []);

    useEffect(()=>{
        const items= JSON.parse(localStorage.getItem('foundItems')) || [];
        setFound_Data(items);
    }, []);
     
    const handleSearch = (e)=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    const handleSearchFound = (e)=>{
        e.preventDefault();
        alert(found_searchQuery);
        setSearchQuery("");
    }

    return (
        <div className="listArea">
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
                {data.map((item, index)=>
                item.item_lost.toLowerCase().includes(searchQuery.toLowerCase())&&(
                    <Lost_Card item={item} key={item.id} />
                ))}
            </div>   
        </div>

        <div className="window">
            <form onSubmit={handleSearchFound} className="search-form">
                <input type="text"
                placeholder="Search by name for found item" 
                className="search-input" 
                value={found_searchQuery}
                onChange={(e)=>setFound_SearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="item-grid">
                {found_data.map((item, index)=>
                item.item_found.toLowerCase().includes(found_searchQuery.toLowerCase())&&(
                    <Found_Card item={item} key={item.id} />
                ))}
            </div>   
        </div>

        </div>
    )
    
}

export default CreateList;