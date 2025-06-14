import MonthSummary from "./components/MonthSummary";
import TransDayList from "./components/TransDayList";

export default function TransPage({ transLog }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-1 p-4 max-w-xl">
        <MonthSummary transLog={transLog} />
        <TransDayList transLog={transLog} />
      </div>
    </div>
  );
}
