import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home'
import Announcement from './views/Announcement';



function App() {
  return (
    < div className="App" style={{backgroundColor: '#CFDAC8', backgroundImage:'url(https://wallpapercave.com/wp/wp8078165.jpg)',backgroundSize: 'contain', opacity: '0/8'}}>
      <Router>
      <div>     
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
]        <Route path="/:name">
            <Announcement />
          </Route>
          <Route path="/">
            <Announcement />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}



export default App;
