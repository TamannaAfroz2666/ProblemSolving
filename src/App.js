import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import SimplePage from './components/SimplePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<SimplePage></SimplePage>}/>
      </Routes>
    
    </div>
  );
}

export default App;
