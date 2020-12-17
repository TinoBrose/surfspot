import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { BiMap, BiListUl } from "react-icons/bi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Posts from "./components/Posts";
import client from "./client.js";
import Logo from "./surftrip-logo.png";
import SurfMap from "./components/SurfMap";

import "./components/Tabs.css";
import './App.css';

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
        <Router>
          <Navbar />
        </Router>
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
              <Tab><BiListUl size={24} className="tabicon" /><div className="tabtext">List</div></Tab>
              <Tab><BiMap size={24} className="tabicon" /><div className="tabtext">Map</div></Tab>
            </TabList>

            <TabPanel>
              <Posts posts={articles} />
            </TabPanel>
            <TabPanel>
              <SurfMap lat={0} lng={10} posts={articles} />
            </TabPanel>
          </Tabs>
          </div>
        </main>
        
      </div>
    </div>
  );
}