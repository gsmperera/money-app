import MonthSummary from "./MonthSummary";
import TransDayList from "./TransDayList";

export default function TransPage({ transLog }) {
  return (
    <div className="flex flex-col gap-1 p-4 max-w-xl">
      <MonthSummary transLog={transLog} />
      <TransDayList transLog={transLog} />
    </div>
  );
}
