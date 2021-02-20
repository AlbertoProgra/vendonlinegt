import './App.css';
import Layout from './containers/Layout/Layout';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
     {/* App me indica que colocar y donde, la pagina principal sera dashboard por eso / */}
      <Layout>
        <Switch>
          {/* componente a renderizar dentro de route*/}
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
          <Route path="/" exact component={Dashboard}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
