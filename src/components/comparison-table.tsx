"'use client'"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ComparisonTableComponent() {
  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Going Direct</TableHead>
            <TableHead className="w-1/3">Broker With Multiple Funder</TableHead>
            <TableHead className="w-1/3">Why we are better</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TableCell>
              <TableCell>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
              <TableCell>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}