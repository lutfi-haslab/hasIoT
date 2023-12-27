"use client";
import {
  Column,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  Table as ReactTable,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import React from "react";
import { SingleData, SingleFormatData, tableData } from "./mock";
import { useFetchData } from "@/lib/query";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const columnHelper = createColumnHelper<SingleData>();

const TablePage = () => {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "timestamp", desc: true },
  ]);
  const [filtering, setFiltering] = React.useState("");
  const { data, isLoading } = useFetchData(2000);
  const [datas, setData] = React.useState([]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const columns = [
    columnHelper.accessor("deviceId", {
      header: () => "DeviceId",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "data",
      header: "Data",
      cell: (info) =>
        info.row.original.DataFormat.map((item: SingleFormatData) => {
          return (
            <p
              key={item.id}
              className="bg-blue-300 text-black inline-block px-2 py-1 m-1 rounded-md text-sm"
            >
              {item.key}:{item.value} {item.unit}
            </p>
          );
        }),
      enableColumnFilter: true,
    }),
    columnHelper.display({
      id: "rawData",
      header: "Raw Data",
      cell: (info) =>
        info.row.original.rawData || JSON.stringify(info.row.original.jsonData),
    }),
    columnHelper.accessor("createdAt", {
      id: "timestamp",
      header: () => "Timestamp",
      cell: (info) => (
        <div className="text-sm">
          <p className="text-green-700">
            timeServer: {new Date(info.getValue()).toLocaleString()}
          </p>
          <p className="text-blue-700">
            timeDevice: {new Date(info.getValue()).toLocaleString()}
          </p>
        </div>
      ),
      // footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data: datas,
    columns,
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getSortedRowModel: getSortedRowModel(),
  });

  React.useEffect(() => {
   if(!isLoading){
    setData(data);
   }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div>
        <label className="mb-3 block text-black dark:text-white">Search</label>
        <input
          type="text"
          placeholder="Seach by deviceId and timestamp"
          className="w-1/5 rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="bg-gray-2 text-left dark:bg-meta-4"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() &&
                          ({
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? (
                            <span>🔽🔼</span>
                          ))}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
        <div className="h-4" />
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>{table.getRowModel().rows.length} Rows</div>
        <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TablePage;