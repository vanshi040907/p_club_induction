import './card.css'
import Bag from '../assets/SchoolBag.png'
function Lost_card(){
    return(
        <div className="card">
            <img src={Bag} className='general'></img>
            <div className='btn-bx'>
                <div className="heading">I lost an Item</div>
                <button>Upload lost Item</button>
            </div>

        </div>
    )
}

 export default Lost_card;