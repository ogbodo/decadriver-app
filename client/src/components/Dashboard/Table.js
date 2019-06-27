import React from 'react';
import { Table } from 'react-bootstrap';

const TableExampleCelledStriped = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>S/N</th>
        <th>Driver Name</th>
        <th>Customer Name</th>
        <th>Trip Amount</th>
      </tr>
    </thead>
    <Row />
  </Table>
);

function Row() {
  const tableData = [
    [1, 'Jacob', 'Thornton', '@fat'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Jacob', 'Thornton', '@fat'],
    [1, 'Jacob', 'Thornton', '@fat'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Jacob', 'Thornton', '@fat'],
    [1, 'Jacob', 'Thornton', '@fat'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Jacob', 'Thornton', '@fat'],
    [1, 'Jacob', 'Thornton', '@fat'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Jacob', 'Thornton', '@fat'],
    [1, 'Jacob', 'Thornton', '@fat'],
  ];
  return (
    <tbody>
      {tableData.map(data => {
        return (
          <tr>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{data[3]}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
function Td(props) {}

export default TableExampleCelledStriped;
