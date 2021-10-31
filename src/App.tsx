
import SideBar from './RoutingExample/SiderBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstTeam from './RoutingExample/FirstTeam';
import SecondTeam from './RoutingExample/SecondTeam';
import TeamSummary from './RoutingExample/TeamSummary';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={SideBar}></Route>
        </Switch>
        <Switch>
          <Route path='/teamSummary' component={TeamSummary}></Route>
        </Switch>
        <Switch>
          <Route path='/firstTeam' component={FirstTeam}></Route>
        </Switch>
        <Switch>
          <Route path='/secondTeam' component={SecondTeam}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;