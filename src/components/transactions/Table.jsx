import TableHead from './TableHead';
import TableBody from './TableBody';
import transactions from '../../data/transactions.json';//data
import { TableCss } from './Table.styled';

import PropTypes from 'prop-types';

function Table() {
  return (
    <TableCss>
      <TableHead></TableHead>
      <TableBody transactions={transactions}></TableBody>
    </TableCss>
  );
}

export default Table;

Table.propTypes = {
  transactions:PropTypes.array
};