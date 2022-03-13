import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import React from 'react';

function App(){
  const apiKey = process.env.REACT_APP_NEWSAPP_APIKEY;
  
    return (
      <Router>
        <NavBar/>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/politics">
              <News
                key="politics"
                category="politics"
                heading="Let's see the politics"
                apiKey={apiKey}

              />
            </Route>
            <Route exact path="/space">
              <News
                key="space"
                category="space"
                heading="What is happening in the space ?"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                category="business"
                heading="News about business"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                category="sports"
                heading="Sports is here for you"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/astrology">
              <News
                key="astrology"
                category="astrology"
                heading="News about astrology"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/celebrity">
              <News
                key="celebrity"
                category="celebrity"
                heading="Worlds Celebrities"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                category="science"
                heading="Science related news"
                apiKey={apiKey}
              />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
          
          </Switch>
        </div>
      </Router>
    );
  
}

export default App;
