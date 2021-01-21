import React, { useState, useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom";

//COMPONENTS
import Posts from "./components/Posts";
import SurfMap from "./components/SurfMap";
import Navbar from "./components/Navbar/Navbar";
import InnerPage from "./components/InnerPage";
import About from "./components/About";
//STYLE
import "./App.css";
//

export default function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  const loadSpots = () => {
    const url = 'https://surfspots-mongodb.herokuapp.com/spots';
    setIsLoading(true);
    setError(false);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Oh noo");
        setIsLoading(false);
        return res.json();
      })
      .then((data) => setItems(data.data || []))
      .catch((err) => setError(true));
  };

  useEffect(loadSpots, [isLoading, error]);

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <main>
          <Switch>
            <Route path="/maps">
              <SurfMap lat={0} lng={10} spots={items} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:slug">
              <InnerPage spots={items}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Posts spots={items} />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
