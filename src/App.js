import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Coins from './components/Coins';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Aboutus from './components/Aboutus';
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CoinDetail from './components/CoinDetail';

// Context
 
 
function App() {
  return (
  <div>
      <Navbar/> 
      <Switch>
            <Route path="/home" component={Landing} />
            <Route path="/coins/:id" component={CoinDetail} />
            <Route path="/coins" component={Coins} />
            <Route path="/coins" component={Coins} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Redirect to="/home" />
      </Switch>
      {/* <Footer/> */}
  </div>
  );
}

export default App;
