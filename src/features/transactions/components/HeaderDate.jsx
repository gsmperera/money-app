export default function HeaderDate({ date }) {
  const dateObj = new Date(date);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="w-full">
      <span className="text-md">
        {dateObj.getDate().toString().padStart(2, "0")}
      </span>
      <span className="rounded-sm px-1 mx-1 text-xs bg-slate-300">
        {days[dateObj.getDay()]}
      </span>
      <span className="text-xs text-slate-500">
        {(dateObj.getMonth() + 1).toString().padStart(2, "0")}.
        {dateObj.getFullYear()}
      </span>
    </div>
  );
}
