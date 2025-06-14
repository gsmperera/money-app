import Transaction from "./Transaction";
import HeaderDate from "./HeaderDate";

export default function TransDay({ date, transData }) {
  return (
    <div className="flex flex-col rounded-sm shadow-md p-2">
      <div className="grid grid-cols-3 border-b border-b-gray-300">
        <HeaderDate date={date} />
      </div>
      {transData.map((trans) => {
        return <Transaction key={trans.id} data={trans} />;
      })}
    </div>
  );
}
