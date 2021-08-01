import React, { ReactElement } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GlobalContextType, FormattedBlock } from "../types";
import { joinClasses } from "../utils";
import { GlobalContext } from "../context/GlobalContext";
import NextLink from "./NextLink";

dayjs.extend(relativeTime);

export default function Table(): ReactElement {
  const { blocks, loading } = React.useContext(
    GlobalContext
  ) as GlobalContextType;
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <h1 className="text-lg font-medium text-left">Recent Blocks</h1>
            <table className="min-w-full divide-y divide-gray-200 ">
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr className="text-2xl">
                    <td className="py-20">Loading...</td>
                  </tr>
                ) : (
                  blocks.slice(0, 5).map((block) => (
                    <tr key={block.timestamp} title="mined block">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className={joinClasses(
                              "flex",
                              "items-center",
                              "justify-center",
                              "flex-shrink-0",
                              "w-10",
                              "h-10",
                              "bg-gray-200",
                              "rounded-full"
                            )}
                          >
                            <span>BK</span>
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-gray-900"
                              title="block height"
                            >
                              Block Height:
                              <NextLink href={`/block/${block.height}`}>
                                {block.height}
                              </NextLink>
                            </div>
                            <div
                              className="text-sm text-gray-500"
                              title="timestamp"
                            >
                              {dayjs.unix(block.timestamp).fromNow()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          className="text-sm text-gray-900"
                          title="miner address"
                        >
                          Miner:{" "}
                          <NextLink href={`address/${block.miner}`}>
                            {block.miner.slice(0, 7)}...
                          </NextLink>
                        </div>
                        <div
                          className="text-sm text-gray-500"
                          title="transaction count"
                        >
                          Tx Count: {block.transactionCount}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
