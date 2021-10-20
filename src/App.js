
import './App.css';
import Menu from './Menu';
import { Switch, Route } from 'react-router';
import Home from './Components/Home';
import One from './Components/One';
import Two from './Components/Two';
import Three from './Components/Three';
import Four from './Components/Four';
import Five from './Components/Five';
import Six from './Components/Six';
import Seven from './Components/Seven';
import Eight from './Components/Eight';
import Nine from './Components/Nine';
import pnf from './Components/Pagenotfound';
function App() {
  return (
  <> 
   <Menu />
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/.one' component={One} />
        <Route  path='/.Two' component={Two} />
        <Route  path='/.Three' component={Three} />
        <Route  path='/.four' component={Four} />
        <Route  path='/.five' component={Five} />
        <Route  path='/.six' component={Six} />
        <Route  path='/.seven' component={Seven} />
        <Route  path='/.eight' component={Eight} />
        <Route  path='/.nine' component={Nine} />
        <Route  component={pnf} />
      </Switch>

    </>
  );
}

export default App;
