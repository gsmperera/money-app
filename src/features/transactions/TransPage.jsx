import { useState } from "react";
import MonthSummary from "./components/MonthSummary";
import TransDayList from "./components/TransDayList";
import Filters from "./components/Filters";

export default function TransPage({ transLog }) {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const changeMonth = (change) => {
    const newDate = new Date(year, month + change, 1);
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  };
  const currentMonthTransLog = transLog.filter((trans) => {
    return (
      new Date(trans.date).getMonth() === month &&
      new Date(trans.date).getFullYear() === year
    );
  });
  console.log("Current Month Transactions:", currentMonthTransLog);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-1 p-4 max-w-xl">
        <Filters month={month} year={year} changeMonth={changeMonth} />
        <MonthSummary transLog={currentMonthTransLog} />
        <TransDayList transLog={currentMonthTransLog} />
      </div>
    </div>
  );
}
