import { type Component } from "solid-js";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import type { TableRowData, Column } from "../../types";
// Import Heroicons from a SolidJS Heroicons package
// import { InformationCircleIcon, EllipsisHorizontalIcon } from "solid-heroicons/outline";

interface InfoTableProps {
  title: string;
  columns: Column[];
  data: TableRowData[];
  headerFirstCellClassName?: string;
}

const InfoTable: Component<InfoTableProps> = (props) => {
  return (
    <div>
      {/* Card Header */}
      <div class="flex items-center justify-between mb-1">
        <div class="flex items-center space-x-1">
          <h2 class="text-xl font-semibold">{props.title}</h2>
          <button
            type="button"
            class="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Information"
          >
            {/* <InformationCircleIcon class="w-5 h-5" /> */}
          </button>
        </div>
        <button
          type="button"
          class="rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Options"
        >
          {/* <EllipsisHorizontalIcon class="w-6 h-6" /> */}
        </button>
      </div>
      {/* Table Section */}
      <div class="overflow-x-auto border rounded-lg">
        <table class="min-w-full text-sm text-gray-700">
          <TableHeader columns={props.columns} firstCellClassName={props.headerFirstCellClassName} />
          <tbody>
            {props.data.map((row) => (
              <TableRow rowData={row} columns={props.columns} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTable;
