import TransPage from "./components/TransPage";
import { transData } from "./assets/sample-transactions";

export default function App() {
  return <TransPage transLog={transData} />;
}
