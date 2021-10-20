import AddVideo from './User/AddVideo/AddVideo';
import ViewAllVideos from './User/ViewAllVideos/ViewAllVideos';
import Login from './LoginRegister/Login/Login';
import SendOTP from './LoginRegister/SendOTP/sendotp';
import ResetPassword from './LoginRegister/ResetPassword/resetpassword';
import Register from './LoginRegister/Register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sendotp" component={SendOTP} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/user/all-videos" component={ViewAllVideos} />
          <Route exact path="/user/add-new" component={AddVideo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
