
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';


function App() {
 
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element = {< Home/>}/>
        <Route path='/CreateProduct' element = {<CreateProduct/>}/>
      </Routes>
     
    
    </div>
    </Router>
  );
  
}

export default App;
