import AddVideo from './User/AddVideo/AddVideo';
import ViewAllVideos from './User/ViewAllVideos/ViewAllVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ViewAllVideos} />
          <Route exact path="/add-new" component={AddVideo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
