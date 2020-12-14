import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiMap, BiListUl } from "react-icons/bi";



import "./Tabs.css";

//const position = [51.505, -0.09];

export default function MyTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab><BiListUl />List</Tab>
        <Tab><BiMap />Map</Tab>
      </TabList>

      <TabPanel>
      </TabPanel>
      <TabPanel>
      
      </TabPanel>
    </Tabs>
  );
}