import React, { ReactElement } from "react";

interface Props {
  descText: string;
  value: string | number | null;
}

export default function MapField({ descText, value }: Props): ReactElement {
  return (
    <div className="inline-flex items-center mt-4">
      <h3 className="text-lg font-medium capitalize">{descText}: </h3>{" "}
      <span className="ml-4 text-gray-500">{value}</span>
    </div>
  );
}
