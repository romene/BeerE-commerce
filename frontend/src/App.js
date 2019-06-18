import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store/store'

// import components for routes
import  IndexPage  from "./Pages/IndexPage";
import BeerPage from './Pages/BeerPage'



import './App.css';
import { NavBar } from './Components/Global/Nav';
import { Hero } from './Components/Global/Hero';

function App() {
  return (
    <Provider store={store}>
      <AppRouter>
        <div className="App">
          <IndexPage />
        </div>
      </AppRouter>
    </Provider>
    
  );
}

export default App;


const AppRouter = () => {
  return (
    
      <Router>
        <NavBar />
        <Hero />
        <Switch>
        <Route exact path="/"  component={IndexPage} />
        <Route path="/beers" component={BeerPage} />
        </Switch>
      </Router>
    
  )
}



