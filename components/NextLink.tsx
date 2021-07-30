import React, { ReactElement } from "react";
import Link from "next/link";
import { joinClasses } from "../utils";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NextLink({ href, children }: Props): ReactElement {
  return (
    <Link href={href}>
      <a
        className={joinClasses("text-blue-700", "hover:underline")}
        target={href.includes("https") ? "_blank" : ""}
      >
        {children}
      </a>
    </Link>
  );
}
