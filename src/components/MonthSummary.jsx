import formatCurrency from "../functions/formatCurrency";

export default function MonthSummary({ transLog }) {
  const income = transLog
    .filter((trans) => trans.type === "income")
    .reduce((total, current) => {
      return total + current.amount;
    }, 0);

  const expenses = transLog
    .filter((trans) => trans.type === "expense")
    .reduce((total, current) => {
      return total + current.amount;
    }, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="w-full shadow-md">
        <p className="text-center">income</p>
        <p className="text-center">{formatCurrency(income)}</p>
      </div>
      <div className="w-full shadow-md">
        <p className="text-center">Expenses</p>
        <p className="text-center">{formatCurrency(expenses)}</p>
      </div>
      <div className="w-full shadow-md">
        <p className="text-center">Balnce</p>
        <p className="text-center">{formatCurrency(balance)}</p>
      </div>
    </div>
  );
}
