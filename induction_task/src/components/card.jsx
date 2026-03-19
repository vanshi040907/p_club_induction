import '../css/card.css';

export function Lost_Card({item, onResolve }){
    return(
        <div className="box">
            <h2>Item Name : {item.item_lost}</h2>
            <h4>Lost At : {item.location}</h4>
            <h4>Contact Details : {item.contact_info}</h4>
            <h4>Description : {item.description}</h4>
            <h4>Date Lost : {item.date}</h4>
            <button className="resolve-btn" onClick={() => onResolve(item.id)}>Resolved</button>
        </div>
    )
}

export function Found_Card({item, onResolve }){
    return(
        <div className="box">
            <h2>Item Name : {item.item_found}</h2>
            <h4>Found At : {item.location}</h4>
            <h4>Contact Details : {item.contact_info}</h4>
            <h4>Description : {item.description}</h4>
            <h4>Date Found : {item.date}</h4>
            <button className="resolve-btn" onClick={() => onResolve(item.id)}>Resolved</button>
        </div>
    )
}

