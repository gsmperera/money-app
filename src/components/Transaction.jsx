import formatCurrency from "../functions/formatCurrency";

export default function Transaction({ data }) {
  const amountColor =
    data.type === "income"
      ? " text-green-600"
      : data.type === "expense"
      ? " text-red-600"
      : null;
  const amountStyles = "flex justify-end " + amountColor;
  return (
    <div className="grid grid-cols-4 pt-1">
      <div>{data.category.main}</div>
      <div className="col-span-2">
        <div>{data.description}</div>
        <div>{data.account}</div>
      </div>
      <div className={amountStyles}>{formatCurrency(data.amount)}</div>
    </div>
  );
}
