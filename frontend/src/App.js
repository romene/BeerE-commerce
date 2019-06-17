import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import components for routes
import  IndexPage  from "./Pages/IndexPage";
import BeerPage from './Pages/BeerPage'



import './App.css';
import { NavBar } from './Components/Global/Nav';
import { Hero } from './Components/Global/Hero';

function App() {
  return (
    <React.Fragment>
      <AppRouter>
        <div className="App">
          <IndexPage />
        </div>
      </AppRouter>
    </React.Fragment>
    
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



