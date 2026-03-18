import '../css/card.css';

function Lost_Card(item){
    return(
        <div className="box">
            <h2>ITEM NAME:{item.item_lost}</h2>
            <h4>FOUND AT:{item.location}</h4>
            <h4>CONTACT DETAILS:{item.contact_info}</h4>
        </div>
    )
}

export default Lost_Card;