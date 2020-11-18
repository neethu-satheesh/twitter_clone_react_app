import { Switch, Route, withRouter } from 'react-router-dom';
import APP_PATH from './constants/paths';
import UserList from './containers/user/UserList';
import UserCreate from './containers/user/UserCreate';
import Home from './presentations/Home';


const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path={APP_PATH.BASE} component={Home} exact/>
        <Route path={APP_PATH.USERS} component={UserList} />
        <Route path={APP_PATH.USER_CREATE} component={UserCreate} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
