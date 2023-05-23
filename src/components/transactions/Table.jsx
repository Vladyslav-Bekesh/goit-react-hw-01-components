import { TableCss } from './Table.styled';
import { ThCss, TrCss, TdCss } from './Table.styled';

import PropTypes from 'prop-types';

function Table({ transactions }) {
  return (
    <TableCss>
      <thead>
        <TrCss>
          <ThCss>Type</ThCss>
          <ThCss>Amount</ThCss>
          <ThCss>Currency</ThCss>
        </TrCss>
      </thead>

      <tbody>
        {transactions.map(({ type, amount, currency, id }) => {
          return (
            <TrCss key={id}>
              <TdCss>{type}</TdCss>
              <TdCss>{amount}</TdCss>
              <TdCss>{currency}</TdCss>
            </TrCss>
          );
        })}
      </tbody>
    </TableCss>
  );
}

export default Table;

Table.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

