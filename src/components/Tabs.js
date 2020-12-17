import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiMap, BiListUl } from "react-icons/bi";
import TabList from './TabList';

import "./Tabs.css";

export default function MyTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab><TabList /></Tab>
        <Tab><BiMap />Map</Tab>
      </TabList>

      <TabPanel>
      </TabPanel>
      <TabPanel>
      
      </TabPanel>
    </Tabs>
  );
}