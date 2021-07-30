import React, { ReactElement } from "react";
import { joinClasses } from "../utils";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div className={joinClasses("py-4", "border-t-2")}>
      Made by{" "}
      <a
        href="https://github.com/chiranz"
        className={joinClasses("hover:underline", "text-blue-700")}
      >
        Chiranjibi
      </a>
    </div>
  );
}
