import React, { ReactElement } from "react";
import { joinClasses } from "../utils";
import Button from "./Button";

interface Props {
  actionText: string;
  handleSearch: (search: string) => Promise<void>;
  placeHolder: string;
  type?: string;
  loading?: boolean;
}

export default function SearchField({
  actionText,
  type = "text",
  placeHolder,
  handleSearch,
  loading,
}: Props): ReactElement {
  const [search, setSearch] = React.useState("");
  const handleSubmit = async () => {
    await handleSearch(search);
    setSearch("");
  };
  return (
    <div className="flex text-left">
      <input
        type={type}
        placeholder={placeHolder}
        className={joinClasses("py-2", "px-4", "border", "w-full", "rounded")}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button
        color="primary"
        onClick={handleSubmit}
        className={joinClasses("capitalize")}
        disabled={loading}
      >
        {actionText}
      </Button>
    </div>
  );
}
