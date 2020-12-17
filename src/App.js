import React, { useState, useEffect } from "react";
import client from "./client.js";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//
import Logo from "./surftrip-logo.png";
//
import MyMap from "./components/MyMap";
import Posts from "./components/Posts";
import InnerPage from "./components/InnerPage";
//
import "./components/Tabs.css";
import "./App.css";

const position = [51.505, -0.09];

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "surftrip" })
      .then((res) => setArticles(res.items))
      .catch(() => console.log("Request failed"));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="header">
            <img className="logo-image" src={Logo} alt="Logo" />
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Switch>
              <Route path="/:slug">
                <InnerPage />
              </Route>
              <Route exact path="/">
                <Tabs>
                  <TabList>
                    <Tab>List</Tab>
                    <Tab>Map</Tab>
                  </TabList>

                  <TabPanel>
                    <Posts cards={articles} />
                  </TabPanel>
                  <TabPanel>
                    <MyMap lng={10} lat={0} />
                  </TabPanel>
                </Tabs>
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
}
