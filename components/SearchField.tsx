import React, { ReactElement } from "react";
import { joinClasses } from "../utils";
import Button from "./Button";

interface Props {}

export default function SearchField({}: Props): ReactElement {
  const [search, setSearch] = React.useState("");
  return (
    <div className={joinClasses("grid", "grid-rows-2m", "h-full")}>
      <div className="text-left ">
        <input
          type="text"
          placeholder="transaction hash"
          className={joinClasses("py-2", "px-4", "border", "w-full", "rounded")}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button
          color="primary"
          onClick={() => {
            console.log("Searching....");
          }}
          className={joinClasses("my-2", "float-right")}
        >
          Search
        </Button>
      </div>
      <div
        id="sections"
        className={joinClasses("h-full", "grid", "grid-cols-2")}
      >
        <div
          id="left"
          className={joinClasses(
            "grid",
            "content-center",
            "w-full",
            "h-full",
            "border",
            "rounded"
          )}
        >
          Recent Blocks
        </div>
        <div
          id="right "
          className={joinClasses(
            "grid",
            "content-center",
            "w-full",
            "h-full",
            "border",
            "rounded"
          )}
        >
          Recent Transactions
        </div>
      </div>
    </div>
  );
}
