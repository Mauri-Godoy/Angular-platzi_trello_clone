export interface ToDo {
  id: string;
  title: string;
}

export interface Column {
  title: string;
  tasks: ToDo[];
}
