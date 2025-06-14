import TransPage from "./features/transactions/TransPage";
import { transactionData } from "./assets/sample-transactions";

export default function App() {
  return <TransPage transLog={transactionData} />;
}
