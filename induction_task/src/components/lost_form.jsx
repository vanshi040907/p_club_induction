import React, {useState} from 'react';
import '../css/form.css';

function Lost_form({onClose, onUpdate}){
    const[formData, setFormData]=useState({
        item_lost:'',
        location:'',
        contact_info:'',
        description:'',
        date:'',
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        const existing_lost=JSON.parse(localStorage.getItem('lostItems')) || [];
        const new_lost_item={
            id:Date.now(),
            item_lost: formData.item_lost,
            location:formData.location,
            contact_info:formData.contact_info,
            description: formData.description,
            date:formData.date,
        }
        
        const updatedList = [new_lost_item, ...existing_lost];
        localStorage.setItem('lostItems', JSON.stringify(updatedList));
        console.log("Form Submitted:", formData);
        if (onUpdate) onUpdate();
        onClose();
    };

    return (
        <div className="form-boundary">
            <div className="form-container">
            <h2>REPORT THE LOST ITEM</h2><br/>
            <button className="close-btn" style={{color:'red'}} onClick={onClose}>X</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Item Name</label>
                    <input 
                      type="text" 
                       placeholder="Enter item Name"
                       onChange={(e) => setFormData({...formData, item_lost: e.target.value})}
                       required/>
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Library Hall"
                      onChange={(e) => setFormData({...formData, location: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Contact info</label>
                    <input 
                      type="text" 
                      placeholder="Mobile Number"
                      onChange={(e) => setFormData({...formData, contact_info: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input 
                      type="text" 
                      placeholder="Item Details"
                      onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Date Lost</label>
                    <input 
                    type="date"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}/>
                </div>

                <button type="submit" className="submit-btn">Submit Report</button>

            </form>
        </div>
        </div>
    );
}

export default Lost_form;