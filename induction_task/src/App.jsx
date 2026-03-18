import './css/App.css'
import NavBar from './components/NavBar';
import Description from './components/description'
import Add_cards from './components/add_card'

function App() {
  
  return (
    <div>
    <NavBar/>
    <br />
    <Description/>
    <br />
    <Add_cards/>
   </div>
  );
}

export default App