export interface DataSource {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

export interface TableState {
  dataSource: DataSource[];
  columns: Column[];
}

export interface DataSourceItem {
  key: string;
  [key: string]: any;
}

export interface TableProps {
  dataSource: DataSourceItem[];
  columns: Column[];
}
