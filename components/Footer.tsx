import React, { ReactElement } from "react";
import { joinClasses } from "../utils";
import NextLink from "./NextLink";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div className={joinClasses("py-4", "border-t-2")}>
      Made by <NextLink href="https://github.com/chiranz">Chiranjibi</NextLink>
    </div>
  );
}
