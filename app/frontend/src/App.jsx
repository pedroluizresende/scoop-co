import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Deepening from './pages/Deepening';
import MenuProvider from './contexts/MenuProvider';
import Terms from './pages/Terms';

function App() {
  return (

    <CssBaseline>
      <MenuProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/aprofundamento" component={ Deepening } />
          <Route exact path="/termos-de-uso" component={ Terms } />
        </Switch>
      </MenuProvider>
    </CssBaseline>

  );
}

export default App;
