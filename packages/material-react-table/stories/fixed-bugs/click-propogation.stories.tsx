import { type Meta } from '@storybook/react';
import { MaterialReactTable, type MRT_ColumnDef } from '../../src';
import { faker } from '@faker-js/faker';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const meta: Meta = {
  title: 'Fixed Bugs/Click Propagation',
};

export default meta;

type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
];

const data = [...Array(6)].map(() => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
}));

export const RowClickAndRowMenuActions = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowActions
      enableEditing
      renderRowActionMenuItems={() => [<MenuItem>Test</MenuItem>]}
      muiTableBodyRowProps={{
        onClick: () => {
          alert('row click');
        },
      }}
    />
  );
};

export const RowClickAndRowButtonActions = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowActions
      enableEditing
      renderRowActions={() => (
        <Button onClick={(e) => e.stopPropagation()}>Test</Button>
      )}
      muiTableBodyRowProps={{
        onClick: () => {
          alert('row click');
        },
      }}
    />
  );
};
