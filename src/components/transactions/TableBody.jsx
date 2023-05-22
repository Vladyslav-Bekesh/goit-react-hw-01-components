import TableRow from './TablleRow';

function TableBody(transactions) {
  console.log(transactions);
  return (
    <tbody>
      {transactions.map(({ type, amount, currency, id }) => {
        return (
          <TableRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TableRow>
        );
      })}
    </tbody>
  );
}

export default TableBody;
