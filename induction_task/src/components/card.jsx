import '../css/card.css';

export function Lost_Card({item}){
    return(
        <div className="box">
            <h2>ITEM NAME:{item.item_lost}</h2>
            <h4>LOST AT:{item.location}</h4>
            <h4>CONTACT DETAILS:{item.contact_info}</h4>
        </div>
    )
}

export function Found_Card({item}){
    return(
        <div className="box">
            <h2>ITEM NAME:{item.item_found}</h2>
            <h4>FOUND AT:{item.location}</h4>
            <h4>CONTACT DETAILS:{item.contact_info}</h4>
        </div>
    )
}

