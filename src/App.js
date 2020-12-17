import React, { useState, useEffect } from "react";
import client from "./client.js";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { BiMap, BiListUl } from "react-icons/bi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//COMPONENTS
import Posts from "./components/Posts";
import SurfMap from "./components/SurfMap";
import Navbar from "./components/Navbar";
import InnerPage from "./components/InnerPage";
//STYLE
import "./components/Tabs.css";
import "./App.css";
//
import Logo from "./surftrip-logo.png";

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
        <Navbar />
        <main>
          <div className="wrapper">
            <Switch>
              <Route path="/:slug">
                <InnerPage />
              </Route>
              <Route exact path="/">
                <Tabs>
                  <TabList>
                    <Tab>
                      <BiListUl size={24} className="tabicon" />
                      <div className="tabtext">List</div>
                    </Tab>
                    <Tab>
                      <BiMap size={24} className="tabicon" />
                      <div className="tabtext">Map</div>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <Posts cards={articles} />
                  </TabPanel>
                  <TabPanel>
                    <SurfMap lat={0} lng={10} posts={articles} />
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
