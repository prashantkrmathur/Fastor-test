import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OtpVerification from './components/OtpVerification';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/verify-otp' component={OtpVerification} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;