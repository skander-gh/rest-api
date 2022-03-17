
import './App.css';
import AddEddit from './components/AddEddit';
import Homee from './components/Homee';
import Contacts from './components/Contacts';
import Navee from './components/Navee';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       
<Navee></Navee>
<Routes>
<Route path ='/' element= {<Homee/>} />
<Route path ='/Contacts' element= {<Contacts/>} /> 
<Route path ='/AddEddit' element= {<AddEddit/>} />
</Routes>
    </div>
  );
}

export default App;
