import './App.css';
import { useState } from 'react';
import Routes from './Routes';

function App() {
  const [jeepneyCode, setJeepneyCode] = useState("");
  const [routes, setRoutes] = useState([]);
  const [jeepneyCodeList] = useState(['01A', '02B', '03C', '04A', '04D', '06B', '06D', '10C', '10H', '11A', '11B', '20A', '20C', '42C', '42D']);
  
  const handleInputChange = (event) => {
    setJeepneyCode(event.target.value);
  };

  const handleEnteredRoutes = () => {
    const inputString = jeepneyCode.trim();
    const separatedArray = inputString.split(',').map(item => item.trim());
    const regex = /^\d{2}[A-Z]/;
  
    if (!regex.test(inputString)) {
      alert("Please enter a valid jeepney code starting with two digits and a capital letter.");
      return;
    }
    for (const code of separatedArray) {
    if (!jeepneyCodeList.includes(code)) {
      alert('A certain jeepney code does not exist.');
      return;
    }
  }
    setRoutes(separatedArray);
  };

  return (
    <div className="App">
      <div className='inputs'>
      <input
        type="text"
        value={jeepneyCode}
        onChange={handleInputChange}
        placeholder="Enter jeepney code"
      />
      <button onClick={handleEnteredRoutes}>Search Route</button>
      </div>
      <Routes routesList={routes} />
    </div>
  );
}

export default App;
