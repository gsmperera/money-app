export default function Filters({ month, year, changeMonth }) {
  return (
    <div>
      <button
        onClick={() => changeMonth(-1)}
        className="px-1 rounded border hover:bg-gray-300"
      >
        &lt;
      </button>
      <span>
        {new Date(year, month).toLocaleString("default", { month: "short" })}{" "}
        {year}
      </span>
      <button
        onClick={() => changeMonth(1)}
        className="px-1 rounded border hover:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );
}
