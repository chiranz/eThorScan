import React from "react";
import SearchField from "../components/SearchField";
import Table from "../components/Table";
import { GlobalProvider } from "../context/GlobalContext";
import { joinClasses } from "../utils";

const IndexPage = () => {
  return (
    <div className={joinClasses("grid", "mt-10", "grid-rows-2m", "h-full")}>
      <GlobalProvider>
        <SearchField />
        <Table />
      </GlobalProvider>
    </div>
  );
};

export default IndexPage;
