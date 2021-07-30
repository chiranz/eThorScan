import React, { ReactElement } from "react";
import { joinClasses } from "../utils";
import NextLink from "./NextLink";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div
      className={joinClasses(
        "py-4",
        "border-b-2",
        "flex",
        "justify-between",
        "items-center"
      )}
    >
      <div id="brand" className="inline-flex">
        <svg
          width="25"
          height="25"
          viewBox="0 0 256 417"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            fill="#2298bd"
            d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
          />
          <path
            fill="#0ed7b5"
            d="M127.962 0L0 212.32l127.962 75.639V154.158z"
          />
          <path
            fill="#2298bd"
            d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
          />
          <path fill="#0ed7b5" d="M127.962 416.905v-104.72L0 236.585z" />
          <path
            fill="#1a7e9c"
            d="M127.961 287.958l127.96-75.637-127.96-58.162z"
          />
          <path fill="#2298bd" d="M0 212.32l127.96 75.638v-133.8z" />
        </svg>
        <h2 className="text-lg ml-4 font-medium">eThorscan</h2>
      </div>
      <ul id="nav-links">
        <li>
          <NextLink href="/">Home</NextLink>
        </li>
      </ul>
    </div>
  );
}
