import TableHead from './TableHead';
import TableBody from './TableBody';
import transactions from '../../data/transactions.json';

import PropTypes from 'prop-types';

function Table() {
  return (
    <table className="transaction-history">
      <TableHead></TableHead>
      <TableBody transactions={transactions}></TableBody>
    </table>
  );
}

export default Table;

Table.propTypes = {
  transactions:PropTypes.array
};