import TransDay from "./TransDay";

export default function TransDayList({ transLog }) {
  return (
    <div className="flex flex-col gap-1">
      {transLog.map((trn, index) => {
        return <TransDay key={index} data={trn} />;
      })}
    </div>
  );
}
