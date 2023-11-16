import React from "react";
import Tab from "./Tab/Tab";
import { TAB } from "../EventExplorer";

const FilterTabs = ({ tab, onTabChange }) => {
  return (
    <div className="w-1/1 mx-auto border-b border-blue-200 font-montserrat text-center text-2xl color-black-100 ">
      {[TAB.POPULAR, TAB.TOP_RATED, TAB.NEW, TAB.FOLLOWED].map((t,index) => (
        <Tab key={index} onClick={() => onTabChange(t)} isActive={tab === t}>
          {t}
        </Tab>
      ))}
    </div>
  );
};

export default FilterTabs;
