import '../css/card.css'
import Bag from '../assets/SchoolBag.png'
import Keys from '../assets/Keys.png'
import { useState } from 'react';
import Lost_form from '../components/lost_form.jsx';
import Found_form from '../components/found_form.jsx';

function Add_cards(){
    const [isLost_formOpen, setIsLost_formOpen] = useState(false);
    const [isFound_formOpen, setIsFound_formOpen] = useState(false);

    return(
        <div className="container_1">
            <div className="card orange">
            <img src={Bag} className='general'></img>
            <div className='btn-bx'>
                <div className="heading r">I LOST AN ITEM!</div>
                <button className='re'
                onClick={()=> setIsLost_formOpen(true)}>UPLOAD LOST ITEM</button>
                {isLost_formOpen && <Lost_form onClose={() => setIsLost_formOpen(false)} />}
            </div>

        </div>

        <div className="card green">
            <img src={Keys} style={{ width: '150px' }} className='general'></img>
            <div className='btn-bx'>
                <div className="heading g">I FOUND AN ITEM!</div>
                <button className='gr'
                onClick={()=> setIsFound_formOpen(true)}>UPLOAD FOUND ITEM</button>
                {isFound_formOpen && <Found_form onClose={() => setIsFound_formOpen(false)} />}
            </div>

        </div>
        </div>
    )
}

 export default Add_cards