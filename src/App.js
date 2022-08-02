import react, { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';

export const UserContext = react.createContext();

function App() { 
  const [bgcolor, setBgcolor] = useState(false);
  const handleBackground = () => {
    setBgcolor((prev) => !prev);
  }

  return (
    <div className="App" style={{backgroundColor: bgcolor ? 'blue' : 'white'}}>
      <UserContext.Provider value={{handleBackground , setBgcolor, bgcolor}}>
        <ComponentC/>
      </UserContext.Provider>
      <button onClick={handleBackground}>Change background</button>
    </div>
  );
}

export default App;
