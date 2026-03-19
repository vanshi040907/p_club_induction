import './css/App.css'
import NavBar from './components/NavBar';
import Description from './components/description'
import Add_cards from './components/add_card'
import CreateList from './components/lost_items';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData]= useState([]);
  const [found_data, setFound_Data]= useState([]);

  const refreshLost = () => {
        const items = JSON.parse(localStorage.getItem('lostItems')) || [];
        setData(items);
    };

    const refreshFound = () => {
        const items = JSON.parse(localStorage.getItem('foundItems')) || [];
        setFound_Data(items);
    };

    useEffect(() => {
        refreshLost();
        refreshFound();
    }, []);

  return (
    <div>
    <NavBar/>
    <br />
    <Description/>
    <br />
    <Add_cards onUpdateLost={refreshLost} onUpdateFound={refreshFound}/>
    <CreateList data={data} found_data={found_data}/>
   </div>
  );
}

export default App