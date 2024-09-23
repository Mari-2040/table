export interface DataSource {
  id?: string;
  name?: string;
  age?: string;
  address?: string;
  phone?: string;
  company?: string;
}

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

export interface Filter {
  description: string;
}

export interface TableState {
  dataSource: DataSource[];
  columns: Column[];
}

export interface DataSourceItem {
  key?: string;
  [key: string]: any;
}

export interface TableProps {
  dataSource: DataSourceItem[];
  columns: Column[];
  onDelete: (id: string) => void;
}
