import React from "react";
import Table from "../components/Table";
import { joinClasses } from "../utils";

const IndexPage = () => {
  return (
    <div className={joinClasses("grid", "mt-10", "grid-rows-2m", "h-full")}>
      <Table />
    </div>
  );
};

export default IndexPage;
