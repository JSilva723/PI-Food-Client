import { Switch, Route } from 'react-router-dom';
import { Main } from './main/Main';
import { Create } from './create/Create';
import { Detail } from './detail/Detail';
import { Home } from './home/Home';
import './normalize.css';


export const App = () => {
  
  return (
    <Switch>
      <Route path="/main" component={ Main }/>
      <Route path="/detail/:id" component={ Detail }/>
      <Route path="/create" component={ Create }/>
      <Route path="/" component={ Home }/>
    </Switch>
  );
};
