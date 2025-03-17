export interface Column {
    key: string;
    label: string;
    className?: string;
  }
  
  export interface TableRowData {
    [key: string]: any;
  }

  export interface TableHeaderProps {
    columns: Column[];
    firstCellClassName?: string;
  }

 export interface TableRowProps {
    rowData: TableRowData;
    columns: { key: string }[];
  }

  export interface InfoTableProps {
    title: string;
    columns: Column[];
    data: TableRowData[];
    headerFirstCellClassName?: string;
  }