import React, {useState} from 'react';
import '../css/form.css';

function Found_form({onClose}){
    const[found_formData, setFound_FormData]=useState({
        item_found:'',
        location:'',
        contact_info:'',
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        const existing_found=JSON.parse(localStorage.getItem('foundItems')) || [];
        const new_found_item={
            id:Date.now(),
            item_found: found_formData.item_found,
            location:found_formData.location,
            contact_info:found_formData.contact_info,
        }
        
        const updatedList = [new_found_item, ...existing_found];
        localStorage.setItem('foundItems', JSON.stringify(updatedList));
        console.log("Form Submitted:", found_formData);
        onClose();
    };

    return (
        <div className="form-boundary">
            <div className="form-container">
            <h2>REPORT THE FOUND ITEM</h2><br/>
            <button className="close-btn" onClick={onClose} style={{color: 'red'}}>X</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Item Name</label>
                    <input 
                      type="text" 
                       placeholder="Enter item Name"
                       onChange={(e) => setFound_FormData({...found_formData, item_found: e.target.value})}
                       required/>
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Library Hall"
                      onChange={(e) => setFound_FormData({...found_formData, location: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Contact info</label>
                    <input 
                      type="text" 
                      placeholder="Mobile Number"
                      onChange={(e) => setFound_FormData({...found_formData, contact_info: e.target.value})}/>
                </div>

                <button type="submit" className="submit-btn">Submit</button>

            </form>
        </div>
        </div>
    );
}

export default Found_form;