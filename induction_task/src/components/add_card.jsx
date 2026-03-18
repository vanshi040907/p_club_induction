import '../css/card.css'
import Bag from '../assets/SchoolBag.png'
import Keys from '../assets/Keys.png'
function Add_cards(){
    return(
        <div className="container_1">
            <div className="card orange">
            <img src={Bag} className='general'></img>
            <div className='btn-bx'>
                <div className="heading r">I LOST AN ITEM!</div>
                <button className='re'>UPLOAD LOST ITEM</button>
            </div>

        </div>

        <div className="card green">
            <img src={Keys} style={{ width: '150px' }} className='general'></img>
            <div className='btn-bx'>
                <div className="heading g">I FOUND AN ITEM!</div>
                <button className='gr'>UPLOAD FOUND ITEM</button>
            </div>

        </div>
        </div>
    )
}

 export default Add_cards