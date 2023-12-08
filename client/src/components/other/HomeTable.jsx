import * as React from 'react';
import Table from '@mui/joy/Table';

export default function HomeTable() {
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th>Dessert</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen yoghurt</td>
          <td>159</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>305</td>
        </tr>
        <tr>
          <td>Gingerbread</td>
          <td>356</td>
        </tr>
      </tbody>
    </Table>
  );
}