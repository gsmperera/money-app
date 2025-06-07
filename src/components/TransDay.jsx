import formatCurrency from "../functions/formatCurrency";

export default function TransDay({ data }) {
  return (
    <div className="flex flex-col rounded-sm shadow-md p-2">
      <div className="grid grid-cols-3">
        <div className="w-full">{data.date}</div>
      </div>
      <div className="grid grid-cols-4">
        <div>{data.category.main}</div>
        <div className="col-span-2">
          <div>{data.description}</div>
          <div>{data.account}</div>
        </div>
        <div className="flex justify-end">{formatCurrency(data.amount)}</div>
      </div>
    </div>
  );
}
