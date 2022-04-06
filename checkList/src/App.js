import './App.css';
import AllItems from './components/AllItems'
import SelectedItems from './components/SelectedItems'
import CheckedContext from './contexts/checkedList';
import {useState} from 'react'

function App() {
  const [context, setContext] = useState([]);
  
  return (
    <div className="App">
      <CheckedContext.Provider value={[context, setContext]}>
        <AllItems />
        <SelectedItems />
      </CheckedContext.Provider>
    </div>
  );
}

export default App;
