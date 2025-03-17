import { type Component } from "solid-js";
import type { TableRowProps } from "../../types";

const TableRow: Component<TableRowProps> = (props) => {
  return (
    <tr class="border-b border-gray-200 last:border-0 divide-x divide-gray-200">
      {props.columns.map((col) => {
        // Default cell content
        let cellContent = props.rowData[col.key];

        // If this column is "tag", render it as a circular badge
        if (col.key === "tag") {
          cellContent = (
            <span class={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-mint-${props.rowData[col.key]}00 text-black font-semibold`}>
              {props.rowData[col.key]}
            </span>
          );
        }

        if (col.key === "hyperlink") {
          cellContent = (
            <span class="text-violet-600 items-center justify-center cursor-pointer whitespace-nowrap">
              {props.rowData[col.key]}
            </span>
          );
        }

        // Apply center alignment only to "tag" and "hyperlink" cells
        const centerCell =
          col.key === "tag" || col.key === "hyperlink" || col.key === "no"
            ? "text-center align-middle font-semibold"
            : "";

        return (
          <td key={col.key} class={`p-0.5 text-gray-700 text-s max-w-[250px] ${centerCell} `}>
            {cellContent}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
