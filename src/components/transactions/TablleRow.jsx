import { TdCss, TrCss } from './Table.styled';

function TableRow({ type, amount, currency }) {
  return (
    <TrCss>
      <TdCss>{type}</TdCss>
      <TdCss>{amount}</TdCss>
      <TdCss>{currency}</TdCss>
    </TrCss>
  );
}

export default TableRow;
