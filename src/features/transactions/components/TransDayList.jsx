import TransDay from "./TransDay";

export default function TransDayList({ transLog }) {
  return (
    <div className="flex flex-col gap-1">
      {transLog.map((day) => {
        return (
          <TransDay
            key={day.date}
            date={day.date}
            transData={day.transactions}
          />
        );
      })}
    </div>
  );
}
