import React, { ReactElement } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { GlobalContextType } from "../types";
import { joinClasses, networkNameFromId } from "../utils";
import NextLink from "./NextLink";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const { provider } = React.useContext(GlobalContext) as GlobalContextType;
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
        <h2 className="ml-4 text-lg font-medium">eThorscan</h2>
      </div>
      <ul id="nav-links" className="inline-flex">
        <li className="mr-2">
          <NextLink href="/" navLink={true}>
            Home
          </NextLink>
        </li>
        <li className="mr-2 ">
          <NextLink href="/balance" navLink={true}>
            Balance
          </NextLink>
        </li>
        {provider && (
          <li className="mr-2 text-yellow-700">
            {networkNameFromId[
              provider.network ? provider.network.chainId : null
            ] || "Unknown"}
          </li>
        )}
      </ul>
    </div>
  );
}
