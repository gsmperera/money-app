import Transaction from "./Transaction";

export default function TransDay({ date, transData }) {
  return (
    <div className="flex flex-col rounded-sm shadow-md p-2">
      <div className="grid grid-cols-3 border-b border-b-gray-300">
        <div className="w-full">{date}</div>
      </div>
      {transData.map((trans) => {
        return <Transaction key={trans.id} data={trans} />;
      })}
    </div>
  );
}
