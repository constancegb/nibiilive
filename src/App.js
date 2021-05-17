import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingScreen from './components/landing-screen';
import Contact from './components/contact';
import Collections from './components/collections';
import CollectionsItems from './components/collectionsItems';
import './App.css';

const pagesStyle = {
  position: "relative",
  top: "-100vh"
}

export default function App() {
  const [appClass, setAppClass] = useState("App");
  const [childrenVisible, setChildrenVisible] = useState(false);

  useEffect(() => {
    if (window.location.pathname.length < 3) {
      setAppClass(`${appClass} hidden-overflow`)
    }
  }, []);

  const renderContact = () => {
    return (
      <div style={pagesStyle}>
        <Contact />
      </div>
    )
  }

  const renderCollections = () => {
    return (
      <div style={pagesStyle}>
        <Collections />
      </div>
    )
  }

  const renderCollectionsItems = () => {
    return (
      <div style={pagesStyle}>
        <CollectionsItems />
      </div>
    )
  }

  return (
      <div className={appClass}>
        <Router>
          <Switch>
            <Route exact path="/collections">
              <LandingScreen setChildrenVisible={setChildrenVisible} page='collections'/>
              { childrenVisible && renderCollections() }
            </Route>
            <Route exact path="/contact">
              <LandingScreen setChildrenVisible={setChildrenVisible} page='contact'/>
              { childrenVisible && renderContact() }
            </Route>
            <Route exact path="/">
              <LandingScreen setChildrenVisible={setChildrenVisible} page='homepage'/>
            </Route>

            <Route exact path="/collections/:colname">
              <LandingScreen setChildrenVisible={setChildrenVisible} page='collections'/>
              { childrenVisible && renderCollectionsItems() }
            </Route>

          </Switch>
        </Router>
      </div>
  );
}
