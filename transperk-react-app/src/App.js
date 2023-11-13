import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Customer from './Component/Customer';
import Vendor from './Component/Vendor';
import Deleteprofile from './CustomerScreens/Deleteprofile';
import Home from './Component/Home';

const history = createBrowserHistory(); 

function App() {

  return (

    <div>

      <BrowserRouter history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>

        <div>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/customer" component={Customer} />
            <Route path="/vendor" component={Vendor} />
            <Route path="/deleteprofile" component={Deleteprofile} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>

  )
}

export default App