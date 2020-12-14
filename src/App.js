import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import client from "./client.js";
import Logo from "./surftrip-logo.png";
import MyMap from "./components/MyMap";

import "./components/Tabs.css";
import './App.css';

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
          <img className="logo-image" src={Logo} alt="Logo"/>
          {/*} <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
          </div>*/}
        </div> 
        
        </header>
        <main>
          <div className="wrapper">
          <Tabs>
            <TabList>
              <Tab>List</Tab>
              <Tab>Map</Tab>
            </TabList>

            <TabPanel>
              <Posts posts={articles} />
            </TabPanel>
            <TabPanel>
              <MyMap lng={10} lat={0} />
            </TabPanel>
          </Tabs>
          </div>
        </main>
        
      </div>
    </div>
  );
}