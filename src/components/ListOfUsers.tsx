// 'use client';

import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

const users: {
  id: string;
  name: string;
  email: string;
  github: string;
}[] = [
  {
    id: "1",
    name: "Ivan Stebler",
    email: "ivanstebler@emailprovider.com",
    github: "ivansteb",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bobsmith@emailprovider.com",
    github: "bobsmith",
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    email: "carlos.rodriguez@emailprovider.com",
    github: "carlosrodriguez",
  },
  {
    id: "4",
    name: "Diana Chen",
    email: "diana.chen@emailprovider.com",
    github: "dianachen",
  },
  {
    id: "5",
    name: "Erik Johnson",
    email: "erik.johnson@emailprovider.com",
    github: "erikjohnson",
  },
  {
    id: "6",
    name: "Fatima Hassan",
    email: "fatima.hassan@emailprovider.com",
    github: "fatimahassan",
  },
  {
    id: "7",
    name: "Gabriel Torres",
    email: "gabriel.torres@emailprovider.com",
    github: "gabrieltorres",
  },
  {
    id: "8",
    name: "Hannah Kim",
    email: "hannah.kim@emailprovider.com",
    github: "hannahkim",
  },
  {
    id: "9",
    name: "Ian Patel",
    email: "ian.patel@emailprovider.com",
    github: "ianpatel",
  },
  {
    id: "10",
    name: "Julia Martinez",
    email: "julia.martinez@emailprovider.com",
    github: "juliamartinez",
  },
  {
    id: "11",
    name: "Kevin Wong",
    email: "kevin.wong@emailprovider.com",
    github: "kevinwong",
  },
  {
    id: "12",
    name: "Laura Thompson",
    email: "laura.thompson@emailprovider.com",
    github: "laurathompson",
  },
];

export function ListOfUsers() {
  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="mb-4 text-2xl font-bold text-white">Usuarios</Title>
      <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-xl bg-slate-600 text-white">
        <Table className="w-full">
          <TableHead className="bg-slate-800">
            <TableRow className="border-b">
              <TableHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </TableHeaderCell>
              <TableHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-slate-700 transition-colors duration-200"
              >
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {user.id}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    <img
                      src={`https://unavatar.io/github/${user.github}`}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full mr-3 border border-gray-200"
                    />
                    <span className="font-medium text-gray-200">
                      {user.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  {user.email}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button className="rounded-md bg-blue-900 px-2.5 py-1 text-xs font-semibold text-blue-300 shadow-sm hover:bg-blue-600">
                      Editar
                    </button>
                    <button className="rounded-md bg-red-900 px-2.5 py-1 text-xs font-semibold text-red-300 shadow-sm hover:bg-red-600">
                      Eliminar
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
