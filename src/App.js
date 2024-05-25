import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Header from './Component/Header'
import Contact from './Component/Contact'
import Chart_Map from './Component/Chart&Map'
function App() {
  return (
    <>
    <Router>
        <Header/>
      <Routes>
        <Route exact path='/' Component={Dashboard}></Route>
        <Route exact path='/contact' Component={Contact}></Route>
        <Route exact path='/chart_map' Component={Chart_Map}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
