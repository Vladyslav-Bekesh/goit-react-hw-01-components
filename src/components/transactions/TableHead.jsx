import { ThCss, TrCss } from './Table.styled';

function TableHead() {
  return (
    <thead>
      <TrCss>
        <ThCss>Type</ThCss>
        <ThCss>Amount</ThCss>
        <ThCss>Currency</ThCss>
      </TrCss>
    </thead>
  );
}

export default TableHead;