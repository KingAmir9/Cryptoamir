import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Landing from './components/Landing';
//import Navbar from './components/shared/Navbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';

// Context
 
 
function App() {
  return (
 <div>
    <Navbar/> 
    <Switch>
 
      <Route path="/landing" component={Landing} />
      <Route path="/aboutus" component={Aboutus} />
      <Redirect to="/landing" />

    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
