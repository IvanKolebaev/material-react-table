import React, { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { data, type Person } from './makeData';

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 100,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 100,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'age',
        header: 'Age',
        muiTableHeadCellProps: {
          align: 'right',
        },
        muiTableBodyCellProps: {
          align: 'right',
        },
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        muiTableHeadCellProps: {
          align: 'right',
        },
        muiTableBodyCellProps: {
          align: 'right',
        },
        Cell: ({ cell }) =>
          cell
            .getValue<number>()
            .toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;
