import Table from './Table';
import transactions from '../../data/transactions.json';//data

function Transaction() {
  return <Table transactions={transactions}></Table>;
}

export default Transaction;
