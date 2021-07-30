import React, { ReactElement } from "react";
import { joinClasses } from "../utils";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className={joinClasses("py-4", "border-b-2")}>
      <div id="brand">
        <h2 className="text-2xl">ThorScan</h2>
      </div>
    </div>
  );
}
