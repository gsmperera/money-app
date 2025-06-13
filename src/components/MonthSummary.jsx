import formatCurrency from "../functions/formatCurrency";

export default function MonthSummary({ transLog }) {
  const income = transLog.reduce((totalIncome, day) => {
    return (
      totalIncome +
      day.transactions
        .filter((trans) => trans.type === "income")
        .reduce((dayTotal, trans) => dayTotal + trans.amount, 0)
    );
  }, 0);

  const expenses = transLog.reduce((totalExpenses, day) => {
    return (
      totalExpenses +
      day.transactions
        .filter((trans) => trans.type === "expense")
        .reduce((dayTotal, trans) => dayTotal + trans.amount, 0)
    );
  }, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="w-full shadow-md p-2">
        <p className="text-center">income</p>
        <p className="text-center text-green-600">{formatCurrency(income)}</p>
      </div>
      <div className="w-full shadow-md p-2">
        <p className="text-center">Expenses</p>
        <p className="text-center text-red-600">{formatCurrency(expenses)}</p>
      </div>
      <div className="w-full shadow-md p-2">
        <p className="text-center">Balnce</p>
        <p className="text-center">{formatCurrency(balance)}</p>
      </div>
    </div>
  );
}
