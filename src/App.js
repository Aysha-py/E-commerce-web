import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Collection from './pages/Collection';
import Womencollection from './pages/Womencollection'
import Mencollection from './pages/Mencollection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}  exact/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/men" element={<Mencollection/>}/>
        <Route path="/women" element={<Womencollection/>}/>
      </Routes>
      
      
    </Router>
    
  );
}

export default App;
