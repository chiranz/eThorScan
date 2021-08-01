import React, { ReactElement } from "react";
import Link from "next/link";
import { joinClasses } from "../utils";

interface Props {
  href: string;
  children: React.ReactNode;
  navLink?: boolean;
}

export default function NextLink({
  href,
  children,
  navLink = false,
}: Props): ReactElement {
  const textColor = navLink ? "text-green-700" : "text-blue-700";
  return (
    <Link href={href}>
      <a
        className={joinClasses(textColor, "hover:underline")}
        target={href.includes("https") ? "_blank" : ""}
      >
        {children}
      </a>
    </Link>
  );
}
