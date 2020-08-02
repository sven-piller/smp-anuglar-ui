import { TableComponent } from './table.component';

export default {
  title: 'UiTable',
  component: TableComponent,
  excludeStories: /.*Data$/,
};

export const tableData = {
  headers: ['A', 'B'],
  data: [[1, 2], [3, 4]],
};

export const Normal = () => ({
  component: TableComponent,
  props: {
    ...tableData,
    headers: null
  },
});

export const WithHeader = () => ({
  component: TableComponent,
  props: {
    ...tableData
  },
});

