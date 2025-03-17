import { type Component } from "solid-js";
import type { TableHeaderProps } from "../../types";

const TableHeader: Component<TableHeaderProps> = (props) => {
  return (
    <thead class="bg-gray-50 border-b border-gray-200 text-gray-600">
      <tr class="divide-x divide-gray-200">
        {props.columns.map((col, index) => (
          <th
            scope="col"
            class={`px-0 py-1 text-center ${index === 0 && props.firstCellClassName ? props.firstCellClassName : ""} ${col.className ?? ""}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
